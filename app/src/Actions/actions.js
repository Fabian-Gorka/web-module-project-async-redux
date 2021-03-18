import axios from 'axios'



export const FETCH_RACE_SUCCESS =  "FETCH_RACE_SUCCESS";
export const fetchData = () => {
    return (dispatch)=>{
        axios
        .get('https://www.dnd5eapi.co/api/Races/')
        .then((res) => {
            dispatch({type: FETCH_RACE_SUCCESS, payload: res.data.results})
        })
        .catch((err) => console.log(err))
    }
}