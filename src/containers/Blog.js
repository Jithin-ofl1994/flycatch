import React,  { useEffect }  from "react";
import { useParams } from 'react-router-dom'
import { fetchBlogDetails, fetchComments } from "../redux/actions/postActions";
import { useDispatch, useSelector } from "react-redux";
import Blogs from "../components/Blogs";
import Comments from "../components/Comments";

const Blog = () => {
    const { id } = useParams()
    const { blogDetails, comments } = useSelector(state => state.posts)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchBlogDetails(id))
        dispatch(fetchComments(id))
    }, [dispatch,id])

    return(
        <>
            <div className="blog-container my-5 mx-5">
                <Blogs blog={blogDetails}/>
            </div>
            <div className="comment-container mx-5">
                <h5>Comments</h5>
                {comments.map((comment, index) => (
                    <Comments comment={comment} key={index}/>
                )
                )}
            </div>
        </>
    )
}

export default Blog;