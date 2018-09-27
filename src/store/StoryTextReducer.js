import * as actionType from '../store/actions/actions';

const initialState = {
    storyTextValue: ''
};

const StoryTextReducer = (state = initialState, action) => {
    console.log("StoryTextReducer => " + action.value);
    switch (action.type) {
        case actionType.STORY_VALUE:
            return {
                ...state,
                storyTextValue: action.value
            };
        default:
            return state;

    }
};

export default StoryTextReducer;