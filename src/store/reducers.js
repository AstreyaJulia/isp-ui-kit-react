import {combineReducers} from "redux";
import layout from "./layout";

/** Корневое хранилище, объединяем все хранилища
 * FIXME добавлять новые хранилища сюда
 * @type {Reducer<CombinedState<unknown>>}
 */
const rootReducer = combineReducers({
    /** Публичные */
    layout
});

export default rootReducer;