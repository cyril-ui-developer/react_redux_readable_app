import React from 'react';
import PostCard from './post-card';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import { Card, Button, Icon } from 'semantic-ui-react';

export default function PostDetails({postDetails, commentDetails}){


console.log(commentDetails)
//const postDate = (new Date(postDetails.timestamp));
//console.log(postDate)
  const cards = () => {
      return (
        // <PostCard key={post.title} post={post}/>
      <div>
        <h3>
          Title: {postDetails.title}
          </h3>
          <p>Content: {postDetails.title} </p>
          <p>Category: {postDetails.category} </p>
          <p>Author: {postDetails.author} </p>
          <p>Date / Time: <Moment> {postDetails.timestamp} </Moment></p>
          <Card>
            <Card.Content extra>
            <button onClick={()=>{postDetails.voteScore= postDetails.voteScore + 1} }>+</button>
            <span> {postDetails.voteScore} </span>
            <button onClick={()=>{postDetails.voteScore= postDetails.voteScore - 1} }>-</button>
            <Icon name='outline'/>Comment({commentDetails.length})
            <Link to={`/posts/edit/${postDetails.id}`}> <Icon name='edit outline'/> </Link>
            <Link to={``} ><Icon name='delete outline'/> </Link>
            </Card.Content>
          </Card>
        </div>
      )
  }

  return (
    <Card.Group>
      { cards() }
    </Card.Group>
  )
}