import {Link} from "react-router-dom";
import InputPasswordToggle from "../../components/elements/PasswordShow"
import {Label, Input, Button} from "reactstrap"
import cloud1 from "../../assets/images/pages/cloud1.svg";
import cloud2 from "../../assets/images/pages/cloud2.svg";
import rocket from "../../assets/images/pages/cosmonaut-rocket.svg";
import React from "react";

const Login = () => {

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
                            <form action="#" method="POST" className="space-y-6">
                                <div>

                                    <Label className="block text-sm font-medium text-gray-700" for="register-username">
                                        Имя пользователя
                                    </Label>

                                    <div className="mt-1">
                                        <Input
                                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            type="text" id="register-username" placeholder="Ivanov_II" autoFocus/>
                                    </div>
                                </div>

                                <div className="space-y-1">
                                    <Label className="block text-sm font-medium text-gray-700" for="register-password">
                                        Пароль
                                    </Label>

                                    <div className="mt-1">
                                        <InputPasswordToggle className="block" id="register-password"/>
                                    </div>
                                </div>
                                <div>
                                    <Button tag={Link} to="/" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" block>
                                        Войти
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
