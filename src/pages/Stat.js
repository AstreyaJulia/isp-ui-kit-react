import React from "react";
import {Helmet} from "react-helmet";
import PageHeader from "../components/PageHeader";
import config from "../config";

const breadcrumbs = [{ name: "Графики", href: "#", current: true }];

const Stat = () => {
    return (
        <React.Fragment>
            <Helmet>
                <title>{config.APP_NAME} - Графики</title>
            </Helmet>

            <div className="flex flex-col p-4 justify-self-stretch justify-center">
                <PageHeader pages={breadcrumbs} />
                <div className="flex-1 flex mt-4">

                </div>
            </div>
        </React.Fragment>
    );
};

export default Stat;