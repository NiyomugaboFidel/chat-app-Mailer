import User from "../models/user.model.js";

const  getAllUser = async(req, res)=>{
 try {
    const allUsers = await User.find().select('-password');
    res.status(200).json({allUsers});
 } catch (error) {
    console.error("Internal server error:", error);
    res
      .status(500)
      .json({ message: "Internal server error. Please try again later." });
  }
 }

 export {
    getAllUser
 }