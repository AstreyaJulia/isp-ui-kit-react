import React, {Fragment, lazy} from "react";
import {Navigate} from "react-router-dom";
import LayoutWrapper from "../layouts/layout-wrapper";

/** Раскладки */
import BlankLayout from "../layouts/BlankLayout";
import MainLayout from "../layouts/MainLayout";

/** Роутинг */
import PublicRoute from "./PublicRoute";
import {isObjEmpty} from "../utils";

/* Узкое содержимое<main className="max-w-7xl mx-auto md:px-8 xl:px-0 lg:p-4 px-0 py-4">*/

const getLayout = {
    blank: <BlankLayout/>,
    main: <MainLayout/>
}

/** Дефолтный роут */
const DefaultRoute = "/home";

/** Импорт страниц */
const Home = lazy(() => import("../pages/Home"));
const MyInfo = lazy(() => import("../pages/MyInfo"));
const Staff = lazy(() => import("../pages/Staff"));

const Calendar = lazy(() => import("../pages/apps/Calendar"));
const Login = lazy(() => import("../pages/auth/Login"));
const Register = lazy(() => import("../pages/auth/Register"));
const Error404 = lazy(() => import("../pages/misc/Error404"));

/** Сборка роутов
 * FIXME добавлять роуты сюда
 * */
const Routes = [
    {
        path: "/",
        index: true,
        element: <Navigate replace to={DefaultRoute}/>
    },
    {
        path: "/home",
        element: <Home/>
    },
    {
        path: "/staff",
        element: <Staff/>
    },
    {
        path: "/myprofile",
        element: <MyInfo/>
    },
    {
        path: "/calendar",
        element: <Calendar/>
    },
    {
        path: "/auth",
        element: <Login/>,
        meta: {
            layout: "blank"
        }
    },
    {
        path: "/reg",
        element: <Register/>,
        meta: {
            layout: "blank"
        }
    },
    {
        path: "*",
        element: <Error404/>,
        children: [{path: "*", element: <Error404/>}]
    }
]

const getRouteMeta = route => {
    if (isObjEmpty(route.element.props)) {
        if (route.meta) {
            return {routeMeta: route.meta}
        } else {
            return {}
        }
    }
}

/** Возвращает отфильтрованный объект роутов и путей */
const MergeLayoutRoutes = (layout, defaultLayout) => {
    const LayoutRoutes = [];

    if (Routes) {
        Routes.filter(route => {
            let isBlank = false;
            /** Проверяет, раскладку роута или дефолтную раскладку на соответствие текущей раскладки */
            if (
                (route.meta && route.meta.layout && route.meta.layout === layout) ||
                ((route.meta === undefined || route.meta.layout === undefined) && defaultLayout === layout)
            ) {
                const RouteTag = PublicRoute;

                /** Проверяет, приватный или общий роут */
                if (route.meta) {
                    route.meta.layout === "blank" ? (isBlank = true) : (isBlank = false)
                }

                if (route.element) {
                    const Wrapper =
                        // eslint-disable-next-line multiline-ternary
                        isObjEmpty(route.element.props) && isBlank === false
                            ? // eslint-disable-next-line multiline-ternary
                            LayoutWrapper
                            : Fragment;

                    route.element = (
                        <Wrapper {...(isBlank === false ? getRouteMeta(route) : {})}>
                            <RouteTag route={route}>{route.element}</RouteTag>
                        </Wrapper>
                    )
                }

                /** Запись роута в LayoutRoutes */
                LayoutRoutes.push(route)
            }
            return LayoutRoutes
        })
    }
    return LayoutRoutes
}

const getRoutes = layout => {
    const defaultLayout = layout || "main";
    const layouts = ["main", "blank"];

    const AllRoutes = [];

    layouts.forEach(layoutItem => {
        const LayoutRoutes = MergeLayoutRoutes(layoutItem, defaultLayout);

        AllRoutes.push({
            path: "/",
            element: getLayout[layoutItem] || getLayout[defaultLayout],
            children: LayoutRoutes
        })
    })
    return AllRoutes
}

export {DefaultRoute, Routes, getRoutes}
