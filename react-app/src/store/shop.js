const LOAD_SHOPS = 'shops/LOAD_SHOPS'

const loadShops = (shops) => ({
    type: LOAD_SHOPS,
    shops
})



export const getShops = () => async (dispatch) =>{
    const res = await fetch(`/api/shops/`);
    const shops = await res.json();
    dispatch(loadShops(shops))
    return shops
}

const initialState = {}

const reviewReducer = (state = initialState, action)=>{
    switch(action.type){
        case LOAD_SHOPS:
            return {
                ...state,
                ...action.shops
            }
        default:
            return state;
    }

}

export default reviewReducer