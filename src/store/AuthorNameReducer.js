import * as actionType from './actions/actions';

const initialState = {
    authorNameValue: ''
};

const AuthorNameReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.ARTICLE_ID_VALUE:
            return {
                ...state,
                authorNameValue: action.value
            };
        default:
            return state;
    }
};

export default AuthorNameReducer;