import React, {useEffect, useRef, memo} from 'react';
import FullCalendar from '@fullcalendar/react';
import listPlugin from '@fullcalendar/list';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import toast from 'react-hot-toast';
import {Menu} from 'react-feather';
import {Card, CardBody} from 'reactstrap';
import ruLocale from '@fullcalendar/core/locales/ru';

const events = [
    {title: "event", date: new Date(), calendar: "indigo"},
    {title: "event", date: new Date(), calendar: "cyan"},
    {title: "event", start: "2022-05-09", end: "2022-05-09", allDay: false, calendar: "red"},
    {title: "event", start: "2022-05-05", end: "2022-05-07", allDay: true, calendar: "yellow"}
];

const colorClass = {
    indigo: "bg-indigo-500/30 border border-indigo-500",
    yellow: "bg-yellow-500/30 border border-yellow-500",
    red: "bg-red-500/30 border border-red-500",
    blue: "bg-blue-500/30 border border-blue-500 hover:bg-red-500/40",
}

const CalendarModule = props => {
    const calendarRef = useRef(null);

    const {
        store,
        dispatch,
        calendarsColor,
        calendarApi,
        setCalendarApi,
        handleAddEventSidebar,
        blankEvent,
        toggleSidebar,
        selectEvent,
        updateEvent
    } = props;

    useEffect(() => {
        if (calendarApi === null) {
            setCalendarApi(calendarRef.current.getApi())
        }
    }, [calendarApi])

    const calendarOptions = {
        events: store.events.length ? store.events : events,
        plugins: [interactionPlugin, dayGridPlugin, timeGridPlugin, listPlugin],
        initialView: 'dayGridMonth',
        headerToolbar: {
            start: 'sidebarToggle title',
            end: 'dayGridMonth,timeGridWeek,timeGridDay today prev,next'
        },
        editable: true,
        eventResizableFromStart: false,
        dragScroll: false,
        dayMaxEvents: true,
        navLinks: true,
        locale: ruLocale,

        eventClassNames({event: calendarEvent}) {
            const colorName = calendarsColor[calendarEvent._def.extendedProps.calendar]

            return [
                // Фоновый цвет событий
                `fc-event-${colorName}`
            ]
        },

        eventClick({event: clickedEvent}) {
            dispatch(selectEvent(clickedEvent));
            handleAddEventSidebar();

            // * Only grab required field otherwise it goes in infinity loop
            // ! Always grab all fields rendered by form (even if it get `undefined`) otherwise due to Vue3/Composition API you might get: "object is not extensible"
            // event.value = grabEventDataFromEventApi(clickedEvent)

            // eslint-disable-next-line no-use-before-define
            // isAddNewEventSidebarActive.value = true
        },

        customButtons: {
            sidebarToggle: {
                text: <Menu className='d-xl-none d-block'/>,
                click() {
                    toggleSidebar(true)
                }
            }
        },

        dateClick(info) {
            const ev = blankEvent
            ev.start = info.date
            ev.end = info.date
            dispatch(selectEvent(ev))
            handleAddEventSidebar()
        },

        eventDrop({event: droppedEvent}) {
            dispatch(updateEvent(droppedEvent))
            toast.success('Событие обновлено')
        },

        eventResize({event: resizedEvent}) {
            dispatch(updateEvent(resizedEvent))
            toast.success('Событие обновлено')
        },

        ref: calendarRef
    }

    return (
        <div className="calendar-module">
            <FullCalendar {...calendarOptions} />
        </div>
    )
}

export default memo(CalendarModule)
