import { User } from "../models/user.model.js";

export const createUser = async (body) => {
    return await User.create(body);
};

export const getUsers = async () => {
    return User.find()
}
