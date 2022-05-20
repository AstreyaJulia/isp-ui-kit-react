import React, {Fragment} from "react";
import classNames from "classnames";
import {MenuIcon} from "@heroicons/react/outline";
import {ChevronDownIcon, SearchIcon} from "@heroicons/react/solid";
import {Menu, Transition} from "@headlessui/react";
import {getInitials} from "../../../utils";
import {Link} from "react-router-dom";
import {Moon, Sun} from "react-feather";
import {useSkin} from "../../../utils/Hooks/useSkin";
import {Avatar} from "../../../components/elements/Avatar";

const NavBar = (props) => {

    const {
        user,
        menuCollapsed,
        setMenuVisibility,
    } = props;

    /** Хуки */
    const {skin, setSkin} = useSkin();

    /** Переключалка темы
     * @returns {JSX.Element}
     * @constructor
     */
    const ThemeToggler = () => {
        if (skin === "dark") {
            return <Sun onClick={() => setSkin("light")}/>;
        } else {
            return <Moon onClick={() => setSkin("dark")}/>;
        }
    };

    return (
    <div
        className={classNames(menuCollapsed ? "lg:left-20" : "lg:left-64", "left-0 fixed top-0 right-0 z-10 flex-shrink-0 flex h-16 shadow-sm bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 lg:border-none")}
    >
        <button
            type="button"
            className="px-4 border-r border-gray-200 dark:border-gray-700 text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 lg:hidden"
            onClick={() => setMenuVisibility(true)}
        >
            <span className="sr-only">Открыть меню</span>
            <MenuIcon className="h-6 w-6" aria-hidden="true"/>
        </button>

        <div className="flex-1 px-4 flex justify-between content-center sm:px-6 lg:px-8">
            {/* Поиск */}
            <div className="flex-1 flex px-6 py-3 xl:px-0 content-center">
                <div className="w-full">
                    <label htmlFor="search" className="sr-only">
                        Поиск
                    </label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                        <div
                            className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                            <SearchIcon
                                className="h-5 w-5 text-gray-400 dark:text-gray-500"
                                aria-hidden="true"
                            />
                        </div>
                        <input
                            id="search"
                            name="search"
                            className="block w-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-md py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:outline-none focus:text-gray-900 dark:focus:text-gray-400 focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            placeholder="Поиск"
                            type="search"
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center">
                            <label htmlFor="currency" className="sr-only">
                                Разделы поиска
                            </label>
                            <select
                                id="search-type"
                                name="search-type"
                                className="focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md"
                            >
                                <option>Сотрудники</option>
                                <option>Входящая почта</option>
                                <option>Исходящая почта</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            {/** Правая часть заголовка */}
            <div className="ml-4 flex items-center md:ml-6">
                <button
                    type="button"
                    className="bg-white dark:bg-gray-900 p-1 rounded-full text-gray-400 dark:text-gray-500 dark:hover:text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                                    <span className="sr-only">
                                        Переключить тему
                                    </span>
                    <ThemeToggler
                        className="h-6 w-6"
                        aria-hidden="true"
                    />
                </button>

                {/** Меню пользователя */}
                <Menu as="div" className="ml-3 relative">
                    <div>
                        <Menu.Button
                            className="max-w-xs bg-white dark:bg-gray-900 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 lg:p-1 lg:rounded-md lg:hover:bg-gray-50 dark:lg:hover:bg-gray-800">
                                <Avatar size="10" item={user}/>
                            <span
                                className="hidden ml-3 text-gray-700 dark:text-gray-300 text-sm font-medium lg:block">
                                                <span className="sr-only">
                                                    Открыть меню пользователя
                                                </span>
                                {getInitials(user.name)}
                                            </span>
                            <ChevronDownIcon
                                className="hidden flex-shrink-0 ml-1 h-5 w-5 text-gray-400 dark:text-gray-500 lg:block"
                                aria-hidden="true"
                            />
                        </Menu.Button>
                    </div>
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items
                            className="dark:border dark:border-gray-700 origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white dark:bg-gray-900 ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <Menu.Item>
                                {({active}) => (<Link
                                    to="/myprofile"
                                    className={classNames(active ? "bg-gray-100 dark:bg-gray-700" : "", "block px-4 py-2 text-sm text-gray-700 dark:text-gray-400")}
                                >
                                    Мой Профиль
                                </Link>)}
                            </Menu.Item>
                            <Menu.Item>
                                {({active}) => (<Link
                                    to="#"
                                    className={classNames(active ? "bg-gray-100 dark:bg-gray-700" : "", "block px-4 py-2 text-sm text-gray-700 dark:text-gray-400")}
                                >
                                    Выход
                                </Link>)}
                            </Menu.Item>
                        </Menu.Items>
                    </Transition>
                </Menu>
            </div>
        </div>
    </div>
    )
}

export default NavBar;