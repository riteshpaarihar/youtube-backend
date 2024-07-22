import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import  {User} from "../models/user.models.js"
import {uploadOncloudinary} from "../utils/cloudinary.js"
import {ApiResponse} from "../utils/ApiResponse.js"
const registerUser = asyncHandler(async (req, res) => {
  // get user information from frontend

  const { fullName, email, password, username } = req.body;
  //console.log(fullName, email, password, username);

  // vailidation  - not empty

  // if (fullName === "") {
  //     throw new ApiError("Full Name is required", 400);
  // }
  if (
    [fullName, email, password, username].some((field) => field?.trim() === "")
  ) {
    throw new ApiError(400,"All fields are required");
  }

  // check  if user is already registered  (by username and email address)

  const existedUser = await User.findOne({
  $or: [{ username }, { email }],
});
if (existedUser) {
  throw new ApiError(409, "User already exists");
}

  // check  for image , check for avatar
  const avatarLocalPath=  req.files?.avatar[0]?.path;
  //const coverImageLocalPath=  req.files?.coverImage[0]?.path;


  let coverImageLocalPath;
    if (req.files && Array.isArray(req.files.coverImage) && req.files.coverImage.length > 0) {
        coverImageLocalPath = req.files.coverImage[0].path
    }
  if(!avatarLocalPath){
    throw new ApiError(400,"Avatar is required");
  }
  // check them uploaded  image cloundinary
 
  const avatar= await uploadOncloudinary(avatarLocalPath )
 const coverImage = await uploadOncloudinary(coverImageLocalPath )
 if(!avatar){
    throw new ApiError("Failed to upload avatar", 500);
 
 }
  // create user object create entry object in db

  const user=await User.create({
    fullName,
    email,
    password,
    username:username.toLowerCase(),
    avatar: avatar.url,
    coverImage: coverImage?.url ||"",
    
  })


const createdUser = await User.findById(user._id).select("-password -refreshToken");
if (!createdUser) {
  throw new ApiError("Failed to create user", 500);
}
return res.status(201).json(new ApiResponse(200, createdUser, "user registered successfully"));

  
});

export { registerUser };
