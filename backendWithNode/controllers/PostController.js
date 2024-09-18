import pool from "../index.js";

const AddPost = async (req, res) => {

    const { user_id, image, text } = req.body;
    
    try {
        // Query to insert a new post
        const query = `INSERT INTO post (user_id, image, text) VALUES (?, ?, ?)`;
        const values = [user_id, image, text];

      
        const [results] = await pool.query(query, values);

        // Check if the insertion was successful
        if (results.affectedRows > 0) {
           
            return res.status(201).json({ message: "Post added successfully", postId: results.insertId });
        } else {
           
            return res.status(500).json({ message: "Failed to add post" });
        }
    } catch (error) {
        
        console.error(error);
        return res.status(500).json({ message: "An error occurred while adding the post" });
    }
}

const DeletePost=async(req,res)=>{
    const {post_id}=req.body
    if(!post_id){
        return res.status(400).json("post is not present")
    }
    const [result]=await pool.query('DELETE FROM post WHERE id=?',[post_id],(error)=>{
        if(error){
            console.log(error);
            return;
        }
    })
    
    return res.status(200).json("post deleted")
}


const getAllpost = async (req,res) => {

    try {
     
        const [results] = await pool.query('SELECT * FROM post ORDER BY created_at DESC ');
        
        return res.status(200).json({results}); 
    } catch (error) {
       console.error('Error fetching posts:', error);
       }
};




export { AddPost, getAllpost,DeletePost};
