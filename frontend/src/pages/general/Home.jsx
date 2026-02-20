import React, { useEffect, useState } from 'react'
import axios from 'axios';
import '../../styles/reels.css'
import ReelFeed from '../../components/ReelFeed'

const Home = () => {
    const [ videos, setVideos ] = useState([])
    // Autoplay behavior is handled inside ReelFeed

    useEffect(() => {
        axios.get("http://localhost:3000/api/foods", { withCredentials: true })
            .then(response => {

                console.log(response.data);

                setVideos(response.data.foodItems)
            })
            .catch(() => { /* noop: optionally handle error */ })
    }, [])

    // Using local refs within ReelFeed; keeping map here for dependency parity if needed

    async function likeVideo(item) {
        try {
            const response = await axios.post("http://localhost:3000/api/foods/like", { foodId: item._id }, {withCredentials: true})

            if(response.data.like){
                console.log("Video liked");
                setVideos((prev) => prev.map((v) => v._id === item._id ? { ...v, likeCount: (v.likeCount || 0) + 1 } : v))
            }else{
                console.log("Video unliked");
                setVideos((prev) => prev.map((v) => v._id === item._id ? { ...v, likeCount: Math.max(0, (v.likeCount || 1) - 1) } : v))
            }
        } catch (error) {
            console.error("Like error:", error.response?.data || error.message);
            if (error.response?.status === 401) {
                alert("Please login first to like videos");
            }
        }
    }

    async function saveVideo(item) {
        try {
            const response = await axios.post("http://localhost:3000/api/foods/save", { foodId: item._id }, { withCredentials: true })
            
            if(response.data.save){
                setVideos((prev) => prev.map((v) => v._id === item._id ? { ...v, savesCount: (v.savesCount || 0) + 1 } : v))
            }else{
                setVideos((prev) => prev.map((v) => v._id === item._id ? { ...v, savesCount: Math.max(0, (v.savesCount || 1) - 1) } : v))
            }
        } catch (error) {
            console.error("Save error:", error.response?.data || error.message);
            if (error.response?.status === 401) {
                alert("Please login first to save videos");
            }
        }
    }

    return (
        <ReelFeed
            items={videos}
            onLike={likeVideo}
            onSave={saveVideo}
            emptyMessage="No videos available."
        />
    )
}

export default Home