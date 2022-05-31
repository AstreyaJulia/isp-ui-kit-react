import React from "react";
import PropTypes from "prop-types";
import {AvatarBasic} from "./AvatarBasic";
import {AvatarCircularWithPlaceholderInitials} from "./AvatarCircularWithPlaceholderInitials";

export const Avatar = ({item, size, classname}) => {

    return (
        item.avatar ?
            <AvatarBasic size={size} item={item} className={classname || ""}/> :
            <AvatarCircularWithPlaceholderInitials item={item} size={size} color={item.color || "indigo"}
                                                   className={classname || ""}/>
    );
};

Avatar.propTypes = {
    /** Данные */
    item: PropTypes.shape({}).isRequired,
    /** Размер аватара */
    size: PropTypes.oneOf(["6", "8", "10", "12", "14"]).isRequired,
    /** Доп. класс для аватара */
    classname: PropTypes.string
};


Avatar.defaultProps = {
    size: "10",
    item: null,
    classname: ""
};