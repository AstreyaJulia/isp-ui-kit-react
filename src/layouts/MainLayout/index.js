import React, {useEffect, useState} from "react";
import {Outlet} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {handleMenuCollapsed} from "../../store/layout";
import ScrollToTop from "./components/scrolltop";
import classNames from "classnames";
import Sidebar from "./components/menu";
import NavBar from "./components/navbar";
import Skeleton from "react-loading-skeleton";
import {makeArrayFromObj} from "../../utils";
import {fetch, setAuthorization} from "../../utils/Helpers/api_helper";

import {users} from "../../@mock/SampleData";
import {navigation} from "../../@mock/SampleData"; // FIXME sample
import config from "../../config";
import {fetchUserData, userData} from "../../store/userData";

/** Основная раскладка с меню и заголовком
 * @param props
 * @returns {JSX.Element|null}
 * @constructor
 */
const MainLayout = (props) => {

    if (localStorage.getItem("jwt")) {
        setAuthorization(localStorage.getItem("jwt").replace(/['"]+/g, '').toString())
    }

    /** Пропсы */
    const {children} = props;

    /** Стейты */
    const [isMounted, setIsMounted] = useState(false);
    const [menuVisibility, setMenuVisibility] = useState(false);

    /** Для серверной навигации */
    const [menuData, setMenuData] = useState([]);

    /** Переменные */
    const dispatch = useDispatch();
    const layoutStore = useSelector((state) => state.layout);

    const userdataStore = useSelector((state) => state.userData);
    const loginData = userdataStore.userData;

    /** Состояние меню - узкое/широкое*/
    const menuCollapsed = layoutStore.menuCollapsed;

    /** Включает сворачивание меню */
    const setMenuCollapsed = (val) => dispatch(handleMenuCollapsed(val));

    useEffect(() => {
        setMenuData(navigation);
        /*setUserData(users[0]);*/

        /** Для серверной навигации */
        dispatch(fetchUserData());
        /*fetch.get("/sidebar", "")
            .then(response => {
                if (response.data || response.data !== []) {
                    setMenuData(makeArrayFromObj(response.data))
                }
            })*/
    }, [dispatch]);

    /** ComponentDidMount */
    useEffect(() => {
        setIsMounted(true);
        return () => setIsMounted(false);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (<>
        <div className="h-full">
            {/* Сайдбар меню */}
            {menuData !== []
                ? <Sidebar
                    menuVisibility={menuVisibility}
                    menuData={menuData}
                    setMenuVisibility={setMenuVisibility}
                    menuCollapsed={menuCollapsed}
                    setMenuCollapsed={setMenuCollapsed}
                />
                : <Skeleton count="5"
                            className="bg-gray-500/30 after:bg-gradient-to-r from-gray-400/10 via-gray-500/10 to-gray-400/10"/>}

            <div
                className={classNames(menuCollapsed ? "lg:pl-20 pl-0" : "lg:pl-64", "h-screen")}
            >
                {/* Заголовок */}
                <NavBar
                    user={loginData}
                    menuCollapsed={menuCollapsed}
                    setMenuVisibility={setMenuVisibility}
                />

                {/* Основное содержимое */}
                <div
                    className={classNames(menuCollapsed ? "lg:left-20" : "lg:left-64", "main-content animate__fadeIn left-0 text-gray-900 dark:text-gray-200 fixed top-16 right-0 bottom-0 overflow-hidden")}
                >
                    {/* Содержимое страницы */}
                    <Outlet/>
                    {children}
                </div>
            </div>
            {/* Кнопка назад наверх */}
            <ScrollToTop showOffset={300}/>
        </div>
    </>);
};

export default MainLayout;
