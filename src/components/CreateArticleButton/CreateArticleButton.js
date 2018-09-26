import React, {Component} from 'react';
import CreateArticle from '../../containers/CreateArticle/CreateArticle';
import { Link } from 'react-router-dom';

class CreateArticleButton extends Component {
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
            return <CreateArticle/>;
        }

        return (
            <div>
                <Link to={{
                    pathname: '/CreateArticle'
                }}>
                    <button onClick={this.pageHandler.bind(this)}>Create article</button>
                </Link>
            </div>
        );
    }
}

export default CreateArticleButton;
