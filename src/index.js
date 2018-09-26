import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import CityCodeReducer from './store/CityCodeReducer';
import ArticleIdValueReducer from './store/ArticleIdReducer';
import AuthorNameReducer from './store/AuthorNameReducer';
import StoryTextReducer from "./store/StoryTextReducer";

const rootReducer = combineReducers({
    cityCodeValue: CityCodeReducer,
    articleIdValue: ArticleIdValueReducer,
    authorNameValue: AuthorNameReducer,
    storyTextValue: StoryTextReducer
});

const store = createStore(rootReducer);

ReactDOM.render(<BrowserRouter><Provider store={store}><App /></Provider></BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
