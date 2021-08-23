const DefaultState = {
    loading: false,
    data: {},
    errorMsg: ""
}


const digimonMultipleReducer = (state = DefaultState, action) => {
    console.log("hi digimon multiple reducer", action.type)
    switch (action.type) {
        case "DIGIMON_MULTIPLE_LOADING":
            console.log("DIGIMON_MULTIPLE_LOADING")
            return {
                ...state,
                loading: true,
                errorMsg: ""
            };
        case "DIGIMON_MULTIPLE_SUCCESS":
            console.log("DIGIMON_MULTIPLE_SUCCESS")
            return {
                ...state,
                loading: false,
                errorMsg: "",
                data: {
                    ...state.data,
                    [action.digimonName]: action.payload
                }
            };
        case "DIGIMON_MULTIPLE _FAILURE":
            console.log("DIGIMON_MULTIPLE")
            return {
                ...state,
                loading: false,
                errorMsg: "Get Digimon Fail"
            };
        default:
            console.log("DEFAULT Digimon Multiple")
            return state;
    }
}

export default digimonMultipleReducer