import useCategory from '@/hooks/use-category';
import useProducts from '@/hooks/use-product';
import { Product } from '@/models/Product';
import { useRouter } from 'next/router';
import React from 'react'
import { useForm } from 'react-hook-form';

type ProductsProps = {
    products: Product;
}
type inputValuves = {
    name: string,
    img: string,
    priceNew: number,
    priceOld: number,
    status: string
    desc: string, g


}

const creatProducts = ({ products }: ProductsProps) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter()
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { data: category } = useCategory();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { data, error, create } = useProducts();
    if (error) return <div>failed to load</div>;
    // if (!data) return <div>loading...</div>;
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onhandleSubmit = (data: any) => {
        create(data);
        alert('Thêm nhật thành công')
        router.push('/admin/product')
    }
    return (
        <div className="bg-white">
            <h2>Thêm sản phẩm</h2>
            <form id="form-add-pro" onSubmit={handleSubmit(onhandleSubmit)}>
                <div className="mb-3">
                    <label className="uppercase md:text-sm text-xs text-gray-500 text-gray-600 font-semibold mb-1">Tên sản phẩm<span className="text-red-500">*</span></label><br />
                    <input type="text" {...register('name', { required: true, minLength: 5 })} className="border border-gray-300 p-2 w-full" id="name" />
                    {errors.name && <span className='text-red-600'>Không được để trống và nhập trên 5 kí tự !</span>}
                </div>
                <div className="mb-3">
                    <label className="uppercase md:text-sm text-xs text-gray-500 text-gray-600 font-semibold mb-1">Danh mục sản phẩm<span className="text-red-500">*</span></label><br />
                    <select className="bg-teal p-3 rounded shadow-inner w-full" {...register('category')} id="">
                        <option value="">--Chọn danh mục--</option>
                        {category?.map((e, index) => {
                            return (
                                <option key={index} value={`${e._id}`}>{e.name}</option>
                            )
                        })}
                    </select>
                </div>
                <div className="mb-3 grid grid-cols-2 gap-6">
                    <div>
                        <label className="uppercase md:text-sm text-xs text-gray-500 text-gray-600 font-semibold mb-1">Giá mới<span className="text-red-500">*</span></label><br />
                        <input type="number" {...register('priceNew', { required: true })} className="border border-gray-300 p-2 w-full" id="price" />
                        {errors.priceNew && <span className='text-red-600'>Không được để trống !</span>}
                    </div>
                    {/* ... */}
                    <div>
                        <label className="uppercase md:text-sm text-xs text-gray-500 text-gray-600 font-semibold mb-1">Gía cũ<span className="text-red-500">*</span></label><br />
                        <input type="number" {...register('priceOld', { required: true })} className="border border-gray-300 p-2 w-full" id="quantity" />
                        {errors.priceOld && <span className='text-red-600'>Không được để trống !</span>}

                    </div>
                </div>
                <div className="mb-3">
                    <label className="uppercase md:text-sm text-xs text-gray-500 text-gray-600 font-semibold mb-1">Mô tả<span className="text-red-500">*</span></label><br />
                    <textarea {...register('desc', { required: true })} className="w-full sec p-3 h-60 border border-gray-300 " id="desc" placeholder="Mô tả sản phẩm" defaultValue={""} />
                    {errors.desc && <span className='text-red-600'>Không được để trống !</span>}

                </div>
                <div className="mb-3">
                    <label className="uppercase md:text-sm text-xs text-gray-500 text-gray-600 font-semibold mb-1">Upload Photo<span className="text-red-500">*</span></label><br />
                    <input type="string" {...register('img', { required: true })} className="w-full sec p-3 h-30 border border-gray-300 " id="desc" placeholder="Upload ảnh" />
                    {errors.img && <span className='text-red-600'>Không được để trống !</span>}

                </div>

                <div className="mb-3">
                    <label className="uppercase md:text-sm text-xs text-gray-500 text-gray-600 font-semibold mb-1">Trạng thái sản phẩm<span className="text-red-500">*</span></label><br />
                    <select className="bg-teal p-3 rounded shadow-inner w-full" {...register('status', { required: true })} id="">
                        <option value="">Còn hàng</option>
                        <option value="">Hết hàng</option>

                    </select>
                </div>


                <div className="flex items-center justify-center  md:gap-8 gap-4 pt-5 pb-5">
                    <button className="w-auto bg-gray-500 hover:bg-gray-700 rounded-lg shadow-xl font-medium text-white px-4 py-2">Cancel</button>
                    <button className="w-auto bg-orange-700 hover:bg-orange-500 rounded-lg shadow-xl font-medium text-white px-4 py-2">update</button>
                </div>
            </form>
        </div>



    );

}

export default creatProducts