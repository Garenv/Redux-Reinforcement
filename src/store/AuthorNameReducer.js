import * as actionType from './actions/actions';

const initialState = {
    authorNameValue: ''
};

const AuthorNameReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.AUTHOR_NAME:
            console.log("AuthorNameReducer => " + action.value);
            return {
                ...state,
                authorNameValue: action.value
            };
        default:
            return state;
    }
};

export default AuthorNameReducer;