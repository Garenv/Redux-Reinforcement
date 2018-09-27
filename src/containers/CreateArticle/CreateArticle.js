import React, { Component } from 'react';
import {connect} from "react-redux";
import * as actionType from "../../store/actions/actions";

class CreateArticle extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: '',
            idValue: '',
            authorValue: '',
            cityValue: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        console.log(this.state.cityValue);
        this.props.cityCodeReducerRedux(this.state.cityValue);

        console.log(this.state.value);
        this.props.storyTextValueRedux(this.state.value);

        console.log(this.state.idValue);
        this.props.articleIdValueRedux(this.state.idValue);

        console.log(this.state.authorValue);
        this.props.authorNameValueRedux(this.state.authorValue);

        if(this.state.value === "") {
            alert("Please enter the value and then click submit" );
        } else {
            alert("Article saved " + "\n" + this.state.value + "\n" + "Id value " + this.state.idValue);
        }
    }

    handleStoryText = event => {
        event.preventDefault();
        this.setState({value: event.target.value});
    }

    handleAuthor = event => {
        event.preventDefault();
        this.setState({authorValue: event.target.value});
    }

    handleCityValue = event => {
        event.preventDefault();
        this.setState({cityValue: event.target.value});
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input value={this.state.cityValue} onChange={this.handleCityValue} placeholder="city code"/>
                    <input value={this.state.authorValue} onChange={this.handleAuthor} placeholder="author name" />
                        <textarea value={this.state.storyTextValue} onChange={this.handleStoryText} rows="2" cols="25" />
                    <button type="submit" value="Submit">Submit</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        articleIdValue: state.articleIdValue.articleIdValue,
        storyTextValue: state.storyTextValue.storyTextValue,
        authorNameValue: state.authorNameValue.authorNameValue,
        cityCodeValue: state.cityCodeValue.cityCodeValue
    };
};

const mapDispatchToProps = dispatch => {
    return {
        articleIdValueRedux: (value) => dispatch({type: actionType.ARTICLE_ID_VALUE, value}),
        storyTextValueRedux: (value) => dispatch({type: actionType.STORY_VALUE, value}),
        authorNameValueRedux: (value) => dispatch({type: actionType.AUTHOR_NAME, value}),
        cityCodeReducerRedux: (value) => dispatch({type: actionType.CITY_CODE_VALUE, value})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateArticle);