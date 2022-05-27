import React, {Fragment} from 'react';
import classnames from 'classnames';
import {CardBody, Button, Input, Label} from 'reactstrap';
import PrimaryButton from "../../../components/elements/PrimaryButton";

const filters = [
    {label: 'События', color: 'indigo', className: 'form-check-primary mb-1'},
    {label: 'Отпуск', color: 'green', className: 'form-check-success mb-1'},
    {label: 'Дежурство', color: 'cyan', className: 'form-check-info mb-1'},
    {label: 'Важно', color: 'yellow', className: 'form-check-warning mb-1'},
    {label: 'Праздники', color: 'red', className: 'form-check-danger mb-1'},
    {label: 'Категория 1', color: 'pink', className: 'form-check-pink mb-1'},
    {label: 'Категория 2', color: 'blue', className: 'form-check-blue mb-1'},
    {label: 'Категория 3', color: 'orange', className: 'form-check-orange mb-1'},
    {label: 'Категория 4', color: 'teal', className: 'form-check-teal mb-1'},
    {label: 'Категория 5', color: 'azure', className: 'form-check-azure'}
];

/** Сайдбар слева календаря
 * @param props - handleAddEventSidebar, toggleSidebar, updateFilter, updateAllFilters, store, dispatch
 * @returns {JSX.Element}
 * @constructor
 */
const SidebarLeft = props => {
    const {handleAddEventSidebar, toggleSidebar, updateFilter, updateAllFilters, store, dispatch} = props;

    /** Хандл клика по событию */
    const handleAddEventClick = () => {
        toggleSidebar(false);
        handleAddEventSidebar();
    };

    return (
        <Fragment>
            <div className='sidebar-wrapper'>
                <CardBody className='card-body d-flex justify-content-center my-sm-0 mb-3'>
                    <PrimaryButton label="+ Cобытие" onClick={handleAddEventClick} />
                </CardBody>
                <CardBody>
                    <p className='section-label mb-1'>
                        <span className='align-middle m-0 mb-3 text-uppercase fw-bold font-small-1 card-title'>Фильтр</span>
                    </p>
                    <div className='form-check mb-1'>
                        <Input
                            id='view-all'
                            type='checkbox'
                            label='View All'
                            className='select-all bg-dark p-2'
                            checked={store.selectedCalendars.length === filters.length}
                            onChange={e => dispatch(updateAllFilters(e.target.checked))}
                        />
                        <Label className='form-check-label' for='view-all'>
                            Все
                        </Label>
                    </div>
                    <div className='calendar-events-filter'>
                        {filters.length &&
                            filters.map(filter => {
                                return (
                                    <div
                                        key={`${filter.color}-key`}
                                        className={classnames('form-check', {
                                            [filter.className]: filter.className
                                        })}
                                    >
                                        <Input
                                            type='checkbox'
                                            key={filter.color}
                                            label={filter.color}
                                            className={`input-filter bg-${filter.color}-500 p-2`}
                                            id={`${filter.color}-event`}
                                            checked={store.selectedCalendars.includes(filter.color)}
                                            onChange={() => {
                                                dispatch(updateFilter(filter.color))
                                            }}
                                        />
                                        <Label className='form-check-label' for={`${filter.color}-event`}>
                                            {filter.label}
                                        </Label>
                                    </div>
                                )
                            })}
                    </div>
                </CardBody>
            </div>
            <div className='mt-auto'>
            </div>
        </Fragment>
    )
};

export default SidebarLeft
