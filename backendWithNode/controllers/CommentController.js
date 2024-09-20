import pool from "../index.js"


const AddComment=async(req,res)=>{
    const {user_id,post_id,text}=req.body
    try {
        const query=(`INSERT INTO comment(user_id,post_id,text) values(?,?,?)`)
        const values=[
            user_id,
            post_id,
            text
        ]
        const [results]=await pool.query(query,values,(error)=>{
            if(error){
                console.log(error);
            }
        })
        if(results.affectedRows>0){
            return res.status(200).json({"message":"Comment Added","Comment":text})
        }
    } catch (error) {
        console.log(error);
    }
}

const getAllComment=async(req,res)=>{
    const {id}=req.params
   
    try {
        const [results]=await pool.query(`SELECT * FROM comment WHERE post_id=? ORDER BY created_at DESC `,[id])
        return res.status(200).json({"message":"comments loaded","comments":results})
    } catch (error) {
        console.log(error);
    }
}

const deleteComment=async(req,res)=>{
    const {id}=req.params
    console.log(id);
    try {
        const results=await pool.query(`DELETE FROM comment WHERE id=?`,[id])
        if(results){
            
            return res.status(200).json({"message":"Comment deleted successfully"})
        }
    } catch (error) {
        console.log(error);
    }
}

export {AddComment,getAllComment,deleteComment}