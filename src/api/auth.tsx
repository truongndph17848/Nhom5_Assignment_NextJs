
import instance from "./instance";

export const register = (user) => {
    return instance.post("/users",user);
}
export const list = (url) => {
    return instance.get(url);
}