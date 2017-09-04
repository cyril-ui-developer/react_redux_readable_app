import React from 'react';
import { Card } from 'semantic-ui-react';
import PostCard from './post-card';

export default function PostDetails({postDetails}){
console.log(postDetails)
  const cards = () => {
      return (
        // <PostCard key={post.title} post={post}/>
        <div>
       <h3 class="ui block header">
         Title: {postDetails.title}
        </h3>
        <p>Content: {postDetails.title} </p>
        <p>Category: {postDetails.category} </p>
        <p>Author: {postDetails.author} </p>
        <p>Date / Time: {postDetails.timestamp} </p>
         </div>
      )
  }

  return (
    <Card.Group>
      { cards() }
    </Card.Group>
  )
}