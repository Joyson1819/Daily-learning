import React from 'react'
import { useState } from 'react'
import App from './App'
const LikeTask = () => {
    const [likes, setLikes] = useState(0);
    const counter = () => {
        setLikes(likes + 1);
    }
  return (
    <div>
      <h2>Likes: {likes}</h2>
      <button onClick={counter}>Like</button>
    </div>
  )
}

export default LikeTask
