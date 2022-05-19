import {useEffect} from "react"

import {handleSkin} from "../../store/layout"
import {useDispatch, useSelector} from "react-redux"

export const useSkin = () => {
    const dispatch = useDispatch()
    const store = useSelector(state => state.layout)

    const setSkin = type => {
        dispatch(handleSkin(type))
    }

    useEffect(() => {
        /** Получаем тег body */
        const element = window.document.body

        /** Названия классов для тем */
        const classNames = {
            dark: "dark",
            light: "light"
        }

        /** Удаляем классы тем при монтировании */
        element.classList.remove("dark", "light")

        /** Если тема не светлая, добавляем класс темы */
        element.classList.add(classNames[store.skin])
    }, [store.skin])

    return {skin: store.skin, setSkin}
}
