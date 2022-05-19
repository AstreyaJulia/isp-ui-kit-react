import React from "react";
import { ChevronRightIcon, HomeIcon } from '@heroicons/react/solid';
import { Link } from "react-router-dom";
import classNames from "classnames";

/*
const breadcrumbs = [
    { name: 'Projects', href: '#', current: false },
    { name: 'Project Nero', href: '#', current: true },
]
 */

/**
 *
 * @param pages
 * @param classname
 * @returns {JSX.Element}
 * @constructor
 */
export const PageHeader = ({pages, classname}) => {
    return (
        <nav className={classNames(classname,"flex w-full")} aria-label="Breadcrumb">
            <ol className="flex items-center space-x-4">
                <li>
                    <div>
                        <Link to="/home" className="text-gray-400 hover:text-gray-500" title="Главная">
                            <HomeIcon className="flex-shrink-0 h-5 w-5" aria-hidden="true" />
                            <span className="sr-only" title="Главная">Главная</span>
                        </Link>
                    </div>
                </li>
                {pages.map((page) => (
                    <li key={page.name}>
                        <div className="flex items-center">
                            <ChevronRightIcon className="flex-shrink-0 h-5 w-5 text-gray-400" aria-hidden="true" />
                            <Link
                                to={page.href}
                                className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                                aria-current={page.current ? 'page' : undefined}
                            >
                                {page.name}
                            </Link>
                        </div>
                    </li>
                ))}
            </ol>
        </nav>
    )
};
