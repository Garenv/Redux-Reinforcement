import * as actionType from '../store/actions/actions';

const initialState = {
    storyTextValue: ''
};

const StoryTextReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.STORY_VALUE:
            console.log("StoryTextReducer => " + action.value);
            return {
                ...state,
                storyTextValue: action.value
            };
        default:
            return state;

    }
};

export default StoryTextReducer;