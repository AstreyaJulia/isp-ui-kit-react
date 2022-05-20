import {Link} from "react-router-dom";
import classnames from "classnames";
import React, {useEffect, useState} from "react";
import classNames from "classnames";
import {useLocation} from "react-router-dom";

const NavMenuLink = ({item, menuCollapsed}) => {
    /** Текущий элемент меню */
    const [activeItem, setActiveItem] = useState(null)

    /** Текущее местоположение в адресной строке
     * @type {Location<LocationState>}
     */
    const location = useLocation();
    const currentURL = useLocation().pathname;

    useEffect(() => {
        setActiveItem(currentURL)
        // eslint-disable-next-line
    }, [location])

    return (
        <div
            key={item.id}
        >
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <Link
                to={item.href}
                className={classNames({active: item.href === activeItem},
                    item.href === activeItem
                        ? "bg-indigo-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 flex"
                        : "flex text-gray-500 hover:text-gray-500 dark:hover:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700",
                    "group flex items-center py-4 text-base leading-6 rounded-md",
                    menuCollapsed
                        ? "justify-center"
                        : "px-2"
                )}

                aria-current={
                    activeItem ? "page" : undefined
                }
                onClick={(e) => {
                    if (
                        item.href.length === 0 ||
                        item.href === "#" ||
                        item.disabled === true
                    ) {
                        e.preventDefault();
                    }
                }}
            >
                {/** Значок элемента, если меню узкое, отступ убирается */}
                <i className={classnames(
                    menuCollapsed
                        ? ""
                        : "mr-4",
                    "flex-shrink-0 flex items-center text-2xl mdi relative",
                    item.icon)
                }
                >
                    {item.badgeColor
                        ? (
                            <span className={classnames(
                                "absolute top-0.5 right-0 inline-flex items-center w-2 h-2 rounded-full text-xs font-medium",
                                item.badgeColor,
                                menuCollapsed
                                    ? ""
                                    : "ml-auto"
                            )
                            }>
                    </span>
                        )
                        : null
                    }
                </i>
                {/** Название элемента меню, если меню узкое, не отрисовывается */}
                {!menuCollapsed
                    ? item.name
                    : ""}
                {/** Отрисовка бейджа для меню */}

            </Link>
        </div>
    );
};

export default NavMenuLink;
