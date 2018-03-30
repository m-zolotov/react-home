import React, {Component} from 'react';
import CommentsList from './CommentsList';
import PropTypes from 'prop-types';
import toggleOpen from '../decorators/toggleOpen';

class Article extends Component {
    static propTypes = {
        article: PropTypes.shape({
            title: PropTypes.string.isRequired,
            text: PropTypes.string,
            comments: PropTypes.array
        }).isRequired
    };
    render() {
        const {article, toggleOpen} = this.props;
        return (
            <article>
                <h2 onClick={toggleOpen}>{article.title}</h2>
                <p>{this.getBody()}</p>
            </article>
        )
    }

    getBody() {
        return this.props.isOpen && (
            <div>
                <p>{this.props.article.text}</p>
                <CommentsList comments={this.props.article.comments}/>
            </div>
        )
    }
}

export default toggleOpen(Article);