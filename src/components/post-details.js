import React from 'react';
import PostCard from './post-card';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import { Card, Button, Icon } from 'semantic-ui-react';

export default function PostDetails({postDetails, commentDetails, deletePost,votePost}){

  const cards = () => {
   
      return (
        
      <div>  
          <h3>Title: {postDetails.title} </h3>
          <p>Content: {postDetails.body} </p>
          <p>Category: {postDetails.category} </p>
          <p>Author: {postDetails.author} </p>
          <p>Date / Time:{(new Date(postDetails.timestamp)).toString()}</p>
          <Card>
            <Card.Content extra>
            <button onClick={()=>{ votePost(postDetails.id, "upVote")}}>+</button>
            <span> {postDetails.voteScore} </span>
            <button onClick={()=>{ votePost(postDetails.id, "downVote") }}>-</button>
            Comment({commentDetails.length})
            <Link to={`/post/edit/${postDetails.id}`} > <Icon name='edit outline'/> </Link>
            <Link to={`/`} ><Icon name='delete outline' onClick={() => deletePost(postDetails.id)}/> </Link>
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