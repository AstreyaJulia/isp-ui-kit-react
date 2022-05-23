/** Навигация для сайдбара, для локального тестирования
 * @type {[{header: string},{name: string, icon: string, id: string, href: string},{name: string, icon: string, id: string, href: string},{badgeColor: string, name: string, icon: string, badgeClassName: string, id: string, href: string, badgeText: string},{children: [{name: string, icon: string, id: string, href: string}], name: string, icon: string, id: string},null,null,null,null,null]}
 */
export const navigation = [
    {header: "Главное меню"},
    {
        id: "1",
        name: "Главная",
        icon: "mdi-apps",
        href: "/home",
    },
    {
        id: "2",
        name: "Каталог ссылок",
        icon: "mdi-folder-table-outline",
        href: "/proxylist",
    },
    {
        id: "3",
        name: "Календарь",
        icon: "mdi-calendar",
        href: "/calendar",
        badgeColor: "bg-red-500"
    },
    {
        id: "4",
        name: "Информация",
        icon: "mdi-information-outline",
        children: [
            {
                id: "5",
                name: "Телефонный справочник",
                icon: "mdi-phone-classic",
                href: "/phonebook",
            }
        ]
    },
    {
        id: "6",
        name: "Статистика",
        icon: "mdi-chart-arc",
        children: [
            {
                id: "7",
                name: "Графики",
                icon: "mdi-chart-arc",
                href: "/stats",
            },
            {
                id: "8",
                name: "Качество",
                icon: "mdi-finance",
                href: "/grade",
            }
        ]
    },
    {
        id: "9",
        name: "Помощь",
        icon: "mdi-help-circle-outline",
        children: [
            {
                id: "10",
                name: "База знаний",
                icon: "mdi-lightbulb-on-outline",
                href: "/faq",
            }
        ]
    },
    {header: "Администрирование"},
    {
        id: "12",
        name: "Панель управления",
        icon: "mdi-view-dashboard-outline",
        href: "/admin",
    }
]

/** Пользователи, для локального тестирования
 * @type {[{profession: string, birthday: string, role: string, address: string, color: string, gender: string, ip: string, facebook: string, work_phone: string, instagram: string, avatar: string, login: string, site1: string, site2: string, odnoklassniki: string, mobile_phone: string, name: string, vkontakte: string, id: string, sudo: string, judge: string, place: string, cabinet: string, email: string},{profession: string, birthday: string, role: string, address: string, color: string, gender: string, ip: string, facebook: string, work_phone: string, instagram: string, avatar: string, login: string, site1: string, site2: string, odnoklassniki: string, mobile_phone: string, name: string, vkontakte: string, id: string, sudo: string, judge: string, place: string, cabinet: string, email: string},{profession: string, birthday: string, role: string, address: string, color: string, gender: string, ip: string, facebook: string, work_phone: string, instagram: string, avatar: string, login: string, site1: string, site2: string, odnoklassniki: string, mobile_phone: string, name: string, vkontakte: string, id: string, sudo: string, judge: string, place: string, cabinet: string, email: string},{profession: string, birthday: string, role: string, address: string, color: string, gender: string, ip: string, facebook: string, work_phone: string, instagram: string, avatar: string, login: string, site1: string, site2: string, odnoklassniki: string, mobile_phone: string, name: string, vkontakte: string, id: string, sudo: string, judge: string, place: string, cabinet: string, email: string}]}
 */
