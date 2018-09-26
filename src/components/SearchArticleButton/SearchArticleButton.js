import React, {Component} from 'react';
import SearchArticle from '../../containers/SearchArticle/SearchArticle';
import { Link } from 'react-router-dom';

class SearchArticleButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            flag: false
        };
    }

    pageHandler () {
        this.setState({flag: true});
    }

    render() {
        const next = this.state.flag;

        if(next) {
            return <SearchArticle/>;
        }

        return (
            <div>
                <Link to={{
                    pathname: '/SearchArticle'
                }}>
                    <button onClick={this.pageHandler.bind(this)}>Search for article</button>
                </Link>
            </div>
        );
    }
}

export default SearchArticleButton;
