import React from "react"
import { Card } from "react-bootstrap";



const Blogs = (props) => {
    const {blog} = props;
    
    return(
        <Card>
            <Card.Body>
                <Card.Title>{blog.title}</Card.Title>
                <Card.Text>
                    {blog.body}
                </Card.Text>

            </Card.Body>
        </Card>
    )

}

export default Blogs;