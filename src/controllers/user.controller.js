import { asyncHandler } from "../utils/asyncHandler.js";

const registerUser = asyncHandler(async(req, res) => {
    res.status(200).json({
        message: 'User registered successfully',
    });
});

export { registerUser };




// import { asyncHandler } from '../utils/asyncHandler.js';

// const registerUser = asyncHandler(async(req, res) => {
//     return res.status(200).json({
//         // success: true,
//         message: 'User registered successfully',
//     });
// });

// export { registerUser };