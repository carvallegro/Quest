import React, {Component} from 'react'
import PropTypes from 'prop-types'
import ReactMarkdown from 'react-markdown'

class PostContent extends Component {


    render() {
        let classes = 'post-content '
            + (this.props.open ? 'open' : '')
            + (this.props.expand ? 'expand' : '');

        let expandButton = <a className="post-content-sizing"
                              onClick={() => this.props.expandPostContent(true)}>
            <i className="fi flaticon-perspective"></i>
        </a>;
        if (this.props.expand) {
            expandButton = <a className="post-content-sizing"
                              onClick={() => this.props.expandPostContent(false)}>
                <i className="fi flaticon-focus"></i>
            </a>;
        }

        return (
            <div className={classes}>
                {expandButton}
                <a className="post-content-hiding"
                   onClick={() => this.props.openPostContent(false)}>
                    <i className="fi flaticon-hide"></i>
                </a>
                <p>
                    isOpened : {this.props.open ? 'YES' : 'NO'} / isExpanded : {this.props.expand ? 'YES' : 'NO'}
                </p>
                <div className="post-content-inner">
                    <ReactMarkdown source={this.content()}/>
                </div>
            </div>
        );
    }

    content() {
        if (!this.props.post) {
            return '<h1>No Post Selected</h1>';
        }

        return this.props.post.content;
    }

}

PostContent.propTypes = {
    open: PropTypes.bool.isRequired,
    expand: PropTypes.bool.isRequired,
    post: PropTypes.object,
    openPostContent: PropTypes.func.isRequired,
    expandPostContent: PropTypes.func.isRequired
};


export default PostContent;