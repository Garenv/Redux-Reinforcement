import * as actionType from '../store/actions/actions';

const initialState = {
    cityCodeValue: ''
};

const CityCodeReducer = (state = initialState, action) => {
    console.log("CityCodeReducer => " + action.value);
    switch (action.type) {
        case actionType.CITY_CODE_VALUE:
            return {
                ...state,
                cityCodeValue: action.value
            };
        default:
            return state;
    }
};

export default CityCodeReducer;