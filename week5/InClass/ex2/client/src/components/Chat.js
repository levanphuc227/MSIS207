import React, {useEffect, useState} from 'react'
import { useStateValue } from './StateProvider'
import {Avatar, IconButton } from '@mui/material'
import {AttachFile, MoreVert, SearchOutlined} from '@mui/icons-material'
import MicIcon from '@mui/icons-material/Mic';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

import axios from './axios'

const Chat = ({messages}) => {
    const [seed, setSeed] = useState("")
    const [input, setInput] = useState("")
    const [{user}, dispatch] = useStateValue()

    const sendMessage = async(e) => {
        e.preventDefault()
        await axios.post('/messages/new', {
            message: input,
            name: user.displayName,
            timestamp: new Date().toUTCString(),
            received: true
        })
        setInput("")
    }

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))
    }, [])

  return (
    <div className='chat'>
        <div className='chat_header'>
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
            
            <div className='chat_headerInfo'>
                <h3>Dev Help</h3>
                <p>Last seen at {""}
                    {messages[messages.length -1]?.timestamp}
                </p>
            </div>
            <div className='chat_headerRight'>
                <IconButton>
                    <SearchOutlined/>
                </IconButton>
                <IconButton>
                    <AttachFile/>
                </IconButton>
                <IconButton>
                    <MoreVert/>
                </IconButton>
            </div>
        </div>
        <div className='chat_body'>
            {messages.map(message => (
                <p className={`chat_message ${message.name === user.displayName}`}>
                    <div className='chat_name'>{message.name}</div>

                    {message.message}
                    <div className='chat_timestemp'>
                        {message.timestamp}
                    </div>
                </p>
            ))}
        </div>
        <div className='chat_footer'>
            <EmojiEmotionsIcon/>
            <form>
                <input
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    placeholder="Type a message"
                    type="text"
                />
                <button onClick={sendMessage} type="submit">Send a message</button>
            </form>
            <MicIcon/>
        </div>
    </div>
  )
}

export default Chat