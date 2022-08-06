import { login } from '@/api/auth';
import WebsiteLayout from '@/components/Layout/WebsiteLayout';
import { useRouter } from 'next/router';
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';


type inputValues = {
    email: string,
    password: string
}

const Login = () => {
    const router = useRouter()
    const { register, handleSubmit, formState: { errors } } = useForm<inputValues>();
    const onSubmit: SubmitHandler<inputValues> = async (data) => {
        const user = await login(data);
        console.log(data);
        if (data) {
            localStorage.setItem('User', JSON.stringify(user))
        }
        router.push('/')
    }
    return (

        <div className="flex items-center min-h-screen bg-white">
            <div className="container mx-auto">
                <div className="max-w-md mx-auto my-10 border border-gray-300 rounded-md">
                    <div className="text-center">
                        <h1 className="my-3 text-3xl font-semibold text-gray-700">Đăng nhập tài khoản</h1>
                    </div>
                    <div className="m-7">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="mb-6">
                                <label htmlFor="email" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Email Address</label>
                                <input type="email" {...register('email', { required: true })} id="email" placeholder="Email" className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md" />
                                {errors.email && <span className='text-red-600'>Email không được để trống !</span>}
                            </div>
                            <div className="mb-6">
                                <label htmlFor="password" className="text-sm text-gray-600 dark:text-gray-400">Password</label>
                                <input type="password" {...register('password', { required: true })} id="password" placeholder="Your Password" className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md" />
                                {errors.password && <span className='text-red-600'>Mật khẩu không được để trống !</span>}

                            </div>
                            <div className="mb-6">
                                <button className="w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none">Đăng nhập</button>
                            </div>
                            <p className="text-sm text-center text-gray-400">Bạn chưa có tài khoản? <a href="register" className="text-indigo-400 focus:outline-none focus:underline focus:text-indigo-500 dark:focus:border-indigo-800 hover:text-orange-700">Đăng kí</a>.</p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
Login.WebsiteLayout = WebsiteLayout

export default Login