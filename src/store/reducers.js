import {combineReducers} from "redux";
import layout from "./layout";
import auth from './authentication'

/** Корневое хранилище, объединяем все хранилища
 * FIXME добавлять новые хранилища сюда
 * @type {Reducer<CombinedState<unknown>>}
 */
const rootReducer = combineReducers({
    /** Публичные */
    layout,
    auth
});

export default rootReducer;