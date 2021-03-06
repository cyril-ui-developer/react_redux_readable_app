import React from 'react';
import { Card, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { Component} from 'react';

class CommentDetails extends Component {

  handleSelectChange = (comment, e) => {
    e.preventDefault()
    
   if (this.props.onComment){
       this.props.onComment(comment);
    }
  }
 render() {

  const cards = () => {

      return (
        <div>
         {this.props.commentDetails.map(comment => {
          return (
            <div key={comment.id}> 
               <p className="text-wrap" ><strong>Content:</strong>{comment.body}</p>
               <p><strong>Date/Time:</strong> {(new Date(comment.timestamp)).toString()}</p>
               <p><strong> Author: </strong>{comment.author}</p>
              <Card>
              <Card.Content extra>
              <button onClick={()=>{ this.props.voteComment(comment.id, "upVote")}}>+</button>
              <span> {comment.voteScore} </span>
              <button onClick={()=>{ this.props.voteComment(comment.id, "downVote") }}>-</button>
              <Link to={`comments/${comment.id}`} onClick={(comment) => this.handleSelectChange}> <Icon name='edit'/> </Link>
              <Link to={`${this.props.post.id}`} onClick={() => this.props.deleteComment(comment.id)}><Icon name='delete'/> </Link>
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