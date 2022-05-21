import {useNavigate} from "react-router-dom";
import InputPasswordToggle from "../../components/elements/PasswordShow"
import {Form, Label, Input, Button} from "reactstrap"
import cloud1 from "../../assets/images/pages/cloud1.svg";
import cloud2 from "../../assets/images/pages/cloud2.svg";
import rocket from "../../assets/images/pages/cosmonaut-rocket.svg";
import React from "react";
import toast from 'react-hot-toast'
import {useDispatch} from 'react-redux'
import {useForm, Controller} from 'react-hook-form'
import {handleLogin} from '../../store/authentication'
import NotificationSimple from "../../components/elements/NotificationSimple";
import {CheckCircleIcon} from "@heroicons/react/outline";
//import {APIClient} from "../../utils/Helpers/api_helper";

//const fetch = new APIClient();

const defaultValues = {
    login: 'chainik',
    password: 'qwer'
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
                <NotificationSimple onClick={() => toast.dismiss(t.id)}>
                    <div className="flex-shrink-0">
                        <CheckCircleIcon className="h-6 w-6 text-green-400" aria-hidden="true"/>
                    </div>
                    <div className="ml-3 w-0 flex-1 pt-0.5">
                        <p className="text-sm font-medium text-gray-900">{data.login}</p>
                        <p className="mt-1 text-sm text-gray-500">You have successfully logged in as an user to Vuexy.
                            Now you can start to explore. Enjoy!</p>
                    </div>
                </NotificationSimple>
            ));

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
        <div className="min-h-full flex bg-white">
            <div className="hidden lg:flex relative w-0 flex-1 content-center items-center justify-center">
                <img className="cloud absolute animation-cloud w-1/4 -top-7 right-1/4 opacity-70" src={cloud1} alt=""/>
                <img className="cloud absolute animation-cloud w-1/3 -top-1/3 opacity-80" src={cloud2} alt=""/>
                <img className="cloud absolute animation-cloud w-1/4 top-1/3 left-1/4" src={cloud1} alt=""/>
                <img
                    className="w-1/3 bg-cyan-400 rounded-full p-6"
                    src={rocket}
                    alt=""
                />
            </div>
            <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
                <div className="mx-auto w-full max-w-sm lg:w-96">
                    <div>
                        <img
                            className="h-12 w-auto"
                            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                            alt="Workflow"
                        />
                        <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Добро пожаловать! 👋</h2>
                    </div>

                    <div className="mt-8">

                        <div className="mt-6">
                            <Form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                <div>
                                    <Label className="block text-sm font-medium text-gray-700" for="login">
                                        Имя пользователя
                                    </Label>
                                    <div className="mt-1">
                                        <Controller
                                            id='login'
                                            name='login'
                                            control={control}
                                            render={({field}) => (
                                                <Input
                                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
                                    <Label className="block text-sm font-medium text-gray-700" for="password">
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
    )
}

export default Login
