import { removeUser, updateUser } from "@/api/user";
import { toast } from "react-toastify";
import useSWR from "swr";
import { login, register } from "../api/auth";

export const useAuth = (options?) => {
    const { data, error, mutate } = useSWR("/users", { ...options });

    // register

    const signup = async (user) => {
        const account = await register(user);
        mutate([...data, account]);
    };

    // login
    const signin = async (user) => {
        const account = await login(user);
        mutate([...data, account]);
    };


    // logout

    const remove = async (id :any) => {
        const comfirm = window.confirm('Bạn chắc chắn muốn xóa chứ')
            if(comfirm){
            await removeUser(id);
            const newUsers = data.filter((item: any) => item.id != id);
            mutate(newUsers);
            toast.success('Bạn đã xóa thành công')
        }
        
    };

    const update = async(user: any) => {
        await updateUser(user)
        const newUser = data.map((item:any) => item.id === data.id ? user :item)
    }

    return {
        data,
        error,
        signup,
        signin,
        remove,
        update
    };
};
