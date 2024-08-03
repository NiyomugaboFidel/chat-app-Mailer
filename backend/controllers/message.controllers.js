import Chat from "../models/chat.model.js";
import Message from "../models/message.model.js";

const sendMessage = async (req, res) => {
  try {
    const { content } = req.body;
    const chatId = req.params.id;
    const senderId = req.user._id;
    // console.log(content, chatId, `userId:${sederId}`);
    if (!chatId) {
      res
        .status(400)
        .json({ message: "Chat undifined. Please try again later." });
    }
    let chat = await Chat.findById(chatId);

    if (!chat) {
      return res
        .status(400)
        .json({ message: "Invalid credentials.Please try Login again" });
    }

    const newMessage = new Message({
      chatId,
      content,
      senderId,
    });

    if (newMessage) {
      chat.messageId.push(newMessage._id);
      await Promise.all([newMessage.save(), chat.save()]);
    }

    res.status(201).json(newMessage);
  } catch (error) {
    console.error("Internal server error:", error);
    res
      .status(500)
      .json({ message: "Internal server error. Please try again later." });
  }
};


const getMessages = async(req, res)=>{
    try {
    const chatId = req.params.id
    if (!chatId) {
        res
          .status(400)
          .json({ message: "Chat undifined. Please try again later." });
      }
      const chat = await Chat.findById(chatId).populate('messageId');
      if (!chat) return res.status(200).json([]);

      const messages = chat.messageId;

      res.status(200).json(messages);
        
    } catch (error) {
        console.error("Internal server error:", error);
        res
          .status(500)
          .json({ message: "Internal server error. Please try again later." });
    }
} 

export {
     sendMessage,
     getMessages,

};
