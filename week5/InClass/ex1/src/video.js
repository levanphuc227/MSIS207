import  React ,{useRef,useState}  from 'react';
import './video.css'
import VideoFooter from './VideoFooter'
import VideoSidebar from './VideoSidebar'

const Video = ({url,channel,decription,song,likes,shares,messages})=>{
    const [playing,setPlaying]=useState(false);
    const videoRef=useRef(null);
    const handleVideoPress=()=>{
        if(playing){
            videoRef.current.pause();
            setPlaying(false);
        }else{
            videoRef.current.play();
            setPlaying(true);
        }
    }
    return (
        <div className='video'>
            <video
            src={url}
            className='video__player'
            loop
            ref={videoRef}
            onClick={handleVideoPress}
            >
               <VideoFooter channel={channel} description={decription} song={song} />
               <VideoSidebar likes={likes} shares={shares} messages={messages}/>
            </video>
        </div>
    )
}
export default Video;