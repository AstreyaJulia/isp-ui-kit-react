import {Fragment, useEffect, useState} from 'react';
import {Helmet} from "react-helmet";
import PageHeader from "../../components/PageHeader";
import CalendarModule from './calendar/index';
import SidebarLeft from './calendar/Sidebar';
import AddEventSidebar from './calendar/AddEventSidebar';
import {useDispatch, useSelector} from 'react-redux';
import config from "../../config";
import {
    addEvent,
    fetchEvents,
    removeEvent,
    selectEvent,
    updateAllFilters,
    updateEvent,
    updateFilter
} from './calendar/store';
import classnames from "classnames";

const breadcrumbs = [{name: 'Календарь', href: '#', current: true}];

/** Цвета для Fullcalendar */
/** Цвета событий, названия менять в разметке, в js менять не надо */
const calendCat = [
    {
        color: "primary",
        name: "События"
    },
    {
        color: "success",
        name: "Отпуск"
    },
    {
        color: "info",
        name: "Дежурство"
    },
    {
        color: "warning",
        name: "Важно"
    },
    {
        color: "danger",
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
        color: "azure",
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

const Calendar = () => {
    const dispatch = useDispatch()
    const store = useSelector(state => state.calendar)

    const [calendarApi, setCalendarApi] = useState(null)
    const [addSidebarOpen, setAddSidebarOpen] = useState(false)
    const [leftSidebarOpen, setLeftSidebarOpen] = useState(false)

    const handleAddEventSidebar = () => setAddSidebarOpen(!addSidebarOpen)

    const toggleSidebar = val => setLeftSidebarOpen(val)

    const blankEvent = {
        title: '',
        start: '',
        end: '',
        allDay: false,
        url: '',
        extendedProps: {
            calendar: '',
            guests: [],
            location: '',
            description: ''
        }
    }

    const refetchEvents = () => {
        if (calendarApi !== null) {
            calendarApi.refetchEvents()
        }
    }

    // получаем события при монтировании
    useEffect(() => {
        dispatch(fetchEvents(store.selectedCalendars))
    }, [])


    return (
        <Fragment>
            <Helmet>
                <title>{config.APP_NAME} - Календарь</title>
            </Helmet>
            <div className="flex flex-col p-4 justify-self-stretch justify-center">
                <PageHeader pages={breadcrumbs}/>

                <div className="flex-1 flex mt-4">
                    <div className='app-calendar'>
                        <SidebarLeft
                            store={store}
                            dispatch={dispatch}
                            updateFilter={updateFilter}
                            toggleSidebar={toggleSidebar}
                            updateAllFilters={updateAllFilters}
                            handleAddEventSidebar={handleAddEventSidebar}
                        />
                        <CalendarModule
                            store={store}
                            dispatch={dispatch}
                            blankEvent={blankEvent}
                            calendarApi={calendarApi}
                            selectEvent={selectEvent}
                            updateEvent={updateEvent}
                            toggleSidebar={toggleSidebar}
                            calendarsColor={calendarsColor}
                            setCalendarApi={setCalendarApi}
                            handleAddEventSidebar={handleAddEventSidebar}
                        />
                        <div
                            className={classnames('body-content-overlay', {
                                show: leftSidebarOpen === true
                            })}
                            onClick={() => toggleSidebar(false)}
                        />
                    </div>
                    <AddEventSidebar
                        store={store}
                        dispatch={dispatch}
                        addEvent={addEvent}
                        open={addSidebarOpen}
                        selectEvent={selectEvent}
                        updateEvent={updateEvent}
                        removeEvent={removeEvent}
                        calendarApi={calendarApi}
                        refetchEvents={refetchEvents}
                        calendarsColor={calendarsColor}
                        handleAddEventSidebar={handleAddEventSidebar}
                    />
                </div>

            </div>
        </Fragment>
    );
};

export default Calendar;