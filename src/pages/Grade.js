import React from "react";
import {Helmet} from "react-helmet";
import {PageHeader} from "../components/PageHeader";
import config from "../config";

const breadcrumbs = [{ name: "Качество", href: "#", current: true }];

const Grade = () => {
    return (
        <React.Fragment>
            <Helmet>
                <title>{config.APP_NAME} - Качество</title>
            </Helmet>

            <div className="flex flex-col p-4 justify-self-stretch justify-center">
                <PageHeader pages={breadcrumbs} />
                <div className="flex-1 flex mt-4">

                </div>
            </div>
        </React.Fragment>
    );
};

export default Grade;