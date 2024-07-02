
import { createUser } from "../services/user.service.js";
import { asyncHandler } from "../utils/asyncHandler.js";

export const createUserHandler = asyncHandler(async (req, res) => {
    const data = await createUser(req.body);
    res.status(201).json({
        success: true,
        data
    });
});
