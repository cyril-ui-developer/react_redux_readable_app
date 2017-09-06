import React from 'react';
import { Card } from 'semantic-ui-react';
//import PostCard from './post-card';
import Moment from 'react-moment';


export default function CommentDetails({commentDetails}){


  const cards = () => {

      return (
        <div>
          <h3> Comments </h3> <hr/> <hr/>
         {commentDetails.map(comment => {
          return (
            <div>  
               <p>Content:{comment.body}</p>
               <p>Vote:{comment.voteScore}</p>
               <p>Date/Time: {comment.timestamp}</p>
               <p> Author: {comment.author}</p>
               <hr/>
              </div>

           )
           } )
    
    }
         </div>
      )
  }

  return (
    <Card.Group>
      { cards() }
    </Card.Group>
  )
}