import React from "react";
import {Avatar} from "../elements/Avatar";
import Badge from "../elements/Badge";
import {getInitials} from "../../utils";
import CardHeader from "../elements/CardHeader";

const TodayBirthdays = ({birthdays}) => {
    return (
        <div className="bg-white dark:bg-gray-900 overflow-hidden shadow rounded-lg mb-3 p-4">
            <CardHeader title="Дни рождения сегодня" />
            <div className="flow-root">
                <ul role="list" className="-my-5 divide-y divide-gray-200">
                    {birthdays.map((birthday) => (
                        <li key={birthday.user.name} className="py-4">
                            <div className="flex items-center space-x-4">
                                <div className="flex-shrink-0">
                                    <Avatar size="8" item={birthday.user} />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-gray-900 truncate">{getInitials(birthday.user.name)}</p>
                                </div>
                                <div>
                                    <Badge size="large" item={birthday.age} color="red" />
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default TodayBirthdays;