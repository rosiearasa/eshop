import asyncHandler from '../middleware/asyncHandler.js';
import User from '../models/userModel.js';

// @desc Auth User & get token 
// @route GET/api/users/login
// @access Public
const authUser = asyncHandler(async(req, res)=>{
  res.send('auth user')
});

// @desc Register user 
// @route POST /api/users
// @access Public
const registerUser = asyncHandler(async(req, res)=>{
    res.send('register user')
  });

  // @desc LogOut user /Clear Cookie
// @route POST /api/users/logout
// @access Private
const logoutUser = asyncHandler(async(req, res)=>{
    res.send('logout user')
  });

  // @desc Get user profile 
// @route GET /api/users/profile
// @access Private
const getUserProfile = asyncHandler(async(req, res)=>{
    res.send('get user profile')
  });


  // @desc Update userprofile 
// @route PUT /api/users/profile
// @access Private
const updateUserProfile = asyncHandler(async(req, res)=>{
    res.send('UPDATE user profile')
  });


  // @desc Get users 
// @route GET /api/users
// @access Private/admin
const getUsers = asyncHandler(async(req, res)=>{
    res.send('get users')
  });

  // @desc Get user by id
// @route GET /api/users/:id
// @access Private/admin
const getUsersById = asyncHandler(async(req, res)=>{
    res.send('get user by id')
  });


  // @desc Delete users 
// @route DELETE /api/users/:id
// @access Private/admin
const deleteUser = asyncHandler(async(req, res)=>{
    res.send('delete users')
  });

    // @desc uPDATE users 
// @route PUT /api/users/:id
// @access Private/admin
const updateUser = asyncHandler(async(req, res)=>{
    res.send('update user')
  });
  export{
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile,
    getUsers,
    deleteUser,
    getUsersById,
    updateUser
  }