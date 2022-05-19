import React from "react";
import {Helmet} from "react-helmet";
import {PageHeader} from "../components/PageHeader";
import config from "../config";

const breadcrumbs = [{ name: "База знаний", href: "#", current: true }];

const Faq = () => {
    return (
        <React.Fragment>
            <Helmet>
                <title>{config.APP_NAME} - База знаний</title>
            </Helmet>

            <div className="flex flex-col p-4 justify-self-stretch justify-center">
                <PageHeader pages={breadcrumbs} />
                <div className="flex-1 flex mt-4">

                </div>
            </div>
        </React.Fragment>
    );
};

export default Faq;