export const users = [
    {
        id: "1",
        sudo: "0",
        login: "Petrov_PP",
        name: "Петров Петр Петрович",
        color: "green",
        gender: "male",
        profession: "Судья",
        judge: "",
        role: "User",
        email: "petrovpp@example.com",
        cabinet: "Каб. 13",
        place: "АРМ 3",
        work_phone: "3-13-28",
        mobile_phone: "7-910-123-12-12",
        address: "Город, улица, дом, квартира",
        birthday: "1970-05-23",
        ip: "192.168.2.1",
        vkontakte: "https://vk.com/id&=1",
        odnoklassniki: "https://ok.ru/id&=1",
        facebook: "https://facebook.com/id&=1",
        instagram: "https://instagram.com/id&=1",
        site1: "",
        site2: "",
        avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
        id: "2",
        sudo: "0",
        login: "Ivanov_NN",
        name: "Иванов Николай Николаевич",
        color: "blue",
        gender: "male",
        profession: "Секретарь судебных заседаний",
        judge: "Петров Петр Петрович",
        role: "User",
        email: "ivanovnn@example.com",
        cabinet: "Каб. 13",
        place: "АРМ 2",
        work_phone: "3-13-28",
        mobile_phone: "7-950-123-12-12",
        address: "Город, улица, дом, квартира",
        birthday: "1980-03-10",
        ip: "192.168.2.2",
        vkontakte: "https://vk.com/id&=2",
        odnoklassniki: "https://ok.ru/id&=2",
        facebook: "https://facebook.com/id&=2",
        instagram: "https://instagram.com/id&=2",
        site1: "",
        site2: "",
        avatar: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
        id: "3",
        sudo: "0",
        login: "Smirnov_II",
        name: "Смирнов Иван Иванович",
        color: "indigo",
        gender: "male",
        profession: "Помощник судьи",
        judge: "Петров Петр Петрович",
        role: "User",
        email: "smirnovii@example.com",
        cabinet: "Каб. 13",
        place: "АРМ 1",
        work_phone: "3-13-28",
        mobile_phone: "7-909-123-12-12",
        address: "Город, улица, дом, квартира",
        birthday: "1985-05-12",
        ip: "192.168.2.3",
        vkontakte: "https://vk.com/id&=3",
        odnoklassniki: "https://ok.ru/id&=3",
        facebook: "https://facebook.com/id&=3",
        instagram: "https://instagram.com/id&=3",
        site1: "",
        site2: "",
        avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
        id: "4",
        sudo: "0",
        login: "Vasechkina_MI",
        name: "Васечкина Мария Ивановна",
        color: "rose",
        gender: "female",
        profession: "Секретарь суда",
        judge: "",
        role: "User",
        email: "vasechkinami@example.com",
        cabinet: "Каб. 3",
        place: "АРМ 1",
        work_phone: "3-13-27",
        mobile_phone: "7-903-123-12-12",
        address: "Город, улица, дом, квартира",
        birthday: "1994-02-16",
        ip: "192.168.2.4",
        vkontakte: "https://vk.com/id&=4",
        odnoklassniki: "https://ok.ru/id&=4",
        facebook: "https://facebook.com/id&=4",
        instagram: "https://instagram.com/id&=4",
        site1: "",
        site2: "",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.6&w=256&h=256&q=80",
    },
    {
        id: "5",
        sudo: "0",
        login: "Belosheikina_OL",
        name: "Белошейкина Олеся Леонидовна",
        color: "orange",
        gender: "female",
        profession: "Консультант",
        judge: "",
        role: "User",
        email: "belosheikinaol@example.com",
        cabinet: "Каб. 6",
        place: "АРМ 1",
        work_phone: "6-13-27",
        mobile_phone: "7-903-124-12-12",
        address: "Город, улица, дом, квартира",
        birthday: "1994-04-01",
        ip: "192.168.2.5",
        vkontakte: "https://vk.com/id&=5",
        odnoklassniki: "https://ok.ru/id&=5",
        facebook: "https://facebook.com/id&=5",
        instagram: "https://instagram.com/id&=5",
        site1: "https://site1.com",
        site2: "https://site2.com",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
        id: "6",
        sudo: "1",
        login: "Chainikov_OV",
        name: "Чайников Олег Васильевич",
        color: "blue",
        gender: "male",
        profession: "Администратор",
        judge: "",
        role: "Admin",
        email: "chainikovov@example.com",
        cabinet: "Каб. 2",
        place: "АРМ 1",
        work_phone: "3-13-97",
        mobile_phone: "7-903-124-12-34",
        address: "Город, улица, дом, квартира",
        birthday: "1994-08-23",
        ip: "192.168.2.6",
        vkontakte: "https://vk.com/id&=6",
        odnoklassniki: "https://ok.ru/id&=6",
        facebook: "https://facebook.com/id&=6",
        instagram: "https://instagram.com/id&=6",
        site1: "https://site1.com",
        site2: "https://site2.com",
        avatar: ""
    }

]

export const messages = [
    {id: "1", user: users[5], time: "2022-05-21 11:05:00", message: "Hey John, I am looking for the best admin template. Could you please help me to find it out?"}
]

export const birthdaysToday = [
    {user: users[5], age: "36"},
    {user: users[3], age: "24"}
]