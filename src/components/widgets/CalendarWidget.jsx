import React, {useEffect, useRef, useState} from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import ruLocale from "@fullcalendar/core/locales/ru";
import {APIClient, setAuthorization} from "../../utils/Helpers/api_helper";
import {events as SampleEvents} from "../../@mock/SampleData";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import {fetchEvents} from "../../pages/apps/calendar/store";
import {useDispatch, useSelector} from "react-redux";

const fetch = new APIClient();
if (localStorage.getItem("jwt")) {
    setAuthorization(localStorage.getItem("jwt").replace(/['"]+/g, '').toString())
}

const CalendarWidget = () => {

    /** Цвета для Fullcalendar */
    /** Цвета событий, названия менять в разметке, в js менять не надо */
    const calendCat = [
        {
            color: "indigo",
            name: "События"
        },
        {
            color: "green",
            name: "Отпуск"
        },
        {
            color: "cyan",
            name: "Дежурство"
        },
        {
            color: "yellow",
            name: "Важно"
        },
        {
            color: "red",
            name: "Праздники"
        },
        {
            color: "pink",
            name: "Категория 1"
        },
        {
            color: "blue",
            name: "Категория 2"
        },
        {
            color: "orange",
            name: "Категория 3"
        },
        {
            color: "teal",
            name: "Категория 4"
        },
        {
            color: "sky",
            name: "Категория 5"
        }
    ]

    /** Из объекта с цветами событий и именами категорий возвращает объект с цветом
     * @returns {{[p: string]: any}}
     */
    function araycal() {
        const array = new Map();
        for (let i = 0; i < calendCat.length; i++) {
            array.set(calendCat[i].color, calendCat[i].color);
        }
        return (Object.fromEntries(array));
    }

    /** Для использования в Fullcalendar */
    const calendarsColor = araycal();

    const calendarRef = useRef(null);

    const dispatch = useDispatch();
    const store = useSelector(state => state.calendar);

    /** Стейты погоды и даты */
    const [events, setEvents] = useState({});

    const getEvents = () => {
        /** Сервер */
        /* fetch.get("components/fullcalendar/events.php?startParam=2022-04-25&endParam=2022-06-06&calendars=primary,success,info,warning,danger,pink,blue,orange,teal,azure&private=0", "")
            .then((response) => {
                setEvents(response);
            })
            .catch((err) => console.log(err));
         */

        /** Локально */
        setEvents(SampleEvents);
    }

    useEffect(() => {
        dispatch(fetchEvents(store.selectedCalendars))
    }, [])

    useEffect(() => {
        getEvents();
        // eslint-disable-next-line
    }, []);

    const calendarOptions = {
        events: store.events.length ? store.events : events,
        plugins: [dayGridPlugin],
        initialView: "dayGridMonth",
        headerToolbar: {
            left: "today",
            right: "prev,title,next"
        },
        editable: false,
        selectable: "true",
        businessHours: "false",
        eventResizableFromStart: false,
        contentHeight: "250px",
        dragScroll: false,
        dayMaxEvents: false,
        navLinks: false,
        locale: ruLocale,
        eventClassNames({event: calendarEvent}) {
            const colorName = calendarsColor[calendarEvent._def.extendedProps.calendar]

            return [
                // Фоновый цвет событий
                `fc-event-${colorName}`
            ]
        },
        ref: calendarRef
    }


    return (
        <div className="widget bg-white dark:bg-gray-900 overflow-hidden shadow rounded-lg mb-3 p-4">
            <div className="today-calendar">
                <FullCalendar {...calendarOptions} />
            </div>
        </div>
    );
};

export default CalendarWidget;