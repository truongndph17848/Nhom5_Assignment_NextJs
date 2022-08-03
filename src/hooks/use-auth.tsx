import useSWR, { useSWRConfig } from "swr";
import { list, register } from "../api/auth";

export const useAuth = (options?) => {
    const { data, error, mutate } = useSWR("/users", { ...options });

    // register

    const signup = async (user) => {
        const account = await register(user);
        mutate([...data, account]);
    };

    const profile = (id) => {
        mutate(`/users/${id}`);
    };
    // login
    const signin = (user) =>{
        const 
    }

    // logout

    return {
        data,
        error,
        signup,
        profile,
    };
};
