import {useState} from "react";
import {getLoggedinUser} from "../Helpers/api_helper";

/** Получает данные пользователя
 * @returns {{loading: boolean, userProfile: any}}
 */
const useProfile = () => {
    const userProfileSession = getLoggedinUser();
    const [loading] = useState(!userProfileSession);
    const [userProfile] = useState(
        userProfileSession ? userProfileSession : null
    );

    return {userProfile, loading};
};

export default useProfile;
