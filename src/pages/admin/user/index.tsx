import { useAuth } from '@/hooks/use-auth';
import Link from 'next/link';
import React from 'react'

type Props = {}

const ListUser = (props: Props) => {
    const { data, error, remove, update } = useAuth();
    console.log(data)
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  return (
    <div>
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
                      Email
                    </th>
                    <th scope="col" className="text-base font-medium text-gray-900 px-6 py-4 text-left border">
                      Name
                    </th>
                    <th scope="col" className=" text-base text-center  font-medium text-gray-900 px-6 py-4 text-left border ">
                      Role
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
                        {item.email}
                      </td>
                      <td className="text-base text-gray-900 font-light px-6 py-4 whitespace-nowrap border">
                        {item.name}
                      </td>
                      <td className="text-base text-gray-900 font-light px-6 py-4 whitespace-nowrap border">
                        {item.role}
                      </td>
                      <td className='border '>
                        <button className='bg-red-300 px-2 py-2 text-center border' onClick={() => remove(item.id)}>Delete</button>
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

export default ListUser