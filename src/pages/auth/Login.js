import {useNavigate, Link} from "react-router-dom";
import InputPasswordToggle from "../../components/elements/PasswordShow"
import {Form, Label, Input, Button} from "reactstrap"
import rocket from "../../assets/images/pages/cosmonaut-rocket.svg";
import React from "react";
import toast from 'react-hot-toast'
import {useDispatch} from 'react-redux'
import {useForm, Controller} from 'react-hook-form'
import {handleLogin} from '../../store/authentication'
import {CheckCircleIcon, XIcon} from "@heroicons/react/outline";
import {Helmet} from "react-helmet";
import config from "../../config";
//import {APIClient} from "../../utils/Helpers/api_helper";

//const fetch = new APIClient();

const defaultValues = {
    login: 'chainik',
    password: 'qwer'
}

const ToastContent = ({t, name}) => {
    return (
        <div className="flex items-start">
            <div className="flex-shrink-0">
                <CheckCircleIcon className="h-6 w-6 text-green-400" aria-hidden="true" />
            </div>
            <div className="ml-3 flex-1 pt-0.5">
                <p className="text-sm font-medium text-gray-900 dark:text-gray-100">{name}</p>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Вы успешно вошли в систему.</p>
            </div>
            <div className="ml-4 flex-shrink-0 flex">
                <button
                    className="bg-white dark:bg-gray-900 rounded-md inline-flex text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    onClick={() => toast.dismiss(t.id)}
                >
                    <span className="sr-only">Закрыть</span>
                    <XIcon className="h-5 w-5" aria-hidden="true" />
                </button>
            </div>
        </div>
    )
}

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {
        control,
        setError,
        handleSubmit,
        formState: {errors}
    } = useForm({defaultValues});

    const onSubmit = data => {
        if (Object.values(data).every(field => field.length > 0)) {

            const data = {
                authUser: "chainik",
                jwt: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9hbnktc2l0ZS5vcmciLCJhdWQiOiJodHRwOlwvXC9hbnktc2l0ZS5jb20iLCJpYXQiOjE2NTMxNDQzMzEsIm5iZiI6MTY1MzE0NzkzMSwiZGF0YSI6eyJpZCI6MSwiaWRHQVMiOm51bGwsInVzZXJuYW1lIjoiY2hhaW5payIsImFjdGl2ZSI6MSwic3VkbyI6MSwic2lkZWJhciI6MCwidGhlbWUiOjF9fQ.BeQ6CVXsFgPOZ25NlNqm5LMRMTMSETSW8OdEtrGgS-M",
                login: "chainik"
            }

            dispatch(handleLogin(data));
            navigate("/home");
            toast(t => (
                <ToastContent t={t} name={data.login} />
            ), {className: "bg-white dark:bg-gray-800 shadow-lg rounded-lg pointer-events-auto ring-1 ring-black dark:ring-white ring-opacity-5 dark:ring-opacity-5 overflow-hidden"});

            /*fetch.get("api/autorization/login.php", data)
                .then(res => {
                    console.log(res)
                const data = {
                    ...res.data.authUser,
                    jwt: res.data.accessToken,
                }
                dispatch(handleLogin(data))
                navigate("/home")
                toast(t => (
                    <ToastContent t={t} role={data.role || 'admin'}
                                  name={data.fullName || data.username || 'John Doe'}/>
                ))
            })
                .catch(err => console.log(err))*/

        } else {
            for (const key in data) {
                if (data[key].length === 0) {
                    setError(key, {
                        type: 'manual'
                    })
                }
            }
        }
    }

    return (
        <React.Fragment>
            <Helmet>
                <title>{config.APP_NAME} - Вход</title>
            </Helmet>

        <div className="min-h-full flex bg-white dark:bg-gray-900">
            <div className="hidden lg:flex relative w-0 flex-1 content-center items-center justify-center rounded-full">
                <div className="w-1/3 bg-cyan-400 rounded-full overflow-hidden">
                    <img
                        className="w-full"
                        src={rocket}
                        alt=""
                    />
                </div>
            </div>
            <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
                <div className="mx-auto w-full max-w-sm lg:w-96">
                    <div>
                        <h2 className="mt-6 text-3xl font-extrabold text-gray-900 dark:text-gray-50">Добро пожаловать! 👋</h2>
                    </div>

                    <div className="mt-8">
                        <div className="mt-6">
                            <Form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                <div>
                                    <Label className="block text-sm font-medium text-gray-700 dark:text-gray-200" for="login">
                                        Имя пользователя
                                    </Label>
                                    <div className="mt-1">
                                        <Controller
                                            id='login'
                                            name='login'
                                            control={control}
                                            render={({field}) => (
                                                <Input
                                                    className="bg-gray-100 dark:bg-gray-800 appearance-none block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                    type="text"
                                                    placeholder="Ivanov_II"
                                                    autoFocus
                                                    invalid={errors.login && true}
                                                    {...field}/>
                                            )}
                                        />
                                    </div>
                                </div>

                                <div className="space-y-1">
                                    <Label className="block text-sm font-medium text-gray-700 dark:text-gray-200" for="password">
                                        Пароль
                                    </Label>

                                    <div className="mt-1">
                                        <Controller
                                            id='password'
                                            name='password'
                                            control={control}
                                            render={({field}) => (
                                                <InputPasswordToggle className='block'
                                                                     invalid={errors.password && true} {...field} />
                                            )}
                                        />
                                    </div>
                                </div>
                                <div className="flex items-center justify-end">
                                    <div className="text-sm">
                                        <Link to="/reg" className="font-medium text-indigo-600 hover:text-indigo-500">
                                            У меня нет пароля
                                        </Link>
                                    </div>
                                </div>
                                <div>
                                    <Button type='submit'
                                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                            block>
                                        Войти
                                    </Button>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </React.Fragment>
    )
}

export default Login
