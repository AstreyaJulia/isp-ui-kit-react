import {useEffect, useRef, memo} from 'react';
import FullCalendar from '@fullcalendar/react';
import listPlugin from '@fullcalendar/list';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import toast from 'react-hot-toast';
import {Menu} from 'react-feather';
import {Card, CardBody} from 'reactstrap';
import ruLocale from '@fullcalendar/core/locales/ru';

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
        events: store.events.length ? store.events : [],
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
        <Card className='shadow-none border-0 mb-0 rounded-0'>
            <CardBody className='pb-0 calendar-module'>
                <FullCalendar {...calendarOptions} />{' '}
            </CardBody>
        </Card>
    )
}

export default memo(CalendarModule)
