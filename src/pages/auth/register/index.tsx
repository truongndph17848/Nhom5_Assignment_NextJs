import WebsiteLayout from '@/components/Layout/WebsiteLayout';
import { useAuth } from '@/hooks/use-auth';
import React from 'react'
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';

type UserProps = {
    users: any[];
}

type inputValues={
    email:string,
    name:string,
    password:string
}

const Register = ({users}: UserProps) => {
    const router = useRouter ()
    const {data, error, signup} = useAuth();
    if (error) return <div>Fail to load</div>;
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {register, handleSubmit, watch, formState:{errors}} = useForm();
    function onSubmit(data: any): void {
        console.log(data);
        signup(data);
        router.push('/auth/login')
    }
  return (

     <div className="flex items-center min-h-screen bg-white">
            <div className="container mx-auto">
                <div className="max-w-md mx-auto my-10 border border-gray-300 rounded-md">
                    <div className="text-center">
                        <h1 className="my-3 text-3xl font-semibold text-gray-700">Xin chào👋, vui lòng đăng kí tài khoản để sử dụng các chức năng</h1>
                    </div>
                    <div className="m-7">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="mb-6">
                                <label htmlFor="username" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">User Name</label>
                                <input type="text" {...register('name')} id="username" placeholder="User Name" className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md" />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="email" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Email Address</label>
                                <input type="email" {...register('email')} id="email" placeholder="Email" className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md" />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="password" className="text-sm text-gray-600 dark:text-gray-400">Password</label>
                                <input type="password" {...register('password')} id="password" placeholder="Your Password" className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md" />
                            </div>
                            <div className="mb-6">
                                <button className="w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none">Đăng Kí</button>
                            </div>
                            <p className="text-sm text-center text-gray-400">Bạn đã có tài khoản? <a href="/signin" className="text-indigo-400 focus:outline-none focus:underline focus:text-indigo-500 dark:focus:border-indigo-800 hover:text-orange-700">Đăng nhập</a>.</p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
  )
}
Register.WebsiteLayout = WebsiteLayout

export default Register