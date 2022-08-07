import { read } from '@/api/category';
import useCategory from '@/hooks/use-category';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
type Props = {}

const editCategory = (props: Props) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter();
    const { id } = router.query

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { editCategory } = useCategory();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        const getCategory = async () => {
            const data = await read(id);
            reset(data)
        }
        getCategory();
    }, [id, reset])
    const onhandleSubmit = (data: any) => {
        editCategory(data);
        // create({...data, products});
        alert('Cập nhật thành công')
        router.push('/admin/category')
    }
    return (
        <div className="bg-white">
            <h2>Sửa sản phẩm</h2>
            <form id="form-add-pro" onSubmit={handleSubmit(onhandleSubmit)}>
                <div className="mb-3">
                    <label className="uppercase md:text-sm text-xs text-gray-500 text-gray-600 font-semibold mb-1">Tên danh mục<span className="text-red-500">*</span></label><br />
                    <input type="text" {...register('name')} className="border border-gray-300 p-2 w-full" id="name" />
                </div>
                <div className="flex items-center justify-center  md:gap-8 gap-4 pt-5 pb-5">
                    <button className="w-auto bg-gray-500 hover:bg-gray-700 rounded-lg shadow-xl font-medium text-white px-4 py-2">Cancel</button>
                    <button className="w-auto bg-orange-700 hover:bg-orange-500 rounded-lg shadow-xl font-medium text-white px-4 py-2">Update</button>
                </div>
            </form >
        </div >
    );

}

export default editCategory
