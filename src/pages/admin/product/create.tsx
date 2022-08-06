import useProducts from '@/hooks/use-product';
import { useRouter } from 'next/router';
import React from 'react'
import { useForm } from 'react-hook-form';

type ProductsProps = {
    products: any[];
}
type inputValuves = {
    name: string
    price: number,
    img: string,
    desc: string
    status: string


}

const creatProducts = ({ products }: ProductsProps) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter()
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

                <div className="mb-3 grid grid-cols-2 gap-6">
                    <div>
                        <label className="uppercase md:text-sm text-xs text-gray-500 text-gray-600 font-semibold mb-1">Giá tiền<span className="text-red-500">*</span></label><br />
                        <input type="number" {...register('price', { required: true })} className="border border-gray-300 p-2 w-full" id="price" />
                        {errors.price && <span className='text-red-600'>Không được để trống !</span>}
                    </div>
                    {/* ... */}
                    <div>
                        <label className="uppercase md:text-sm text-xs text-gray-500 text-gray-600 font-semibold mb-1">Trạng thái<span className="text-red-500">*</span></label><br />
                        <input type="string" {...register('status', { required: true })} className="border border-gray-300 p-2 w-full" id="quantity" />
                        {errors.status && <span className='text-red-600'>Không được để trống !</span>}

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

                {/* <div className="mb-3 flex justify-center">
                    <img src="https://cafesongao.com/wp-content/uploads/2021/07/tao-dang-bau-troi-1-min-300x400.jpg" alt='' className="border-solid border-white border-2 -mt-3 w-1/12" />
                </div>
                <div className="mb-3">
                    <div className="grid grid-cols-1">
                        <label className="uppercase md:text-sm text-xs text-gray-500 text-gray-600 font-semibold mb-1">Upload Photo</label>
                        <div className="flex items-center justify-center w-full">
                            <label className="flex flex-col border-4 border-dashed w-full h-32 hover:bg-gray-100 hover:border-orange-300 group">
                                <div className="flex flex-col items-center justify-center pt-7">
                                    <svg className="w-10 h-10 text-purple-400 group-hover:text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                    <p className="text-sm text-gray-400 group-hover:text-purple-600 pt-1 tracking-wider">Select a photo</p>
                                </div>
                                <input type="file" className="hidden" id="img" />
                            </label>
                        </div>
                    </div>
                </div> */}
                <div className="flex items-center justify-center  md:gap-8 gap-4 pt-5 pb-5">
                    <button className="w-auto bg-gray-500 hover:bg-gray-700 rounded-lg shadow-xl font-medium text-white px-4 py-2">Cancel</button>
                    <button className="w-auto bg-orange-700 hover:bg-orange-500 rounded-lg shadow-xl font-medium text-white px-4 py-2">Create</button>
                </div>
            </form>
        </div>

        // <div>
        //     <h2>them sp</h2>
        //     <br />
        //     <br />
        //     <br />

        //     <form action="" onSubmit={handleSubmit(onhandleSubmit)}>

        //         <div className="form-group">
        //             <label htmlFor=""> Name</label>
        //             <input className='form-control' type="text" {...register("name")} />
        //         </div>

        //         <input type="submit" />

        //         <button onClick={() => create({ id: 15, name: "Product 15" })}>Create</button>
        //     </form>

        // </div>

    );

}

export default creatProducts