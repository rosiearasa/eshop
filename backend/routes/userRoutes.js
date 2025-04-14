import express from 'express';
const router = express.Router();
import     {authUser,
registerUser,
logoutUser,
getUserProfile,
updateUserProfile,
getUsers,
deleteUser,
getUsersById,
updateUser} from '../controllers/userController.js'





router.route('/').post(registerUser).get(getUsers);
router.route('/logout', logoutUser);
router.route('/login', authUser);
router.route('/profile').get(getUserProfile).put(updateUserProfile)
router.route('/:id').delete(deleteUser).get(getUsersById).put(updateUser)







export default router