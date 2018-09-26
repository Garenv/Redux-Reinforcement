import React, { Component } from 'react';

import SearchArticleButton from './components/SearchArticleButton/SearchArticleButton';
import CreateArticleButton from './components/CreateArticleButton/CreateArticleButton';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchArticleButton/>
        <CreateArticleButton/>
      </div>
    );
  }
}

export default App;
