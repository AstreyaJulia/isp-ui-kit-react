import ContentLayoutWithSidebar from "../layouts/ContentLayouts/ContentLayoutWithSidebar";
import React, {useEffect, useState} from "react";
import {proxyListGroups, proxyListLinks, users} from "../@mock/SampleData";
import {makeArrayFromObj} from "../utils";
import BasicButton from "../components/elements/BasicButton";
import {Menu} from '@headlessui/react';

const breadcrumbs = [{name: "Каталог ссылок", href: "#", current: true}];

const Proxylist = () => {

    const [selectedGroup, setSelectedGroup] = useState(null);
    const [groupsList, setGroupsList] = useState({});
    const [loggedUser, setLoggedUser] = useState({});

    const groupClick = (event, key) => {
        event.preventDefault();
        setSelectedGroup(key)
    }

    useEffect(() => {
        setGroupsList(proxyListGroups);
    }, [])

    useEffect(() => {
        /** users[5] - админ */
        setLoggedUser(users[5]);
    }, [])

    return (
        <ContentLayoutWithSidebar
            boxed={true}
            title="Каталог ссылок"
            breadcrumbs={breadcrumbs}
            header="Каталог ссылок"
            sidebarSize="large"
            fullHeight={true}
        >
            <ContentLayoutWithSidebar.Sidebar>
                <div className="p-4 pt-0.5">
                    <div className="grid grid-cols-1 gap-2">
                        {makeArrayFromObj(groupsList).map((group, key) => {
                            return (
                                <div key={group.id} className="flex items-center w-full flex-shrink-0">
                                    <div
                                        onClick={event => groupClick(event, key)}
                                        className={["flex-grow rounded-lg border border-gray-300 dark:border-gray-700 bg-white hover:cursor-pointer dark:bg-gray-900 p-3 shadow-sm flex items-center space-x-3 hover:border-gray-400 dark:hover:border-gray-600", key === selectedGroup ? "ring-2 ring-indigo-500 bg-gray-200 border-gray-400" : ""].join(" ")}>
                                        <div className="flex-shrink-0">
                                        <span
                                            className="inline-flex items-center justify-center rounded-full h-8 w-8 bg-indigo-500/30">
                                            <span
                                                className="font-medium leading-none text-sm text-indigo-700 dark:text-indigo-300">
                                                {group.id}
                                            </span>
                                        </span>
                                        </div>
                                        <div className="flex min-w-0">
                                            <a
                                                className="focus:outline-none"
                                            >
                                                <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                                                    {group.name}
                                                </p>
                                            </a>

                                        </div>
                                    </div>
                                    {loggedUser.sudo === "1"
                                        ? <Menu as="div" className="relative">
                                            <Menu.Button>
                                                <div className="flex-shrink-0 px-2">
                                                    <button type="button"
                                                            className="w-8 h-8 bg-white dark:bg-gray-800 inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                                        <span className="sr-only">Open options</span>
                                                        <svg className="w-5 h-5"
                                                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                                             fill="currentColor" aria-hidden="true">
                                                            <path
                                                                d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"/>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </Menu.Button>
                                            <Menu.Items
                                                className="absolute right-0 z-50 mt-2 w-40 origin-top-right divide-y divide-gray-100 dark:divide-gray-700 rounded-md bg-white dark:bg-gray-900 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                <div className="px-1 py-1 ">
                                                    <Menu.Item>
                                                        {({active}) => (
                                                            <button
                                                                className={`${
                                                                    active ? 'bg-indigo-500 text-white' : 'text-gray-900 dark:text-gray-100'
                                                                } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                                            >
                                                                Редактировать
                                                            </button>
                                                        )}
                                                    </Menu.Item>
                                                </div>
                                                <div className="px-1 py-1">
                                                    <Menu.Item>
                                                        {({active}) => (
                                                            <button
                                                                className={`${
                                                                    active ? 'bg-indigo-500 text-white' : 'text-gray-900 dark:text-gray-100'
                                                                } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                                            >
                                                                Удалить
                                                            </button>
                                                        )}
                                                    </Menu.Item>
                                                </div>
                                            </Menu.Items>
                                        </Menu>
                                        : null}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </ContentLayoutWithSidebar.Sidebar>
            <ContentLayoutWithSidebar.Body>
                <div className="p-4 h-full">
                    <div className="mb-4 h-8">
                        {loggedUser.sudo === "1"
                            ? <>
                                <BasicButton size="medium" label="Добавить группу" type="button" className="mr-3"/>
                                <BasicButton size="medium" label="Добавить ссылку" type="button"/>
                            </>
                            : null}
                    </div>
                    <div className="grid grid-cols-1 gap-2 h-full">
                        {selectedGroup != null
                            ? makeArrayFromObj(proxyListLinks[selectedGroup].children).map((link, key) => {
                                return (
                                    <a
                                        key={link.id}
                                        href={link.link}
                                        target="_blank"
                                        className="flex items-center w-full flex-shrink-0">
                                        <div
                                            className={["rounded-lg flex-grow border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 p-3 shadow-sm flex items-center space-x-3 hover:border-gray-400 dark:hover:border-gray-600"].join(" ")}>
                                            <div className="flex-shrink-0">
                                        <span
                                            className="inline-flex items-center justify-center rounded-full h-8 w-8 bg-indigo-500/30">
                                            <span
                                                className="font-medium leading-none text-sm text-indigo-700 dark:text-indigo-300">
                                                {link.id}
                                            </span>
                                        </span>
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p
                                                    className="focus:outline-none"
                                                >
                                                    <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                                                        {link.name}
                                                    </p>
                                                </p>
                                            </div>
                                        </div>
                                        {loggedUser.sudo === "1"
                                            ? <Menu as="div" className="relative">
                                                <Menu.Button>
                                                    <div className="flex-shrink-0 px-2">
                                                        <button type="button"
                                                                className="w-8 h-8 bg-white dark:bg-gray-900 inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                                            <span className="sr-only">Open options</span>
                                                            <svg className="w-5 h-5"
                                                                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                                                 fill="currentColor" aria-hidden="true">
                                                                <path
                                                                    d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"/>
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </Menu.Button>
                                                <Menu.Items
                                                    className="absolute right-0 z-50 mt-2 w-40 origin-top-right divide-y divide-gray-100 dark:divide-gray-700 rounded-md bg-white dark:bg-gray-900 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                    <div className="px-1 py-1 ">
                                                        <Menu.Item>
                                                            {({active}) => (
                                                                <button
                                                                    className={`${
                                                                        active ? 'bg-indigo-500 text-white' : 'text-gray-900 dark:text-gray-100'
                                                                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                                                >
                                                                    Редактировать
                                                                </button>
                                                            )}
                                                        </Menu.Item>
                                                    </div>
                                                    <div className="px-1 py-1">
                                                        <Menu.Item>
                                                            {({active}) => (
                                                                <button
                                                                    className={`${
                                                                        active ? 'bg-indigo-500 text-white' : 'text-gray-900 dark:text-gray-100'
                                                                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                                                >
                                                                    Удалить
                                                                </button>
                                                            )}
                                                        </Menu.Item>
                                                    </div>
                                                </Menu.Items>
                                            </Menu>
                                            : null}
                                    </a>
                                )
                            })
                            /* TODO пустое состояние */
                            : (
                                <div className="text-center flex flex-col items-center justify-center">
                                    <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24"
                                         stroke="currentColor" aria-hidden="true">
                                        <path vectorEffect="non-scaling-stroke" strokeLinecap="round"
                                              strokeLinejoin="round" strokeWidth="2"
                                              d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
                                    </svg>
                                    <h3 className="mt-2 text-sm font-medium text-gray-900">Нет элементов</h3>
                                    <p className="mt-1 text-sm text-gray-500">
                                        Выберите группу в списке слева.
                                    </p>
                                </div>
                            )
                        }

                    </div>
                </div>
            </ContentLayoutWithSidebar.Body>

        </ContentLayoutWithSidebar>
    );
};

export default Proxylist;