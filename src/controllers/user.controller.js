
import { createUser, getUsers } from "../services/user.service.js";
import { asyncHandler } from "../utils/asyncHandler.js";

export const createUserHandler = asyncHandler(async (req, res) => {
    const data = await createUser(req.body);
    res.status(201).json({
        success: true,
        data
    });
});

export const getAllUserHandler = asyncHandler(async (req, res) => {
    const data = await getUsers(req.querry)
    res.status(201).json({
        success: true,
        data
    });
})
