import React from "react";
import {Helmet} from "react-helmet";
import {UserWelcome} from "../components/widgets/UserWelcome";
import {CalendarWidget} from "../components/widgets/CalendarWidget";
import {WeatherWidget} from "../components/widgets/WeatherWidget";
import {PageHeader} from "../components/PageHeader";
import {users} from "../@mock/SampleData"
import config from "../config";

const breadcrumbs = [{ name: "Главная", href: "#", current: true }];

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
                                <UserWelcome birthDayDate={users[0].birthday} userName={users[0].name} className="mb-4"/>
                                <WeatherWidget apiKey={config.OPEN_WEATHER_API_KEY} cityID={config.OPEN_WEATHER_CITY_ID} />
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
                                <CalendarWidget />
                            </div>
                        </div>
                    </aside>

                </div>

            </div>
        </React.Fragment>
    );
};

export default Home;