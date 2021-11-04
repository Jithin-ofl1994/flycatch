import React from "react"
import { Card } from "react-bootstrap";

const Comments = (props) => {
    const {comment} = props;
    
    return(
        <Card>
            <Card.Body>
                <Card.Title>{comment.name} {comment.email}</Card.Title>
                <Card.Text>
                    {comment.body}
                </Card.Text>

            </Card.Body>
        </Card>
    )

}

export default Comments;