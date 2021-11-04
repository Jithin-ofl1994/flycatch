import React from "react";
import { Card } from "react-bootstrap";
import { Link } from 'react-router-dom';

const PostCard = (props) => {
    const {post} = props;
    return(
        <Card>
            <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>
                   {post.body}
                </Card.Text>
                <Link to={`/posts/${post.id}`}>View Detail</Link>
            </Card.Body>
        </Card>
    )
}

export default PostCard;