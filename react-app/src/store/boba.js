// action verbs
const LOAD_BOBAS = 'bobas/LOAD_BOBAS';
const ADD_BOBA = 'bobas/ADD_BOBA';
const GET_BOBA = 'bobas/GET_BOBA';
const UPDATE_BOBA = 'bobas/UPDATE_BOBA';
const DELETE_BOBA = 'bobas/DELETE_BOBA';


// action creators 
const loadBobas = (boba) => ({
    type: LOAD_BOBAS, //switch cases for reducer
    boba 
});

const addBoba = (boba) => ({
    type: ADD_BOBA,
    boba
});

const getBoba = (boba) => ({
    type: GET_BOBA,
    boba
})

const updateBoba = (boba) => ({
    type: UPDATE_BOBA,
    boba
});

const deleteBoba = (bobaId) => ({
    type: DELETE_BOBA,
    bobaId
})


// thunk

export const getBobas = () => async (dispatch) => {
    const res = await fetch(`/api/bobas/`);
    const bobas = await res.json();
    dispatch(loadBobas(bobas)); // the info turns into the action creater then it goes to reducer
    return bobas //this shows up in front end
}

export const getOneBoba = (id) => async (dispatch) =>{
    const res = await fetch(`/api/bobas/${id}`)

    if(!res.ok) throw res;
    const boba = await res.json
    dispatch(getBoba(boba))
    // return boba
}

export const createBoba = (user_id, name, flavor, tea_type, drink_type, description, icon) => async (dispatch) => {
    const res = await fetch(`/api/bobas/add`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            user_id, 
            name, 
            flavor, 
            tea_type, 
            drink_type, 
            description, 
            icon
        })
    });
    const data = await res.json();
    if(res.ok){
        dispatch(addBoba(data));
        return data
    }
    else {
        return data // return errors 
    }
}

export const updateOneBoba = (user_id, name, flavor, tea_type, drink_type, description, icon, id) => async (dispatch) =>{
    const res = await fetch(`/api/bobas/${id}/update`, { 
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            user_id,
            name, 
            flavor, 
            tea_type, 
            drink_type, 
            description, 
            icon
        })
    });
    const data = await res.json();
    if(res.ok){
        dispatch(updateBoba(data))
        return data
    }
    else{
        return data
    }


}

export const removeBoba  = (id) => async (dispatch) =>{
    const res = await fetch(`/api/bobas/delete/${id}`, {
        method:'DELETE',
    });

    dispatch(deleteBoba(id))
}


// reducer

const initialState ={};

const bobaReducer =(state = initialState, action) => {
    let newState;
    switch(action.type){
        case LOAD_BOBAS:
           return {
               ...state,
               ...action.boba} //action is the action creater. this is how u key into it.  


        case ADD_BOBA:
            newState = {...state};
            newState.bobas[action.boba.id] = action.boba
            return newState
        
        case GET_BOBA:
            return {
                ...state,
                [action.boba.id]: action.boba
            }       
        case UPDATE_BOBA:
            newState = {...state};
            newState['bobas'].forEach((boba, i) => {
                if(boba.id == action.boba.id){
                    newState['bobas'][i] = action.boba
                }
            })
            return newState
        case DELETE_BOBA:
            newState = {...state}
            newState['bobas'].forEach( (boba, i) => {
               if (boba.id == action.bobaId){
                   delete newState['bobas'][i]
               }
            });
            return newState

        default: 
            return state;
        
    }
}

export default bobaReducer;