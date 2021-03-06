import React from "react";
import { Card } from "semantic-ui-react";
import PostCard from "./post-card";

export default function CategoryPostList({catPosts, votePost, deletePost, allPostsComments}){

    const cards = () => {


        return catPosts.map(cat => {
            return (
    
                <PostCard 
                    key={cat.title} post={cat} 
                    votePost={votePost} 
                    deletePost={deletePost} 
                    allPostsComments={allPostsComments}
                /> 
    
            );
        });
     
    };

    return (
        <Card.Group>
            { cards() }
        </Card.Group>
    );
}