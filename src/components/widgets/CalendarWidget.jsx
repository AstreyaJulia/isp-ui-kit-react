import React, {useEffect, useState} from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import ruLocale from "@fullcalendar/core/locales/ru";
import {APIClient, setAuthorization} from "../../utils/Helpers/api_helper";

const fetch = new APIClient();
if (localStorage.getItem("jwt")) {
    setAuthorization(localStorage.getItem("jwt").replace(/['"]+/g, '').toString())
}

const CalendarWidget = () => {

    /** Стейты погоды и даты */
    const [events, setEvents] = useState({});

    const getEvents = () => {
        fetch.get("components/fullcalendar/events.php?startParam=2022-04-25&endParam=2022-06-06&calendars=primary,success,info,warning,danger,pink,blue,orange,teal,azure&private=0", "")
            .then((response) => {
                setEvents(response);
            })
            .catch((err) => console.log(err));
    }

    useEffect(() => {
        getEvents();
        // eslint-disable-next-line
    }, []);


    /*const events = [
        {title: "today"s event", date: new Date()},
        {title: "today"s event", date: new Date()},
        {title: "today"s event", start: "2022-05-09", end: "2022-05-09", allDay: false},
        {title: "today"s event", start: "2022-05-05", end: "2022-05-07", allDay: true}
    ];*/

    return (
        <div className="bg-white dark:bg-gray-900 overflow-hidden shadow rounded-lg mb-3 p-4">
            <div className="today-calendar">
                <FullCalendar
                    plugins={[dayGridPlugin]}
                    events={events}
                    locale={ruLocale}
                    initialView="dayGridMonth"
                    editable="false"
                    selectable="true"
                    businessHours="false"
                    dayMaxEvents="false"
                    contentHeight="250px"
                    headerToolbar={{
                        left: "today",
                        right: "prev,title,next"
                    }}
                />
            </div>
        </div>
    );
};

export default CalendarWidget;