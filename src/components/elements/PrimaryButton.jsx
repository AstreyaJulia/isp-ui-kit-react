import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

/** Однотонная цветная кнопка, для привлечения внимания
 * @param size - азмер
 * @param label - лейбл кнопки
 * @param onClick - обработчик клика
 * @param type - тип
 * @param props - доп. пропсы
 * @returns {JSX.Element}
 * @constructor
 */
const PrimaryButton = ({size, label, onClick, type, ...props}) => {
    const sizes = {
        "small": "px-3 py-1.5 text-xs",
        "medium": "px-4 py-2 text-sm",
        "large": "px-6 py-3 text-base"
    }
    return (
        <button
            type={type}
            onClick={onClick}
            className={classNames("bg-indigo-600 border border-transparent rounded-md shadow-sm inline-flex justify-center font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500", sizes[size])}
            {...props}
        >
            {label}
        </button>
    );
};

PrimaryButton.propTypes = {
    /** Размер кнопки */
    size: PropTypes.oneOf(["small", "medium", "large"]).isRequired,
    /** Лейбл (надпись) кнопки */
    label: PropTypes.string.isRequired,
    /** Тип кнопки */
    type: PropTypes.oneOf(["button", "submit"]),
    /** Обработчик клика */
    onClick: PropTypes.func,
};

PrimaryButton.defaultProps = {
    size: "medium",
    type: "button",
    label: "button",
    onClick: undefined,
};

export default PrimaryButton;