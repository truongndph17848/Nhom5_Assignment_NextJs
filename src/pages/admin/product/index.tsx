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
      <table className=''>
        <thead>
          <tr>
            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
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
      </table>



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