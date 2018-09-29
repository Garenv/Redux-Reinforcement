import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionType from '../../store/actions/actions';

class SearchArticle extends Component {
    constructor(props) {
        super(props);

        this.state = {
            flag: false,
            idVal: '',
            cityCodeval: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleArticleId = this.handleArticleId.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log("IDValue --> " + this.state.idVal);

        this.props.articleIdValueRedux(this.state.idVal);
        this.setState({flag: true});
    }

    handleChange = event => {
        this.setState({value: event.target.value});
        this.props.cityCodeReducerRedux(event.target.value);
    }

    handleArticleId = event => {
        event.preventDefault();
        this.setState({idVal: event.target.value});
    }

    displayName = () => {
        if(this.props.authorNameValue === "nyc" && this.props.articleIdValue === '1') {
            console.log("Inside displayName() this.props.authorNameValue ==> " + this.state.cityCodeval);
            console.log("Inside displayName() this.props.articleIdValue ==>" + this.state.idVal);
            return(
                <div>
                    <p>author name: {this.props.authorNameValue}</p>
                    <p>article text: {this.props.articleIdValue}</p>
                </div>
            );
        }
        return null;
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} value={this.state.cityCodeValue} type="text" placeholder="city code"/>
                    <input onChange={this.handleArticleId} value={this.state.idVal} placeholder="article id"/>
                    <button type="submit" value="Search">Submit</button>
                    {this.state.flag && this.displayName()}
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        cityCodeValue: state.cityCodeValue.cityCodeValue,
        authorNameValue: state.authorNameValue.authorNameValue,
        articleIdValue: state.articleIdValue.articleIdValue,
        storyTextValue: state.storyTextValue.storyTextValue
    };
};

const mapDispatchToProps = dispatch => {
    return {
        cityCodeReducerRedux: (value) => dispatch({type: actionType.CITY_CODE_VALUE, value}),
        articleIdValueRedux: (value) => dispatch({type: actionType.ARTICLE_ID_VALUE, value})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchArticle);