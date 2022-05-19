import React, {useEffect} from "react";
import {useLocation} from "react-router-dom";
import classnames from "classnames";
import MenuNavItems from "./NavMenuItems";
import classNames from "classnames";

/**
 * Check if the given item has the given url
 * in one of its children
 *
 * @param item
 * @param currentUrl
 */
export const hasActiveChild = (item, currentUrl) => {
    const {children} = item;

    if (!children) {
        return false;
    }

    for (const child of children) {
        if (child.children) {
            if (hasActiveChild(child, currentUrl)) {
                return true;
            }
        }

        // Check if the child has a link and is active
        if (
            child &&
            child.href &&
            currentUrl &&
            (child.href === currentUrl || currentUrl.includes(child.href))
        ) {
            return true;
        }
    }

    return false;
};

/**
 * Check if this is a children
 * of the given item
 *
 * @param children
 * @param openGroup
 * @param currentActiveGroup
 */
export const removeChildren = (children, openGroup, currentActiveGroup) => {
    children.forEach((child) => {
        if (!currentActiveGroup.includes(child.id)) {
            const index = openGroup.indexOf(child.id);
            if (index > -1) openGroup.splice(index, 1);
            if (child.children)
                removeChildren(child.children, openGroup, currentActiveGroup);
        }
    });
};

const NavMenuGroup = ({
                          item,
                          groupOpen,
                          activeItem,
                          parentItem,
                          groupActive,
                          setGroupOpen,
                          menuCollapsed,
                          setGroupActive,
                          currentActiveGroup,
                          setCurrentActiveGroup,
                          ...rest
                      }) => {
    // ** Hooks
    const location = useLocation();

    // ** Current Val
    const currentURL = useLocation().pathname;

    // ** Toggle Open Group
    const toggleOpenGroup = (item, parent) => {
        let openGroup = groupOpen;
        const activeGroup = groupActive;

        // ** If Group is already open and clicked, close the group
        if (openGroup.includes(item.id)) {
            openGroup.splice(openGroup.indexOf(item.id), 1);

            // ** If clicked Group has open group children, Also remove those children to close those groups
            if (item.children) {
                removeChildren(item.children, openGroup, groupActive);
            }
        } else if (
            activeGroup.includes(item.id) ||
            currentActiveGroup.includes(item.id)
        ) {
            // ** If Group clicked is Active Group

            // ** If Active group is closed and clicked again, we should open active group else close active group
            if (
                !activeGroup.includes(item.id) &&
                currentActiveGroup.includes(item.id)
            ) {
                activeGroup.push(item.id);
            } else {
                activeGroup.splice(activeGroup.indexOf(item.id), 1);
            }

            // ** Update Active Group
            setGroupActive([...activeGroup]);
        } else if (parent) {
            // ** If Group clicked is the child of a open group, first remove all the open groups under that parent
            if (parent.children) {
                removeChildren(parent.children, openGroup, groupActive);
            }

            // ** After removing all the open groups under that parent, add the clicked group to open group array
            if (!openGroup.includes(item.id)) {
                openGroup.push(item.id);
            }
        } else {
            // ** If clicked on another group that is not active or open, create openGroup array from scratch

            // ** Empty Open Group array
            openGroup = [];

            // ** Push current clicked group item to Open Group array
            if (!openGroup.includes(item.id)) {
                openGroup.push(item.id);
            }
        }
        setGroupOpen([...openGroup]);
    };

    // ** On Group Item Click
    const onCollapseClick = (e, item) => {
        toggleOpenGroup(item, parentItem)
        e.preventDefault()
    }

    // ** Checks url & updates active item
    useEffect(() => {
        if (hasActiveChild(item, currentURL)) {
            if (!groupActive.includes(item.id)) groupActive.push(item.id);
        } else {
            const index = groupActive.indexOf(item.id);
            if (index > -1) groupActive.splice(index, 1);
        }
        setGroupActive([...groupActive]);
        setCurrentActiveGroup([...groupActive]);
        setGroupOpen([]);
        // eslint-disable-next-line
    }, [location]);

    // ** Returns condition to add open class
    const openClassCondition = (id) => {
        if ((menuCollapsed) || menuCollapsed === false) {
            if (groupActive.includes(id) || groupOpen.includes(id)) {
                return true;
            }
        } else if (
            groupActive.includes(id) &&
            menuCollapsed
        ) {
            return false;
        } else {
            return null;
        }
    };

    return (
        <div key={item.id} className="space-y-1 w-full">
                <>
                    <div className="w-full">
                        <a
                            className={classNames({open: openClassCondition(item.id)},
                                groupActive.includes(item.id) || groupOpen.includes(item.id) || currentActiveGroup.includes(item.id)
                                    ? "bg-indigo-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 flex"
                                    : "flex text-gray-500 hover:text-gray-500 dark:hover:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700",
                                "group flex items-center py-4 text-base leading-6 rounded-md  w-full hover:cursor-pointer",
                                menuCollapsed
                                    ? "justify-end pr-1"
                                    : "px-2 justify-between"
                            )}
                            aria-current={
                                groupActive.includes(item.id) || groupOpen.includes(item.id) || currentActiveGroup.includes(item.id) ? "page" : undefined
                            }
                            onClick={e => onCollapseClick(e, item)}
                        >
                            <div className="flex items-center">
                                <i className={classnames(menuCollapsed ? "" : "mr-4",
                                    "flex-shrink-0 flex items-center text-2xl mdi", item.icon)}/>
                                {!menuCollapsed ? item.name : ""}
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg"
                                 className={classNames(
                                     groupActive.includes(item.id) || groupOpen.includes(item.id) || currentActiveGroup.includes(item.id) ? "text-gray-400 rotate-90" : "text-gray-300",
                                     "flex-shrink-0 h-4 w-4 transform group-hover:text-gray-400 transition-colors ease-in-out duration-150"
                                 )}
                                 viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd"
                                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                      clipRule="evenodd"/>
                            </svg>
                        </a>

                    </div>
                    <div className="space-y-1">
                        {groupActive.includes(item.id) || groupOpen.includes(item.id) || currentActiveGroup.includes(item.id) ? (
                            <MenuNavItems
                                {...rest}
                                items={item.children}
                                groupActive={groupActive}
                                setGroupActive={setGroupActive}
                                currentActiveGroup={currentActiveGroup}
                                setCurrentActiveGroup={setCurrentActiveGroup}
                                groupOpen={groupOpen}
                                setGroupOpen={setGroupOpen}
                                parentItem={item}
                                menuCollapsed={menuCollapsed}
                                activeItem={activeItem}
                            />
                        ):""}
                    </div>
                </>

        </div>
    );
};

export default NavMenuGroup;
