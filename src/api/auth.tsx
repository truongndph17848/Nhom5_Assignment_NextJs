
import instance from "./instance";

export const register = (user) => {
    return instance.post("/users",user);
}
export const login = (user) => {
    return instance.get("/users",user);
}