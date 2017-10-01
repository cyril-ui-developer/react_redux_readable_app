import React from 'react';
import { Card, Button, Icon } from 'semantic-ui-react';
//import PostCard from './post-card';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import { Component} from 'react';

class CommentDetails extends Component {
  //export default function CommentDetails({commentDetails}){

  handleSelectChange = (comment, e) => {
    e.preventDefault()
    
   if (this.props.onBookShelf){
       this.props.onBookShelf(comment);
    }
}
 render() {

  const cards = () => {

      return (
        <div>
          <h3> Comments </h3> <hr/> <hr/>
         {this.props.commentDetails.map(comment => {
          return (
            <div>  
               <p>Content:{comment.body}</p>
               <p>Vote:{comment.voteScore}</p>
               <p>Date/Time: {(new Date(comment.timestamp)).toString()}</p>
               <p> Author: {comment.author}</p>
              <Card>
              <Card.Content extra>
              <button onClick={()=>{comment.voteScore= comment.voteScore + 1} }>+</button>
              <span> {comment.voteScore} </span>
              <button onClick={()=>{comment.voteScore= comment.voteScore - 1} }>-</button>
              <Link to={`/comments/${comment.id}`} onChange={this.handleSelectChange.bind(this, comment)}> <Icon name='edit outline'/> </Link>
              <Link to={``} ><Icon name='delete outline'/> </Link>
              </Card.Content>
              </Card>
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
}

export default CommentDetails;