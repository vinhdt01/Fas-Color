import ChatGPTConversation from './chatgpt-conversation'
const ChatGPT = () => {
    return (
       <div className="relative ">
        <div className="fixed  right-[40px] bottom-[40px]">
          <img className="w-[60px] h-[60px] rounded-full" src="https://cdn.technologyadvice.com/wp-content/uploads/2018/02/friendly-chatbot.jpg"/>
        </div>
        <ChatGPTConversation/>
       </div>
    )
}
export default ChatGPT