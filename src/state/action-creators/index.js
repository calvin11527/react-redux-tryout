import axios from 'axios';

export const depositMoney = (amount) => {
    return (dispatch) => {
        dispatch({
            type: "deposit",
            payload: amount
        })
    }
}

export const withdrawMoney = (amount) => {
    return (dispatch) => {
        dispatch({
            type: "withdraw",
            payload: amount
        })
    }
}

export const GetDigimonList = () => async dispatch => {
    try {
        console.log("Hi Get digimon list");
        dispatch({
            type: "DIGIMON_LIST_LOADING"
        });
        const res = await axios.get(`https://digimon-api.vercel.app/api/digimon`)
        console.log("Hi Digimon List Response Data");
        dispatch({
            type: "DIGIMON_LIST_SUCCESS",
            payload: res.data,
        })
    }
    catch (e) {
        console.log(e);
        dispatch({
            type: "DIGIMON_LIST_FAILURE",
        })
    }
}

export const GetDigimon = (digimon) => async dispatch => {
    try {
        console.log("Hi Get digimon");
        dispatch({
            type: "DIGIMON_MULTIPLE_LOADING"
        });
        const res = await axios.get(`https://digimon-api.vercel.app/api/digimon/name/${digimon}`)
        console.log("Hi Digimon Response Data");
        dispatch({
            type: "DIGIMON_MULTIPLE_SUCCESS",
            payload: res.data,
            digimonName: digimon
        })
    }
    catch (e) {
        console.log(e);
        dispatch({
            type: "DIGIMON_MULTIPLE_FAILURE",
        })
    }
}  