import NavMenuLink from "./NavMenuLink";
import NavMenuGroup from "./NavMenuGroup";
import NavMenuSectionHeader from "./NavMenuSectionHeader";
import React from "react";

/**
 * Return which component to render based on it's data/context
 * @param {Object} item nav menu item
 */
export const resolveNavItemComponent = (item) => {
    if (item.header) return "NavMenuSectionHeader";
    if (item.children) return "NavMenuGroup";
    return "NavMenuLink";
};

const MenuNavItems = (props) => {
    // ** Components Object
    const Components = {
        NavMenuLink: NavMenuLink,
        NavMenuGroup: NavMenuGroup,
        NavMenuSectionHeader: NavMenuSectionHeader,
    };

    // ** Render Nav Menu Items
    return props.items.map((item, index) => {
        const TagName = Components[resolveNavItemComponent(item)];
        if (item.children) {
            return (
                <TagName key={item.id || item.header} item={item} index={index} menuCollapsed={props.menuCollapsed} {...props} />
            );
        }
        return <TagName key={item.id || item.header} item={item} menuCollapsed={props.menuCollapsed} {...props} />;
    });
};

export default MenuNavItems;
