import instance from "./instance";

export const getUser = () => {
    return instance.get(`/users`)
}

export const removeUser = (id:any) => {
    return instance.delete(`/users/${id}`)
}

export const updateUser = (user: any) => {
    return instance.delete(`/users/${user.id}`, user)
}

export const getOneUser = (id: any) => {
    return instance.get(`/users/${id}`);
}
