import useProducts from '@/hooks/use-product';
import Link from 'next/link';
import React from 'react'

type ProductsProps = {
  products: any[];
}

const listProduct = ({ products }: ProductsProps) => {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data, error, remove } = useProducts();
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <div>
      <h2>Danh sách sản phẩm</h2>
      <div className="flex flex-col ">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8 ">
            <div className="overflow-hidden">
              <table className="min-w-full ">
                <thead className="">
                  <tr>
                    <th scope="col" className="text-base font-medium text-gray-900 px-6 py-4 text-left border">
                      Id
                    </th>
                    <th scope="col" className="text-base font-medium text-gray-900 px-6 py-4 text-left border">
                      Name
                    </th>
                    <th scope="col" className="text-base font-medium text-gray-900 px-6 py-4 text-left border">
                      Price
                    </th>
                    <th scope="col" className=" text-base text-center  font-medium text-gray-900 px-6 py-4 text-left border ">
                      Image
                    </th>
                    <th scope="col" className=" text-base text-center  font-medium text-gray-900 px-6 py-4 text-left border ">
                      Mô tả
                    </th>
                    <th scope="col" className="text-base font-medium text-gray-900 px-6 py-4 text-left border">
                      Trạng thái
                    </th>
                    <th scope="col" className="text-base font-medium text-gray-900 px-6 py-4 text-left border">
                      Chức năng
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item: any, index: any) => (
                    <tr key={index} className="border-solid	">
                      <td className=" px-6 py-4 whitespace-nowrap text-base font-medium text-gray-900 border" >{item.id}</td>
                      <td className="text-base text-gray-900 font-light px-6 py-4 whitespace-nowrap border">
                        {item.name}
                      </td>
                      <td className="text-base text-gray-900 font-light px-6 py-4 whitespace-nowrap border">
                        {item.price}
                      </td>
                      <td className="text-base text-gray-900 font-light px-6 py-4 whitespace-nowrap border ">
                        <img src={item.img} alt="" width="120px" />
                      </td>
                      <td className="text-base text-gray-900 font-light px-6 py-4 whitespace-nowrap border">
                        {item.desc}
                      </td>
                      <td className="text-base text-gray-900 font-light px-6 py-4 whitespace-nowrap border">
                        {item.status}
                      </td>
                      <td className='border'><button className='bg-red-300 px-2 py-2 text-center border' onClick={() => remove(item.id)}>Delete</button></td>
                    </tr>

                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* <table >
        <thead>
          <tr className='border'>
            <th scope="col" className="text-base   font-medium text-gray-900 px-6 py-4 text-left">
              id
            </th>
            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
              Name
            </th>
            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
              Price
            </th>
            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
              Handle
            </th>
            <th colSpan={2}>  <button> <Link href="product/create"> Thêm sản phẩm </Link> </button> </th>
          </tr>
        </thead>

        <tbody>
          {data.map((item: any, index: any) => (
            <tr key={index}>
              <td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>{item.id}</td>
              <td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'> <Link href={`/products/${item.id}`}>{item.name}</Link> </td>
              <td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>***</td>
              <td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>***</td>


              <td><button onClick={() => remove(item.id)}>Delete</button></td>

              <td></td>
            </tr>
          ))}

        </tbody>
      </table> */}



      {/* {data.map((item: any) => (
      <div key={item.id}>
          <Link href={`/products/${item.id}`}>{item.name}</Link>

      </div>
  ))}
<button onClick={() => create({ id: 14, name: "Product 14" })}>Create</button> */}

    </div>
  )
}

export default listProduct