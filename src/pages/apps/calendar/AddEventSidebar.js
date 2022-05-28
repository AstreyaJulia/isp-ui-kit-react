import React, {Fragment, useState} from 'react';
import {Avatar} from '../../../components/elements/Avatar';
import {X} from 'react-feather';
import toast from 'react-hot-toast';
import Flatpickr from 'react-flatpickr';
import Select, {components} from 'react-select'; // eslint-disable-line
import {Controller, useForm} from 'react-hook-form';
import {Form, Input, Label, Modal, ModalBody, ModalHeader} from 'reactstrap';
import {isObjEmpty} from '../../../utils';
import img1 from '../../../assets/images/avatars/1-small.png';
import img2 from '../../../assets/images/avatars/3-small.png';
import img3 from '../../../assets/images/avatars/5-small.png';
import img4 from '../../../assets/images/avatars/7-small.png';
import img5 from '../../../assets/images/avatars/9-small.png';
import img6 from '../../../assets/images/avatars/11-small.png';
import PrimaryButton from "../../../components/elements/PrimaryButton";
import DangerButton from "../../../components/elements/DangerButton";
import {Dialog, Transition} from '@headlessui/react';
import {XIcon} from "@heroicons/react/outline";
import {Switch} from '@headlessui/react'
import classNames from "classnames";
import CardHeader from "../../../components/elements/CardHeader";
import Dot from "../../../components/elements/Dot";

