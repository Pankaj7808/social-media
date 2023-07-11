import React from 'react'
import Post from './Post'
import CreatePost from './CreatePost'
import PostData from '../../../../Data/PostData.js'

function PostSide() {
  return (
    <>
        <CreatePost/>
        {
          PostData.map((data)=>{
            return (
              <Post key={data.id} postData={data}/>
            )
          })
        }
    </>
  )
}

export default PostSide