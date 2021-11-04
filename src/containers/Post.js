import React, { useEffect } from "react";
import { fetchData, feetchDataForEachPage } from "../redux/actions/postActions";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import PostCard from "../components/PostCard";
import Pagination from "../components/Pagination";
import { useState } from "react";

const Post = () =>{
    const [currPage, setCurrPage] = useState(1);
    const {posts, filteredPost} = useSelector(state => state.posts)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchData())
    },[dispatch])

    useEffect(() => {
        dispatch(feetchDataForEachPage(currPage))
    },[dispatch,currPage])

    const afterPageClicked = (page_number) => {
        setCurrPage(page_number);
    };

    return(
        
        <>
            <div className="post-container">
                {filteredPost.map((post, index) =>{
                    return(<PostCard post={post} key={post.id}/>)
                })}
            </div>
            <div className="pagination-container">
                <Pagination 
                    totalRecords={posts.length} 
                    currentPage={currPage}
                    pageClicked={(ele) => {
                        afterPageClicked(ele);
                    }}
                />
            </div>
        </>
    )
}

export default Post;