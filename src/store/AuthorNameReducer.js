import * as actionType from './actions/actions';

const initialState = {
    authorNameValue: ''
};

const AuthorNameReducer = (state = initialState, action) => {
    console.log("AuthorNameReducer => " + action.value);
    switch (action.type) {
        case actionType.AUTHOR_NAME:
            return {
                ...state,
                authorNameValue: action.value
            };
        default:
            return state;
    }
};

export default AuthorNameReducer;