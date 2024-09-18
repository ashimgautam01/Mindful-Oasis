import express from 'express'
import { AddComment, deleteComment, getAllComment } from '../controllers/CommentController.js'
const router =express.Router()

router.route('/v3/addcomment').post(AddComment)
router.route('/v3/getcomment/:id').get(getAllComment)
router.route('/v3/deletecomment/:id').delete(deleteComment)

export default router