const AddEventSidebar = props => {

    const [enabled, setEnabled] = useState(false)

    const {
        open,
        store,
        dispatch,
        addEvent,
        calendarApi,
        selectEvent,
        updateEvent,
        removeEvent,
        refetchEvents,
        calendarsColor,
        handleAddEventSidebar
    } = props;

    const selectedEvent = store.selectedEvent,
        {
            control,
            setError,
            setValue,
            getValues,
            handleSubmit,
            formState: {errors}
        } = useForm({
            defaultValues: {title: ''}
        });

    const options = [
        {value: 'indigo', label: 'События', color: 'indigo'},
        {value: 'green', label: 'Отпуск', color: 'green'},
        {value: 'cyan', label: 'Дежурство', color: 'cyan'},
        {value: 'yellow', label: 'Важно', color: 'yellow'},
        {value: 'red', label: 'Праздники', color: 'red'},
        {value: 'pink', label: 'Категория 1', color: 'pink'},
        {value: 'blue', label: 'Категория 2', color: 'blue'},
        {value: 'orange', label: 'Категория 3', color: 'orange'},
        {value: 'teal', label: 'Категория 4', color: 'teal'},
        {value: 'sky', label: 'Категория 5', color: 'sky'}
    ];

    //const [owner, setOwner] = useState(0); // owner
    const [desc, setDesc] = useState(''); // description
    const [users, setUsers] = useState({}); // users
    const [allDay, setAllDay] = useState(false); // allDay
    const [endPicker, setEndPicker] = useState(new Date()); // end
    const [startPicker, setStartPicker] = useState(new Date()); // start
    const [calendarLabel, setCalendarLabel] = useState(options[0]); // calendar

    /** Объект с пользователями
     * @type {[{label: string, avatar: *, value: string},{label: string, avatar: *, value: string},{label: string, avatar: *, value: string},{label: string, avatar: *, value: string},{label: string, avatar: *, value: string},null]}
     */
    const usersOptions = [
        {
            label: 'Судьи',
            options: [
                {value: 3, label: 'Соловьёв Вадим Геннадьевич', avatar: img1, color: 'indigo'},
                {value: 38, label: 'Тарасова Майя Александровна', avatar: img2, color: 'red'},
                {value: 39, label: 'Сабанцев Михаил Михайлович', avatar: img3, color: 'orange'},
                {value: 40, label: 'Мельничук Елена Владимировна', avatar: img4, color: 'yellow'},
                {value: 41, label: 'Кривчук Вера Алексеевна', avatar: '', color: 'blue'},
                {value: 42, label: 'Дроздов Сергей Алексеевич', avatar: img6, color: 'yellow'},
                {value: 43, label: 'Асеев Максим Сергеевич', avatar: img1, color: 'cyan'},
                {value: 44, label: 'Басурова Елена Евгеньевна', avatar: '', color: 'green'},
                {value: 46, label: 'Мильченко Евгения Александровна', avatar: '', color: 'indigo'},
                {value: 49, label: 'Павлова Ольга Олеговна', avatar: img1, color: 'indigo'},
                {value: 53, label: 'Вайцещук Ирина Сергеевна', avatar: img1, color: 'indigo'}
            ]
        },
        {
            label: 'Помощники',
            options: [
                {value: 5, label: 'Алексеева Наталья Юрьевна', avatar: img1, color: 'red'},
                {value: 8, label: 'Бирюкова Елена Владимировна', avatar: img2, color: 'yellow'},
                {value: 10, label: 'Герасимова Наталья Владимировна', avatar: '', color: 'orange'},
                {value: 17, label: 'Кривас Ирина Владимировна', avatar: img4, color: 'cyan'},
                {value: 21, label: 'Миренкова Юлия Николаевна', avatar: '', color: 'blue'},
                {value: 23, label: 'Новичкова Анна Сергеевна', avatar: img6, color: 'green'},
                {value: 28, label: 'Ракчеева Ольга Викторовна', avatar: '', color: 'green'},
                {value: 48, label: 'Ковеченкова Юлия Николаевна', avatar: img1, color: 'green'},
                {value: 51, label: 'Семенова Марина Николаевна', avatar: img1, color: 'green'},
                {value: 52, label: 'Морозова Юлия Алексеевна', avatar: img1, color: 'green'},
                {value: 56, label: 'Губарева Ольга Валентиновна', avatar: '', color: 'green'},
                {value: 61, label: 'Ермощенкова Ольга Васильевна', avatar: img1, color: 'indigo'}
            ]
        },
        {
            label: 'Секретари судебного заседания',
            options: [
                {value: 6, label: 'Ашурова Дина Михайловна', avatar: '', color: 'green'},
                {value: 9, label: 'Воропаева Татьяна Викторовна', avatar: img2, color: 'blue'},
                {value: 11, label: 'Горбачева Анна Викторовна', avatar: img3, color: 'yellow'},
                {value: 12, label: 'Зуева Елена Вячеславовна', avatar: img4, color: 'orange'},
                {value: 13, label: 'Кайченкова Елена Анатольевна', avatar: '', color: 'green'},
                {value: 25, label: 'Полуэктова Светлана Анатольевна', avatar: img1, color: 'indigo'},
                {value: 27, label: 'Пшеничникова Анастасия Вячеславовна', avatar: img5, color: 'green'},
                {value: 29, label: 'Сальникова Екатерина Геннадьевна', avatar: img1, color: 'red'},
                {value: 31, label: 'Тимофеева Ирина Ивановна', avatar: img1, color: 'cyan'},
                {value: 34, label: 'Хоменкова Юлия Анатольевна', avatar: '', color: 'green'},
                {value: 50, label: 'Костенкова Наталья Александровна', avatar: img1, color: 'green'}
            ]
        },
        {
            label: 'Канцелярия',
            options: [
                {value: 2, label: 'Чернов Роман Александрович', avatar: img1, color: 'green'},
                {value: 7, label: 'Березовская Наталья Васильевна', avatar: img2, color: 'green'},
                {value: 14, label: 'Касьянова Светлана Викторовна', avatar: img3, color: 'green'},
                {value: 19, label: 'Малючкова Евгения Николаевна', avatar: img4, color: 'red'},
                {value: 20, label: 'Мешкова Виктория Олеговна', avatar: img1, color: 'orange'},
                {value: 22, label: 'Николаева Инга Игоревна', avatar: img1, color: 'green'},
                {value: 24, label: 'Осипова Анна Валерьевна', avatar: '', color: 'indigo'},
                {value: 26, label: 'Прокофьева Марина Викторовна', avatar: '', color: 'yellow'},
                {value: 32, label: 'Умеренкова Елена Владимировна', avatar: img1, color: 'cyan'},
                {value: 36, label: 'Богачёв Сергей Станиславович', avatar: img1, color: 'orange'},
                {value: 18, label: 'Латышева Юлия Александровна', avatar: '', color: 'blue'},
                {value: 57, label: 'Степанец Виктория Сергеевна', avatar: '', color: 'green'}
            ]
        }
    ]

    /** Конструктор компонента Option
     * @param data - данные, из к-рых берутся значения по ключу color
     * @param props - пропсы
     * @returns {JSX.Element}
     * @constructor
     */
    const OptionComponent = ({data, ...props}) => {
        return (
            <components.Option {...props}>
                <Dot className="mr-2" color={data.color} size="3" />
                {data.label}
            </components.Option>
        )
    }

    /** Констркутор компонента с пользователями
     * @param data - данные
     * @param props - пропсы
     * @returns {JSX.Element}
     * @constructor
     */
    const UsersComponent = ({data, ...props}) => {
        return (
            <components.Option {...props}>
                <div className='flex flex-wrap items-center'>
                    <Avatar size='6' item={data}/>
                    <div>{data.label.split(" ").slice(0, 1)} {data.label.split(" ").slice(1).map((n) => n[0]).join(". ").toUpperCase()}</div>
                </div>
            </components.Option>
        )
    }

    const handleAddEvent = () => {
        const obj = {
            title: getValues('title'),
            start: startPicker,
            end: endPicker,
            allDay,
            display: 'block',
            extendedProps: {
                calendar: calendarLabel[0].label,
                users: users.length ? users : undefined,
                desc: desc.length ? desc : undefined
            }
        };
        dispatch(addEvent(obj));
        refetchEvents();
        handleAddEventSidebar();
        toast.success('Event Added');
    }

    /** Сброс полей формы при закрытии */
    const handleResetInputValues = () => {
        dispatch(selectEvent({}));
        setValue('title', '');
        setAllDay(false);
        setDesc('');
        setUsers({});
        setCalendarLabel(options[0]);
        setStartPicker(new Date());
        setEndPicker(new Date());
    };

    /** Установить поля сайдбара  */
    const handleSelectedEvent = () => {
        if (!isObjEmpty(selectedEvent)) {
            const calendar = selectedEvent.extendedProps.calendar;

            const resolveLabel = () => {
                if (calendar.length) {
                    return {label: calendar, value: calendar, color: calendarsColor[calendar]};
                } else {
                    return options[0];
                }
            }
            setValue('title', selectedEvent.title || getValues('title'));
            setAllDay(selectedEvent.allDay || allDay);
            setDesc(selectedEvent.extendedProps.description || desc);
            setUsers(selectedEvent.extendedProps.users || users);
            setStartPicker(new Date(selectedEvent.start));
            setEndPicker(selectedEvent.allDay ? new Date(selectedEvent.start) : new Date(selectedEvent.end));
            setCalendarLabel([resolveLabel()]);
        }
    }

    /**
     * (UI) updateEventInCalendar
     * @param updatedEventData
     * @param propsToUpdate
     * @param extendedPropsToUpdate
     */
    const updateEventInCalendar = (updatedEventData, propsToUpdate, extendedPropsToUpdate) => {
        const existingEvent = calendarApi.getEventById(updatedEventData.id)

        // ** Set event properties except date related
        // ? Docs: https://fullcalendar.io/docs/Event-setProp
        // ** dateRelatedProps => ['start', 'end', 'allDay']
        // ** eslint-disable-next-line no-plusplus
        for (let index = 0; index < propsToUpdate.length; index++) {
            const propName = propsToUpdate[index]
            existingEvent.setProp(propName, updatedEventData[propName])
        }

        // ** Set date related props
        // ? Docs: https://fullcalendar.io/docs/Event-setDates
        existingEvent.setDates(new Date(updatedEventData.start), new Date(updatedEventData.end), {
            allDay: updatedEventData.allDay
        })

        // ** Set event's extendedProps
        // ? Docs: https://fullcalendar.io/docs/Event-setExtendedProp
        // ** eslint-disable-next-line no-plusplus
        for (let index = 0; index < extendedPropsToUpdate.length; index++) {
            const propName = extendedPropsToUpdate[index]
            existingEvent.setExtendedProp(propName, updatedEventData.extendedProps[propName])
        }
    }

    /** Обновляет событие в Store */
    const handleUpdateEvent = () => {
        if (getValues('title').length) {
            const eventToUpdate = {
                id: selectedEvent.id,
                title: getValues('title'),
                allDay,
                start: startPicker,
                end: endPicker,
                display: allDay === false ? 'block' : undefined,
                extendedProps: {
                    description: desc,
                    users,
                    calendar: calendarLabel[0].label
                }
            }

            const propsToUpdate = ['id', 'title'];
            const extendedPropsToUpdate = ['calendar', 'users', 'description'];
            dispatch(updateEvent(eventToUpdate));
            updateEventInCalendar(eventToUpdate, propsToUpdate, extendedPropsToUpdate);

            handleAddEventSidebar();
            toast.success('Событие обновлено');
        } else {
            setError('title', {
                type: 'manual'
            })
        }
    }

    /** UI удалить событие из календаря
     * @param eventId - ID события
     * FIXME изменить на fetch
     */
    const removeEventInCalendar = eventId => {
        calendarApi.getEventById(eventId).remove();
    }

    /** Хандл удаления события */
    const handleDeleteEvent = () => {
        dispatch(removeEvent(selectedEvent.id))
        removeEventInCalendar(selectedEvent.id)
        handleAddEventSidebar()
        toast.error('Событие удалено')
    }

    /** Конструтор Кнопок редактирования / удаления / добавления события
     * @returns {JSX.Element}
     * @constructor
     */
    const EventActions = () => {
        if (isObjEmpty(selectedEvent) || (!isObjEmpty(selectedEvent) && !selectedEvent.title.length)) {
            return (
                <Fragment>
                    <PrimaryButton type="submit" label="Добавить"/>
                    <DangerButton type="reset" label="Отмена" onClick={handleAddEventSidebar}/>
                </Fragment>
            )
        } else {
            return (
                <Fragment>
                    <PrimaryButton type="button" label="Обновить" onClick={handleUpdateEvent}/>
                    <DangerButton type="button" label="Удалить" onClick={handleDeleteEvent}/>
                </Fragment>
            )
        }
    }

    /** Кнопка закрытия модала
     * @type {JSX.Element}
     */
    const CloseBtn = <X className='cursor-pointer' size={15} onClick={handleAddEventSidebar}/>

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="fixed right-0 top-16 overflow-hidden" onClose={handleResetInputValues}>
                <div className="absolute right-0 top-16 overflow-hidden">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-in-out duration-500"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in-out duration-500"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity"/>
                    </Transition.Child>
                    <div className="fixed right-0 top-16 bottom-0 pl-10 max-w-full flex">
                        <Transition.Child
                            as={Fragment}
                            enter="transform transition ease-in-out duration-500 sm:duration-700"
                            enterFrom="translate-x-full"
                            enterTo="translate-x-0"
                            leave="transform transition ease-in-out duration-500 sm:duration-700"
                            leaveFrom="translate-x-0"
                            leaveTo="translate-x-full"
                        >
                            <div className="relative w-96">
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-in-out duration-500"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="ease-in-out duration-500"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <div className="absolute top-0 left-0 -ml-8 pt-4 pr-2 flex sm:-ml-10 sm:pr-4">
                                        <button
                                            type="button"
                                            className="rounded-md text-gray-700 dark:text-gray-200 hover:text-gray-500 dark:hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                            onClick={handleAddEventSidebar}
                                        >
                                            <span className="sr-only">Закрыть</span>
                                            <XIcon className="h-6 w-6" aria-hidden="true"/>
                                        </button>
                                    </div>
                                </Transition.Child>
                                <div className="h-full bg-white dark:bg-gray-900 p-8 overflow-y-auto border-l border-gray-200 dark:border-gray-700 shadow-lg">
                                    <div className="pb-16 space-y-6">
                                        <CardHeader className=""
                                                    title={selectedEvent && selectedEvent.title && selectedEvent.title.length ? 'Обновление События' : 'Добавление События'}/>
                                        <Form
                                            onSubmit={handleSubmit(data => {
                                                if (data.title.length) {
                                                    if (isObjEmpty(errors)) {
                                                        if (isObjEmpty(selectedEvent) || (!isObjEmpty(selectedEvent) && !selectedEvent.title.length)) {
                                                            handleAddEvent()
                                                        } else {
                                                            handleUpdateEvent()
                                                        }
                                                        handleAddEventSidebar()
                                                    }
                                                } else {
                                                    setError('title', {
                                                        type: 'manual'
                                                    })
                                                }
                                            })}
                                        >
                                            <div className='mb-1'>
                                                <Label
                                                    className='block text-sm font-medium text-gray-700 dark:text-gray-200'
                                                    for='title'>
                                                    Название события <span className='text-red-400'>*</span>
                                                </Label>
                                                <Controller
                                                    name='title'
                                                    control={control}
                                                    render={({field}) => (
                                                        <Input
                                                            className="mt-1 bg-gray-100 dark:bg-gray-800 appearance-none block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                            id='title' placeholder='Введите название'
                                                            invalid={errors.title && true} {...field} />
                                                    )}
                                                />
                                            </div>
                                            <div className='mb-1'>
                                                <Label
                                                    className='block text-sm font-medium text-gray-700 dark:text-gray-200'
                                                    for='label'>
                                                    Категория события
                                                </Label>
                                                <Select
                                                    id='label'
                                                    value={calendarLabel}
                                                    options={options}
                                                    className='mt-1 react-select'
                                                    classNamePrefix='select'
                                                    isClearable={false}
                                                    onChange={data => setCalendarLabel([data])}
                                                    components={{
                                                        Option: OptionComponent
                                                    }}
                                                />
                                            </div>
                                            <div className='mb-1'>
                                                <Label
                                                    className='block text-sm font-medium text-gray-700 dark:text-gray-200'
                                                    for='startDate'>
                                                    Начало события
                                                </Label>
                                                <Flatpickr
                                                    required
                                                    id='startDate'
                                                    name='startDate'
                                                    className="mt-1 bg-gray-100 dark:bg-gray-800 appearance-none block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                    onChange={date => setStartPicker(date[0])}
                                                    value={startPicker}
                                                    options={{
                                                        enableTime: allDay === false,
                                                        dateFormat: 'Y-m-d H:i'
                                                    }}
                                                />
                                            </div>
                                            <div className='mb-1'>
                                                <Label
                                                    className='block text-sm font-medium text-gray-700 dark:text-gray-200'
                                                    for='endDate'>
                                                    Конец события
                                                </Label>
                                                <Flatpickr
                                                    required
                                                    id='endDate'
                                                    // tag={Flatpickr}
                                                    name='endDate'
                                                    className="mt-1 bg-gray-100 dark:bg-gray-800 appearance-none block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                    onChange={date => setEndPicker(date[0])}
                                                    value={endPicker}
                                                    options={{
                                                        enableTime: allDay === false,
                                                        dateFormat: 'Y-m-d H:i'
                                                    }}
                                                />
                                            </div>
                                            <div className='form-switch mt-1 flex items-center'>
                                                <Switch
                                                    checked={allDay}
                                                    onChange={setAllDay}
                                                    className="flex-shrink-0 group relative rounded-full inline-flex items-center justify-center h-5 w-10 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                >
                                                    <span className="sr-only">Use setting</span>
                                                    <span aria-hidden="true"
                                                          className="pointer-events-none absolute bg-white w-full h-full rounded-md"/>
                                                    <span
                                                        aria-hidden="true"
                                                        className={classNames(
                                                            allDay ? 'bg-indigo-600' : 'bg-gray-200',
                                                            'pointer-events-none absolute h-4 w-9 mx-auto rounded-full transition-colors ease-in-out duration-200'
                                                        )}
                                                    />
                                                    <span
                                                        aria-hidden="true"
                                                        className={classNames(
                                                            allDay ? 'translate-x-5' : 'translate-x-0',
                                                            'pointer-events-none absolute left-0 inline-block h-5 w-5 border border-gray-200 rounded-full bg-white shadow transform ring-0 transition-transform ease-in-out duration-200'
                                                        )}
                                                    />
                                                </Switch>
                                                <Label
                                                    className='ml-2 text-sm font-medium text-gray-700 dark:text-gray-200'
                                                    for='allDay'>
                                                    Весь день
                                                </Label>
                                            </div>
                                            <div className='mb-1'>
                                                <Label
                                                    className='block text-sm font-medium text-gray-700 dark:text-gray-200'
                                                    for='users'>
                                                    Назначить
                                                </Label>
                                                <Select
                                                    isMulti
                                                    Group
                                                    placeholder='Выберите сотрудников'
                                                    id='users'
                                                    className='mt-1 react-select'
                                                    classNamePrefix='select'
                                                    isClearable={false}
                                                    options={usersOptions}
                                                    value={users.length ? [...users] : null}
                                                    onChange={data => setUsers([...data])}
                                                    components={{
                                                        Option: UsersComponent
                                                    }}
                                                />
                                            </div>
                                            <div className='mb-1'>
                                                <Label
                                                    className='block text-sm font-medium text-gray-700 dark:text-gray-200'
                                                    for='description'>
                                                    Описание события
                                                </Label>
                                                <Input
                                                    className="mt-1 bg-gray-100 dark:bg-gray-800 appearance-none block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                    type='textarea'
                                                    name='text'
                                                    id='description'
                                                    rows='3'
                                                    value={desc}
                                                    onChange={e => setDesc(e.target.value)}
                                                    placeholder='Введите описание'
                                                />
                                            </div>
                                            <div className='flex mb-1'>
                                                <EventActions/>
                                            </div>
                                        </Form>
                                    </div>
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}

export default AddEventSidebar
