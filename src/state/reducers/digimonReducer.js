const DefaultState = {
    loading: false,
    data: [],
    errorMsg: ""
}

const digimonReducer = (state = DefaultState, action) => {
    console.log("hi digimon list reducer", action.type)
    switch (action.type) {
        case "DIGIMON_LIST_LOADING":
            console.log("DIGIMON_LIST_LOADING")
            return {
                ...state,
                loading: true,
                errorMsg: ""
            };
        case "DIGIMON_LIST_SUCCESS":
            console.log("DIGIMON_LIST_SUCCESS")
            return {
                ...state,
                loading: false,
                data: action.payload,
                errorMsg: ""
            };
        case "DIGIMON_LIST_FAILURE":
            console.log("DIGIMON_LIST_FAILURE")
            return {
                ...state,
                loading: false,
                errorMsg: "Get Digimon List Fail"
            };
        default:
            console.log("DEFAULT Digimon List")
            return state;
    }
}


export default digimonReducer;