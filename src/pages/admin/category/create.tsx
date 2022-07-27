import useCategories from '@/hooks/use-category';
import React from 'react'
import { useForm } from 'react-hook-form';


type CategoryProps = {
    categories: any[];
  }

const createCategory = ({categories}: CategoryProps) => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { data, error, create } = useCategories();
    if (error) return <div>failed to load</div>;
    // if (!data) return <div>loading...</div>;

    const { register, handleSubmit, watch, formState: { errors } } = useForm();


    const onhandleSubmit = (data: any) =>{
       
        create(data);
        console.log(data);

        // create({...data, products});
    }
    return (
        <div>
            <h2>them danh mục</h2>

            <br />
            <br />
            <br />

        <form action="" onSubmit={handleSubmit(onhandleSubmit)}>

        <div className="form-group">
            <label htmlFor=""> Tên danh mục</label>
            <input className='form-control' type="text" {...register("name")}/>
        </div>
         
         <input type="submit" />
        
        {/* <button onClick={() => create({ id: 15, name: "Product 15" })}>Create</button> */}
        </form>

        </div>
  
    );
  
}

export default createCategory