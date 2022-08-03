import useSWR, { useSWRConfig } from "swr";
import { login, register } from "../api/auth";

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
    const signin = async (user) => {
        const account = await login(user);
        mutate([...data, account]);
    };

    const profiles = (url) => {
        mutate(url)
    }


    // logout

    return {
        data,
        error,
        signup,
        signin,
        profiles,
        profile,
    };
};
