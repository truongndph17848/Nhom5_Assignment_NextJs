import instance from "./instance";

export const register = (user) => {
    return instance.post("/signup",user);
}
export const login = (user: { email: string; password: string }) => {
    return instance.post("/signin",user);
}