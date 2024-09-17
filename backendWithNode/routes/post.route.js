import express from 'express'
const router = express.Router();
import {AddPost,DeletePost,getAllpost} from '../controllers/PostController.js';

router.route("/v2/addpost").post(AddPost)
router.route("/v2/getallpost").get(getAllpost)
router.route("/v2/deletepost").delete(DeletePost)

export default router