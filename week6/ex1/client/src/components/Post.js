import './Post.css'
import React from 'react';
import Avatar from '@mui/material/Avatar';


const Post =({username,caption,imageUrl})=>{
    return (
        <div className='post'>
            <div className='post_header'>
                <Avatar 
                className='post_avatar'
                alt={username}
                src='/static/image/avatar/1.jpg'
                />
            <h3>{username}</h3>
            </div>
            <img className='post_image' src={imageUrl} alt='react'/>
            <h4 className='post_text'><strong>{username}</strong> {caption}</h4>
        </div>
    )
}
export default Post;