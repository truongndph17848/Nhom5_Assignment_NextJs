import useCategory from '@/hooks/use-category';
import { useRouter } from 'next/router';
import React from 'react'
import { useForm } from 'react-hook-form';

type CateProps = {
    categories: any[];
}
type inputValuves = {
    name: string
}

const createCategory = ({ categories }: CateProps) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter()
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { data, error, create } = useCategory();
    if (error) return <div>failed to load</div>;
    // if (!data) return <div>loading...</div>;
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onhandleSubmit = (data: any) => {
        create(data);
        alert('Thêm nhật thành công')
        router.push('/admin/category')
    }
    return (
        <div className="bg-white">
            <h2>Thêm sản danh mục</h2>
            <form id="form-add-pro" onSubmit={handleSubmit(onhandleSubmit)}>
                <div className="mb-3">
                    <label className="uppercase md:text-sm text-xs text-gray-500 text-gray-600 font-semibold mb-1">Tên danh mục<span className="text-red-500">*</span></label><br />
                    <input type="text" {...register('name', { required: true })} className="border border-gray-300 p-2 w-full" id="name" />
                    {errors.name && <span className='text-red-600'>Không được để trống !</span>}

                </div>
                <div className="flex items-center justify-center  md:gap-8 gap-4 pt-5 pb-5">
                    <button className="w-auto bg-gray-500 hover:bg-gray-700 rounded-lg shadow-xl font-medium text-white px-4 py-2">Cancel</button>
                    <button className="w-auto bg-orange-700 hover:bg-orange-500 rounded-lg shadow-xl font-medium text-white px-4 py-2">Create</button>
                </div>
            </form>
        </div>
    );

}

export default createCategory