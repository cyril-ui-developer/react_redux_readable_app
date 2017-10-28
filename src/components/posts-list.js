import React from "react";
import { Card } from "semantic-ui-react";
import PostCard from "./post-card";

export default function PostList({posts, votePost, deletePost}){

    const cards = () => {
        return posts.map(post => {
            return (
                <PostCard 
                    key={post.id} post={post} 
                    votePost={votePost} 
                    deletePost={deletePost}
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
