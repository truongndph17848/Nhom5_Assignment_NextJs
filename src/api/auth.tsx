import { User } from "@/models/User";
import instance from "./instance";

export const signup = (user: User) => {
    return instance.post("/register",user);
}
export const login = (user: { email: string; password: string }) => {
    return instance.post("/login",user);
}