import { read } from '@/api/product';
import useProducts from '@/hooks/use-product';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
type Props = {}

const editProducts = (props: Props) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter();
    const { id } = router.query
    console.log("id", id)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { editProduct, } = useProducts();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        const getProducts = async () => {
            const data = await read(id);
            reset(data)
        }
        getProducts();
    }, [id, reset])
    const onhandleSubmit = (data: any) => {
        editProduct(data);
        // create({...data, products});
        alert('Cập nhật thành công')
        router.push('/admin/product')
    }
    return (
        <div className="bg-white">
            <h2>Sửa sản phẩm</h2>
            <form id="form-add-pro" onSubmit={handleSubmit(onhandleSubmit)}>
                <div className="mb-3">
                    <label className="uppercase md:text-sm text-xs text-gray-500 text-gray-600 font-semibold mb-1">Tên sản phẩm<span className="text-red-500">*</span></label><br />
                    <input type="text" {...register('name')} className="border border-gray-300 p-2 w-full" id="name" />
                </div>

                <div className="mb-3 grid grid-cols-2 gap-6">
                    <div>
                        <label className="uppercase md:text-sm text-xs text-gray-500 text-gray-600 font-semibold mb-1">Giá tiền<span className="text-red-500">*</span></label><br />
                        <input type="string" {...register('price')} className="border border-gray-300 p-2 w-full" id="price" />
                    </div>

                    <div>
                        <label className="uppercase md:text-sm text-xs text-gray-500 text-gray-600 font-semibold mb-1">Trạng thái<span className="text-red-500">*</span></label><br />
                        <input type="string" {...register('status')} className="border border-gray-300 p-2 w-full" id="quantity" />
                    </div>
                </div>
                <div className="mb-3">
                    <label className="uppercase md:text-sm text-xs text-gray-500 text-gray-600 font-semibold mb-1">Mô tả<span className="text-red-500">*</span></label><br />
                    <textarea {...register('desc')} className="w-full sec p-3 h-60 border border-gray-300 " id="desc" placeholder="Mô tả sản phẩm" defaultValue={""} />
                </div>
                <div className="mb-3">
                    <label className="uppercase md:text-sm text-xs text-gray-500 text-gray-600 font-semibold mb-1">Upload Photo<span className="text-red-500">*</span></label><br />
                    <input type="string" {...register('img')} className="w-full sec p-3 h-30 border border-gray-300 " id="desc" placeholder="Upload ảnh" />
                </div>


                <div className="flex items-center justify-center  md:gap-8 gap-4 pt-5 pb-5">
                    <button className="w-auto bg-gray-500 hover:bg-gray-700 rounded-lg shadow-xl font-medium text-white px-4 py-2">Cancel</button>
                    <button className="w-auto bg-orange-700 hover:bg-orange-500 rounded-lg shadow-xl font-medium text-white px-4 py-2">Update</button>

                </div>
            </form >
        </div >


    );

}

export default editProducts
