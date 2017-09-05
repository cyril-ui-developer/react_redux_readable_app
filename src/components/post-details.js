import React from 'react';
import { Card } from 'semantic-ui-react';
import PostCard from './post-card';
import Moment from 'react-moment';

export default function PostDetails({postDetails}){

const postDate = (new Date(postDetails.timestamp));
console.log(postDate)
  const cards = () => {
      return (
        // <PostCard key={post.title} post={post}/>
        <div>
       <h3 class="ui block header">
         Title: {postDetails.title}
        </h3>
       <button onClick={()=>{postDetails.voteScore= postDetails.voteScore + 1} }>+</button>
        <span> {postDetails.voteScore} </span>
        <button onClick={()=>{postDetails.voteScore= postDetails.voteScore - 1} }>-</button>
        <span> Comment (20)</span>
        <p>Content: {postDetails.title} </p>
        <p>Category: {postDetails.category} </p>
        <p>Author: {postDetails.author} </p>
        <p>Date / Time: <Moment> {postDate} </Moment></p>
         </div>
      )
  }

  return (
    <Card.Group>
      { cards() }
    </Card.Group>
  )
}