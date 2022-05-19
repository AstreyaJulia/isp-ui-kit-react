import React, {Suspense, lazy} from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import {store} from "./store";
import PageLoadingSpinner from "./components/PageLoadingSpinner";
import {Toaster} from "react-hot-toast";

import "react-perfect-scrollbar/dist/css/styles.css"
import "react-datepicker/dist/react-datepicker.css";

/** Подгрузка компонента прилоежения */
const LazyApp = lazy(() => import("./App"));

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <Suspense fallback={<PageLoadingSpinner/>}>
                <LazyApp/>
                <Toaster position="top-right" toastOptions={{className: "react-hot-toast"}}/>
            </Suspense>
        </Provider>
    </BrowserRouter>,
    document.getElementById("root")
);
