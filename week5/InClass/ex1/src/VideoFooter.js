import React from 'react';
import './VideoFooter.css';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import Ticker from 'react-ticker';

const VideoFooter = ({ channel, description, song }) => {
    return (
        <div className='videoFooter'>
        <div className='videoFooter__text' >
            <h3>@{channel}</h3>
            <p>{description}</p>
        </div>
        <div className='videoFooter__text'>
            <MusicNoteIcon className='videoFooter__icon'/>
            <Ticker mode='smooth'>
                {({index})=>{
                    <>
                    <p>{song}</p>
                    </>
                }}
            </Ticker>
        </div>
        <img className='videoFooter__record' src='' alt='video footer'/>
    </div>
    )
    
}
export default VideoFooter;