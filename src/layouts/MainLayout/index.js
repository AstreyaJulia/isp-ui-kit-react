import React, {useState, useEffect} from "react";
import {Outlet} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {handleMenuCollapsed} from "../../store/layout";
import ScrollToTop from "./components/scrolltop";
import classNames from "classnames";
import Sidebar from "./components/menu";
import NavBar from "./components/navbar";

import {users, navigation} from "../../@mock/SampleData"; // FIXME sample

/** Основная раскладка с меню и заголовком
 * @param props
 * @returns {JSX.Element|null}
 * @constructor
 */
const MainLayout = (props) => {

    /** Пропсы */
    const {children} = props;

    /** Стейты */
    const [isMounted, setIsMounted] = useState(false);
    const [menuVisibility, setMenuVisibility] = useState(false);

    /** Для серверной навигации */
    //const [menuData, setMenuData] = useState([]);

    /** Переменные */
    const dispatch = useDispatch();
    const layoutStore = useSelector((state) => state.layout);

    /** Состояние меню - узкое/широкое*/
    const menuCollapsed = layoutStore.menuCollapsed;

    /** Включает сворачивание меню */
    const setMenuCollapsed = (val) => dispatch(handleMenuCollapsed(val));

    /** Для серверной навигации */
    // useEffect(() => {
    //   axios.get(URL).then(response => setMenuData(response.data))
    // }, [])

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
                <Sidebar
                    menuVisibility={menuVisibility}
                    menuData={navigation}
                    setMenuVisibility={setMenuVisibility}
                    menuCollapsed={menuCollapsed}
                    setMenuCollapsed={setMenuCollapsed}
                />
                <div
                    className={classNames(menuCollapsed ? "lg:pl-20 pl-0" : "lg:pl-64", "h-full")}
                >
                    {/* Заголовок */}
                    <NavBar
                        user={users[0]}
                        menuCollapsed={menuCollapsed}
                        setMenuVisibility={setMenuVisibility}
                    />

                    {/* Основное содержимое */}
                    <div
                        className={classNames(menuCollapsed ? "lg:left-20" : "lg:left-64", "left-0 text-gray-900 dark:text-gray-200 fixed top-16 right-0 bottom-0 overflow-hidden")}
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
