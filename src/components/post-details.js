import React from "react";
import { Link } from "react-router-dom";
import { Card, Icon } from "semantic-ui-react";

export default function PostDetails({postDetails, commentDetails, deletePost,votePost}){

    const cards = () => {
   
        return (
        
            <div>  
                <h3>Title: {postDetails.title} </h3>
                <p className="text-wrap"><strong>Content:</strong> {postDetails.body} </p>
                <p><strong>Category:</strong> {postDetails.category} </p>
                <p><strong>Author: </strong>{postDetails.author} </p>
                <p><strong>Date / Time:</strong>{(new Date(postDetails.timestamp)).toString()}</p>
                <Card>
                    <Card.Content extra>
                        <button onClick={()=>{ votePost(postDetails.id, "upVote");}}>+</button>
                        <span> {postDetails.voteScore} </span>
                        <button onClick={()=>{ votePost(postDetails.id, "downVote"); }}>-</button>
                            Comment({commentDetails.length})
                        <Link to={`/post/edit/${postDetails.id}`}> <Icon name='edit'/> </Link>
                        <Link to={"/"} ><Icon name='delete' onClick={() => deletePost(postDetails.id)}/> </Link>
                    </Card.Content>
                </Card>
            </div>
        );
    };

    return (
        <Card.Group>
            { cards() }
        </Card.Group>
    );
}