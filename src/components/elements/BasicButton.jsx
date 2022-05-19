import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

/** Простая кнопка, адаптирована под темную тему
 * @param size - размер
 * @param label - лейбл кнопки
 * @param onClick - обработчик клика
 * @param type - тип
 * @param props - доп. пропсы
 * @returns {JSX.Element}
 * @constructor
 */
export const BasicButton = ({size, label, onClick, type, ...props}) => {

    const sizes = {
        "small": "px-3 py-1.5 text-xs",
        "medium": "px-4 py-2 text-sm",
        "large": "px-6 py-3 text-base"
    }

    return (
        <button
            type={type}
            onClick={onClick}
            className={classNames("ml-5 bg-white dark:bg-gray-900 border border-gray-300 rounded-md shadow-sm leading-4 font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:border-gray-600 dark:hover:bg-gray-700", sizes[size])}
            {...props}
        >
            {label}
        </button>
    )
};

/** Типы свойств */
BasicButton.propTypes = {
    /** Размер кнопки */
    size: PropTypes.oneOf(['small', 'medium', 'large']).isRequired,
    /** Лейбл (надпись) кнопки */
    label: PropTypes.string.isRequired,
    /** Тип кнопки */
    type: PropTypes.oneOf(['button', 'submit']),
    /** Обработчик клика */
    onClick: PropTypes.func,
};

/** Дефолтные свойства */
BasicButton.defaultProps = {
    size: 'medium',
    type: "button",
    label: "button",
    onClick: undefined,
};