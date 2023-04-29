import ChatGPTConversation from './chatgpt-conversation'
import { useState} from 'react'
const ChatGPT = () => {
  const [show , setShow] = useState(false)
  const handleShow = () => {
    setShow(!show)
  }
    return (
       <div className="relative ">
        <div onClick={handleShow} className="fixed  right-[40px] bottom-[40px] cursor-pointer">
          <img className="w-[60px] h-[60px] rounded-full" src="https://cdn.technologyadvice.com/wp-content/uploads/2018/02/friendly-chatbot.jpg"/>
        </div>
      {show &&   <ChatGPTConversation/>}
       </div>
    )
}
export default ChatGPT