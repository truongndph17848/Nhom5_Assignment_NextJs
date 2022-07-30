import useCategory from '@/hooks/use-category';
import Link from 'next/link';
import React from 'react'

type CategoryProps = {
    categories: any[];
}

const listCategory = ({ categories }: CategoryProps) => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { data, error, remove } = useCategory();
    if (error) return <div>failed to load</div>;
    if (!data) return <div>loading...</div>;

    return (
        <div>
            <table >
                <thead>
                    <tr>
                        <th>Stt</th>
                        <th> Name</th>
                        <th colSpan={2}>  <button> <Link href="category/create"> Thêm sản phẩm </Link> </button> </th>
                    </tr>
                </thead>

                <tbody>
                    {data.map((item: any, index: any) => (

                        <tr key={index}>
                            <td>{item.id}</td>
                            <td> <Link href={`/categories/${item.id}`}>{item.name}</Link> </td>
                            <td><button onClick={() => remove(item.id)}>Delete</button></td>
                            <td></td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    )
}
export default listCategory