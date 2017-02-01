import React, { Component } from 'react';
import CommentWidget from './CommentWidget';
import NewComment from './NewComment'

class CommentList extends Component {
    
    render() {
        var commentList = [];
        for (var i = 0; i < Math.round(Math.random() * 5); i++) {
            commentList.push(<CommentWidget key={i} />);
        }
        
        return (
            <div className="comments-area widget widget-job_listing">
                <ol className="commentlist">
                    {commentList}
                </ol>
                <NewComment />
            </div>
        )
    }
}

export default CommentList;