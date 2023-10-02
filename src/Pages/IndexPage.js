import React, { useEffect, useState } from 'react'
import Post from '../Post'

function IndexPage() {
  const [posts, setPost] = useState([]);
  useEffect(() => {
    fetch('https://gravityunveiledapi.onrender.com/post').then(response => {
      response.json().then(posts => {
        setPost(posts);
      })
    })
  }, [])

  return (
    <>
      {
        posts.length > 0 && posts.map((post, index) => {
          return <Post key={index} {...post} />
        })
      }
    </>

  )
}

export default IndexPage