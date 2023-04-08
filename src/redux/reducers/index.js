const initialState = {
    city : {
        lat : '',
        long : '',
        country : '',
        regione : '',
        nameCity : ''
    }
}

const functionStorage = (state = initialState, action) => {
    switch(action.type){
        case 'SET_LAT' :
        return {
            ...state,
            city : {
                ...state.city,

                lat : action.payload,
            }
        }
        case'SET_LONG' : 
            return{
                ...state,
                city : {
                    ...state.city,

                    long : action.payload
                }
            }
        case 'SET_COUNTRY' :
            return{
                ...state,
                city : {
                    ...state.city,

                    country : action.payload
                }
            }
        case 'SET_REGIONE' :
            return{
                ...state,
                city : {
                    ...state.city,

                    regione : action.payload
                }
            }
        case 'SET_NAME_CITY': 
        return{
            ...state,
            city : {
                ...state.city,

                nameCity : action.payload
            }
        }
        default:
        return state
    }
}

export default functionStorage;