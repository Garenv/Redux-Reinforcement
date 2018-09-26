import * as actionType from './actions/actions';

const initialState = {
    articleIdValue: ''
};

const ArticleIdReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.ARTICLE_ID_VALUE:
            return {
                ...state,
                articleIdValue: action.value
            };
        default:
            return state;
    }
};

export default ArticleIdReducer;