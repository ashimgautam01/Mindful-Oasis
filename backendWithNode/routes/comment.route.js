import express from 'express'
import { AddComment, deleteComment, getAllComment } from '../controllers/CommentController.js'
const router =express.Router()

router.route('/v3/addcomment').post(AddComment)
router.route('/v3/getcomment').get(getAllComment)
router.route('/v3/deletecomment').delete(deleteComment)

export default router