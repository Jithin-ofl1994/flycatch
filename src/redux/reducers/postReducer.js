import { FETCH_POSTS, FETCH_PRODUCT_FOR_PAGE, GET_BLOG_DETAILS,GET_BLOG_COMMENT_DETAILS} from "../actions/types";

const intialState= {
    posts:[],
    filteredPost:[],
    blogDetails:'',
    comments:[]
}

export const postReducer = (state=intialState,{type,payload}) => {
    switch (type) {
        case FETCH_POSTS:
            return {...state,posts:payload.posts}

        case FETCH_PRODUCT_FOR_PAGE:
            return {...state,filteredPost:payload.posts}
        
        case GET_BLOG_DETAILS:
            return {...state,blogDetails:payload}

        case GET_BLOG_COMMENT_DETAILS:
            return {...state,comments:payload}  
             
        default:
            return state;
    }
}