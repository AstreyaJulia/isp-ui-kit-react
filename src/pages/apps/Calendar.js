import React from 'react';
import {Helmet} from "react-helmet";
import PageHeader from "../../components/PageHeader";
import config from "../../config";

const breadcrumbs = [{name: 'Календарь', href: '#', current: true}];

const Calendar = () => {
    return (
        <React.Fragment>
            <Helmet>
                <title>{config.APP_NAME} - Календарь</title>
            </Helmet>
            {/* Узкое содержимое
             <main className="max-w-7xl mx-auto md:px-8 xl:px-0 lg:p-4 px-0 py-4">
             */}
            <div className="flex flex-col p-4 justify-self-stretch justify-center">
                <PageHeader pages={breadcrumbs}/>

                <div className="flex-1 flex mt-4">
                    <h1>Test</h1>
                </div>

            </div>
        </React.Fragment>
    );
};

export default Calendar;