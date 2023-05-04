 import {useState ,useEffect ,  useRef} from 'react'
 import  axios from 'axios';
import clsx from 'clsx'
import TypingAnimation from './typing-animation'
const ChatGPTConversation = () => {
    const [inputValue , setInputValue] = useState<string>('')
    const [chatLog , setChatLog] = useState<any>([])
    const [loading , setLoading] = useState<boolean>(false)
    const bottomRef = useRef<any>(null);

   const chat = () => {
    let data = JSON.stringify({
        "model": "gpt-3.5-turbo",
        "messages": [
          {
            "role": "user",
            "content": `${inputValue}`
          }
        ],
      });
      console.log(chatLog , 'chatLog')
      setChatLog((prev:any) => [...prev , {
        type:'user',
        message:inputValue
      } ])
      setInputValue("")
      setLoading(true)
      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://api.openai.com/v1/chat/completions',
        headers: { 
          'Content-Type': 'application/json', 
          'Authorization': `Bearer ` + process.env.NEXT_PUBLIC_CHAT_GPT_KEY
        },
        data : data
      };
      
      axios.request(config)
      .then((response:any) => {
        console.log(JSON.stringify(response.data.choices[0].message.content) ,'chatgpt');
        // setChatLog((prev:any) => [...prev , {
        // type:'bot',
        //    message:  JSON.stringify(response.data.choices[0].message.content)
        // }])

        setChatLog((prev:any) => [...prev , {
            type:'bot',
            message:  JSON.stringify(response.data.choices[0].message.content)
        } ])
        setLoading(false)

      })

      .catch((error:any) => {
        console.log(chatLog , 'chatLog3')

        console.log(error);
      });

   }

   useEffect(() => {
    // 👇️ scroll to bottom every time messages change
    console.log('redd')
    bottomRef.current?.scrollIntoView();
  }, [chatLog]);
    return (
        <div className="fixed z-50 md:right-[40px] right-0  bottom-[160px] ">

           <div className=" w-[380px]  h-[500px] ">
               <div className="bg-[#097deb] text-left h-[40px] text-[#f7eded] font-normal px-[10px] leading-[40px] rounded-t-lg">CHATBOT [Trả lời tin nhắn tự động]</div>
               <div className="bg-[#f7eded] h-[450px]   px-[10px] flex flex-col justify-between  pt-[15px]">
                <div  className="overflow-auto">
      {chatLog.map((value:any , index:number) => (
                            <div key={index} className={clsx("my-[10px] flex  justify-start" , {
                             'justify-end' : value?.type == 'user'
                            })}>
                             <span className={clsx('bg-[#fff] rounded-lg px-[10px]  ' , {
                             'bg-blue-500 text-[#fff] ' : value?.type == 'user'
                            })}>{value.message}</span>
                        </div>
      ))}
      {loading && <TypingAnimation/>}
      <div ref={bottomRef} />

                </div>
               <div/>
               </div>
               <div  className="w-full flex items-center mb-[10px] bg-[#f7eded] rounded-b-lg py-[10px] px-[10px]">
                    <input value={inputValue} onChange={e=> setInputValue(e.target.value)} className="w-full mr-[10px] outline-none border-2 h-[40px] rounded-full px-[5px] placeholder-gray-500 placeholder-opacity-50 placeholder:text[12px] placeholder:italic " type="text" placeholder="Chúng tôi có thể giúp gì cho bạn ?"/>
                    <button onClick={chat} className="h-[40px] w-[40px] bg-[#5d5cde] rounded-full p-[5px]">
                    <svg fill="#fff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4 13h14.09l-6.79 6.79a.996.996 0 1 0 1.41 1.41l8.5-8.5c.06-.06.09-.13.13-.2.03-.04.06-.08.08-.13a.91.91 0 0 0 .08-.37c0-.03-.01-.05-.01-.07-.01-.1-.02-.21-.06-.31a.955.955 0 0 0-.22-.33L12.72 2.8c-.2-.2-.45-.29-.71-.29-.26 0-.51.1-.71.29a.996.996 0 0 0 0 1.41L18.08 11H4c-.55 0-1 .45-1 1s.45 1 1 1Z"></path></svg>
                    </button>
                </div>
           </div>



        </div>
    )
}
export default ChatGPTConversation