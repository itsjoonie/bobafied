const LOAD_REVIEWS = 'reviews/LOAD_REVIEWS';
const GET_REVIEW = 'reviews/GET_REVIEW';
const ADD_REVIEW = 'reviews/ADD_REVIEW';
const UPDATE_REVIEW = 'reviews/UPDATE_REVIEW';
const DELETE_REVIEW = 'reviews/DELETE_REVIEW';


const loadReviews = (reviews) =>({
    type: LOAD_REVIEWS,
    reviews
})

const oneReview = (review) => ({
    type: GET_REVIEW,
    review
})

const addReview = (review) => ({
    type: ADD_REVIEW,
    review
})

const updateReview = (review) =>({
    type: UPDATE_REVIEW,
    review
})

const deleteReview = (reviewId) =>({
    type: DELETE_REVIEW,
    reviewId
})



export const getReviews = () => async (dispatch) => {
    const res = await fetch(`/api/reviews/`);
    const reviews = await res.json();
    dispatch(loadReviews(reviews))
    return reviews
}

export const getReview = (id) => async (dispatch) => {
    const res = await fetch(`/api/reviews/${id}`)
    if(!res.ok) throw res;
    const review = await res.json();
    dispatch(oneReview(review))
}

export const createReviews = (user_id, boba_id, shop_id, rating, review, picture) => async (dispatch) => {
    const res = await fetch(`/api/reviews/add`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user_id, boba_id, shop_id, rating, review, picture
        })

    });

    const data = await res.json();
    if(res.ok){
        dispatch(addReview(data))
        return data
    }
    else {
        return data
    }

}

export const editReview = (user_id, boba_id, shop_id, rating, review, picture, id) => async (dispatch) => {
    const res = await fetch(`/api/reviews/update/${id}`,{
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            user_id,
            boba_id, 
            shop_id, 
            rating, 
            review, 
            picture
        })
    });
    const data = await res.json();
    if(res.ok){
        dispatch(updateReview(data))
    }
    else{
        return data
    }
}

export const removeReview = (id) => async (dispatch) => {
    const res = await fetch(`/api/reviews/delete/${id}`, {
        method: 'DELETE'
    })

    dispatch(deleteReview(id))
}

const initialState = {}
const reviewReducer = (state = initialState, action) => {
    let newState;

    switch(action.type){
        case LOAD_REVIEWS:
            return {
                ...state,
                ...action.reviews
            }
        case ADD_REVIEW:
            newState = {...state};
            newState.reviews[action.review.id] = action.review
            return newState;
        case GET_REVIEW:
            return {
                ...state,
                [action.review.id]: action.review
            }
        case UPDATE_REVIEW:
            newState = {...state};
            newState['reviews'].forEach ((review, i) => {
                if(review.id == action.review.id){
                    newState['reviews'][i] = action.review
                }
            })
            return newState
        case DELETE_REVIEW:
            newState ={...state} 
            newState['reviews'].forEach ((review, i) => {
                if(review.id == action.reviewId){
                    delete newState['reviews'][i]
                }
            })
            return newState
        default:
            return state
    }
}

export default reviewReducer