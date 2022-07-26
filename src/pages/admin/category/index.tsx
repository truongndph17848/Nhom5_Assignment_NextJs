import useCategory from '@/hooks/use-category';
import Link from 'next/link';
import React from 'react'

type CateProps = {
  categories: any[];
}

const listCategory = ({ categories }: CateProps) => {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data, error, remove } = useCategory();
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <div>
      <h2>Danh sách danh mục</h2>
      <a href="category/create">  <button className='bg-sky-300 border'>Thêm mới</button></a>
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
                      <td className='border '>
                        <button className='bg-red-300 px-2 py-2 text-center border' onClick={() => remove(item.id)}>Delete</button>
                        <button className="bg-blue-300 px-2 py-2 text-center border "> <Link href={`category/${item.id}`}>Edit</Link></button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default listCategory