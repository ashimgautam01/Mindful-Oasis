 
import pool from "../index.js";
import { uploadToCloud } from "../utils/cloudinary.js";

const AddPost = async (req, res) => {
  try {
    const { user_id, text } = req.body;
    const image = req.file;  
    if (!user_id || !text || !image) {
      return res.status(400).json({ message: "Missing required fields" });
    }
 const path=image.path
    const image_url = await uploadToCloud(path);  
console.log(image_url);
    const query = `INSERT INTO posts (user_id, image, text) VALUES (?, ?, ?)`;
    const values = [user_id, image_url, text];

    const [results] = await pool.query(query, values);

    if (results.affectedRows > 0) {
      return res.status(201).json({
        message: "Post added successfully",
        postId: results.insertId,
      });
    } else {
      return res.status(500).json({ message: "Failed to add post" });
    }
  } catch (error) {
    console.error("Error adding post:", error);
    return res.status(500).json({
      message: "An error occurred while adding the post",
    });
  }
};

const DeletePost=async(req,res)=>{
    const {id}=req.params
    if(!id){
        return res.status(400).json("post is not present")
    }
    const [result]=await pool.query('DELETE FROM posts WHERE id=?',[id],(error)=>{
        if(error){
            console.log(error);
            return;
        }
    })
    
    return res.status(200).json({"message":"post deleted successfully"})
}


const getAllpost = async (req,res) => {

    try {
     
        const [results] = await pool.query('SELECT * FROM posts ORDER BY created_at DESC ');
        
        return res.status(200).json({results}); 
    } catch (error) {
       console.error('Error fetching posts:', error);
       }
};




export { AddPost, getAllpost,DeletePost};
