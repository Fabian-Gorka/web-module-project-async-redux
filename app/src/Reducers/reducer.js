import {FETCH_RACE_SUCCESS} from "../Actions/actions"


const initialState = {
    Races: []
}

export const reducer = (state = initialState,action) => {
    switch (action.type){
        case FETCH_RACE_SUCCESS:
            return{
                ...state,
                Races: action.payload
            };
        default:
            return state;
    }
};
