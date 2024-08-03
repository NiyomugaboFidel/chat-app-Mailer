// import Chat from "../models/chat.model.js";

import Chat from "../models/chat.model.js";
const  getAllChat = async(req, res)=>{
    try {
       const allChats = await Chat.find();
       res.status(200).json({allChats});
    } catch (error) {
       console.error("Internal server error:", error);
       res
         .status(500)
         .json({ message: "Internal server error. Please try again later." });
     }
    }
   
    export {
       getAllChat
    }

// export const createGroupChat = async(req, res)=>{
//     const {userId} = req.body
//  try {
//     const user = await User.findById(userId);
//     const allUsers = await User.find().select('-password');
//     const allChat =  await allUsers.map(async(user, index)=>{
//       const userChat = await Chat.create({
//         participants:[userId, user.id],
//         chatName:`${user.username} Ⓜ️ ${user.username}`
//       })
//       await userChat.save();
//       return userChat;
//     })
    
//   res.status(200).json(allChat);
 
//  } catch (error) {
//     console.error("Internal server error:", error);
//     res.status(500).json({ message: "Internal server error. Please try again later." });
    
//  }
// }

// export {
//     createGroupChat
// }

