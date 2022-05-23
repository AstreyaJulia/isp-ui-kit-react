/** Проверяет, пустой ли объект
 * @param obj - объект
 * @returns {boolean} -boolean
 */
export const isObjEmpty = obj => Object.keys(obj).length === 0

/** Конвертирует kebab case в camelCase
 * @param string - конвертируемая строка
 * @returns {*}
 */
export const kebabToCamel = string => string.replace(/-./g, x=>x[1].toUpperCase());

/** Получает из полного ФИО, фамилию + инициалы
 * @param name - фамилия имя отчество
 * @returns {string}
 */
export const getInitials = name => name.split(" ").slice(0, 1) + " " + name.split(" ").slice(1).map((n) => n[0]).join(". ").toUpperCase();

/** Получает из полного ФИО инициалы, начиная с 2 элемента (только имя и отчество)
 * @param name - фамилия имя отчество
 * @returns {string}
 */
export const getInitialsOnly = name => name.split(" ").slice(1).map((n) => n[0]).join("").toUpperCase();

/** Делает из объекта массив
 * @returns {[]}
 * @param object
 */
export const makeArrayFromObj = (object) => {
    let array = [];
    Object.keys(object).map(function(key, index) {
        array.push(object[key]);
    });
    return array;
}