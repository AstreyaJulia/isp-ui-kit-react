import React, {useContext} from "react";
import {Helmet} from "react-helmet";
import UserWelcome from "../components/widgets/UserWelcome";
import CalendarWidget from "../components/widgets/CalendarWidget";
import WeatherWidget from "../components/widgets/WeatherWidget";
import PageHeader from "../components/PageHeader";
import {birthdaysToday, users} from "../@mock/SampleData"
import config from "../config";
import TodayBirthdays from "../components/widgets/TodayBirthdays";
import ReactPaginate from 'react-paginate';
import {ShepherdTour, ShepherdTourContext} from "react-shepherd";
import PrimaryButton from "../components/elements/PrimaryButton";
import 'shepherd.js/dist/css/shepherd.css';

const breadcrumbs = [{name: "Главная", href: "#", current: true}];

let instance = null;

const backBtnClass = 'px-4 py-2 text-sm bg-indigo-600 border border-transparent rounded-md shadow-sm inline-flex justify-center font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500',
    nextBtnClass = 'px-4 py-2 text-sm bg-indigo-600 border border-transparent rounded-md shadow-sm inline-flex justify-center font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 btn-next'

const steps = [
    {
        id: 'search-input',
        title: 'Строка поиска.',
        text: 'Это поиск. Можно искать сотрудников, входящую и исходящую почту, дела.',
        attachTo: {element: '.search-input', on: 'bottom'},
        cancelIcon: {
            enabled: true
        },
        buttons: [
            {
                action: () => instance.cancel(),
                classes: backBtnClass,
                text: 'Пропустить'
            },
            {
                text: 'Далее',
                classes: nextBtnClass,
                action: () => instance.next()
            }
        ]
    },
    {
        id: 'search-select',
        title: 'Это разделы поиска.',
        text: 'Выберите раздел для поиска и начните вводить поисковой запрос.',
        attachTo: {element: '.search-select', on: 'bottom'},
        cancelIcon: {
            enabled: true
        },
        buttons: [
            {
                text: 'Пропустить',
                classes: backBtnClass,
                action: () => instance.cancel()
            },
            {
                text: 'Назад',
                classes: backBtnClass,
                action: () => instance.back()
            },
            {
                text: 'Далее',
                classes: nextBtnClass,
                action: () => instance.next()
            }
        ]
    },
    {
        id: 'skin-toggler',
        title: 'Кнопка переключения темы',
        text: 'Это кнопка переключения светлой/тёмной темы оформления.',
        attachTo: {element: '.skin-toggler', on: 'bottom'},
        cancelIcon: {
            enabled: true
        },
        buttons: [
            {
                text: 'Назад',
                classes: backBtnClass,
                action: () => instance.back()
            },
            {
                text: 'Закончить',
                classes: nextBtnClass,
                action: () => instance.cancel()
            }
        ]
    }
]


const Content = () => {
    const tour = useContext(ShepherdTourContext);
    instance = tour;

    return (
        <PrimaryButton onClick={() => tour.start()} label='Start Tour' />
    )
}

const Home = () => {
    return (
        <React.Fragment>
            <Helmet>
                <title>{config.APP_NAME} - Главная</title>
            </Helmet>

            <div className="flex flex-col p-4 justify-self-stretch justify-center">
                <PageHeader pages={breadcrumbs}/>

                <div className="flex-1 flex mt-4">
                    <aside className="hidden overflow-y-auto lg:block">
                        <div className="h-full">
                            <div
                                className="block h-full w-full text-gray-200">
                                <UserWelcome birthDayDate={users[0].birthday} userName={users[0].name}
                                             className="mb-4"/>
                                <WeatherWidget apiKey={config.OPEN_WEATHER_API_KEY}
                                               cityID={config.OPEN_WEATHER_CITY_ID}/>
                                <ShepherdTour
                                    steps={steps}
                                    tourOptions={{
                                        useModalOverlay: true
                                    }}
                                >
                                    <Content/>
                                </ShepherdTour>
                            </div>
                        </div>
                    </aside>

                    <main className="flex-1 overflow-y-auto">
                        <section className="min-w-0 flex-1 h-full flex flex-col overflow-hidden lg:order-last">
                        </section>
                    </main>

                    <aside className="hidden w-80 overflow-y-auto lg:block">
                        <div className="h-full">
                            <div
                                className="block h-full w-full text-gray-200">
                                <CalendarWidget/>
                                <TodayBirthdays birthdays={birthdaysToday}/>
                                <ReactPaginate
                                    nextLabel=''
                                    pageCount={10}
                                    breakLabel='...'
                                    previousLabel=''
                                    pageRangeDisplayed={5}
                                    marginPagesDisplayed={2}
                                    activeClassName='active'
                                    pageClassName='page-item'
                                    breakClassName='page-item'
                                    nextLinkClassName='page-link'
                                    pageLinkClassName='page-link'
                                    breakLinkClassName='page-link'
                                    previousLinkClassName='page-link'
                                    nextClassName='page-item next-item'
                                    previousClassName='page-item prev-item'
                                    containerClassName='pagination react-paginate no-navigation'
                                />
                            </div>
                        </div>
                    </aside>

                </div>

            </div>
        </React.Fragment>
    );
};

export default Home;