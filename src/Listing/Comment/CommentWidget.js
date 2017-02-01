import React, { Component } from 'react';
import RatingStar from '../../Universal/RatingStar';
import AnswerComment from './AnswerComment';

class CommentWidget extends Component {
    
    
    render() {
        var answerList = [];
        for (var i = 0; i < Math.round(Math.random() * 5); i++) {
            answerList.push(<AnswerComment key={i}/>);
        }
    
        return(
            <li className="comment byuser comment-author-admin bypostauthor even thread-even depth-1">
                <article className="comment row">
                    <header className="comment-author vcard col-md-2 col-sm-3 col-xs-12">
                        <img alt="" src="https://s3.amazonaws.com/uifaces/faces/twitter/marcosmoralez/128.jpg" className="avatar avatar-100 photo"/>
                    </header>
                    <section className="comment-content comment col-md-10 col-sm-9 col-xs-12">
                        <cite><b className="fn" ><a href="">admin</a></b> <span className="listing-owner">Listing Owner</span></cite>
                        <div className="comment-meta">
                            <a className="comment-reply-link" href="" onClick=""><i className="ion-ios-chatboxes-outline"></i></a>
                            <a className="comment-edit-link" href=""><span className="ion-edit"></span></a>
                            <div className="single-comment-rating">
                                <div className="comment-rating">
                                    <span>4.0</span>
                                </div>
                                <RatingStar />
                            </div>
                        </div>
                        <div>
                            <p>asfafasdf</p>
                        </div>

                        <a href="" className="comment-ago">
                            <time dateTime="2016-12-29T20:42:46+00:00">5 days ago</time>
                        </a>
                    </section>
                </article>
                
                <ol className="children">
                    {answerList}
                </ol>
            </li>    
        )
    }
}

export default CommentWidget;