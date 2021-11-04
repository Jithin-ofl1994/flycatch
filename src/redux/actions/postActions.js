import api from '../api'
import { FETCH_POSTS, FETCH_PRODUCT_FOR_PAGE, GET_BLOG_DETAILS, GET_BLOG_COMMENT_DETAILS } from './types';

export const fetchData = () => async(dispatch) => {
    const response = await api.get('/posts')
    localStorage.setItem('posts',JSON.stringify(response.data));
    dispatch({type:FETCH_POSTS, payload:{posts:response.data}})
};

export const feetchDataForEachPage = (pageNumber) => async(dispatch) => {
    let fiteredPost =[];
    const posts = JSON.parse(localStorage.getItem('posts'));
    const offset = parseInt((pageNumber -1) * process.env.REACT_APP_PAGINATION_COUNT)
    const count = parseInt((pageNumber) * process.env.REACT_APP_PAGINATION_COUNT)

    if(posts){
        fiteredPost =  posts.slice(offset,count)
    }

    dispatch({type:FETCH_PRODUCT_FOR_PAGE, payload:{posts:fiteredPost}})
};

export const fetchBlogDetails = (blogId) => async(dispatch) =>{
    const response = await api.get(`https://jsonplaceholder.typicode.com/posts/${blogId}`)
    .then(function (response) {
        console.log(response)
        return response 
    })
    
    dispatch({type:GET_BLOG_DETAILS, payload:response.data});
}

export const fetchComments = (blogId) => async(dispatch) =>{
    const response = await api.get(`https://jsonplaceholder.typicode.com/posts/${blogId}/comments`)
    .then(function (response) {
        console.log(response)
        return response 
    })
    
    dispatch({type:GET_BLOG_COMMENT_DETAILS, payload:response.data});
}