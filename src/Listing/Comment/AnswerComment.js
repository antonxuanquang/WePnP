import React, { Component } from 'react';

class AnswerComment extends Component {
    render() {
        return(
            <li className="comment byuser comment-author-admin bypostauthor odd alt depth-2">
                <article className="comment row">
                    <header className="comment-author vcard col-md-2 col-sm-3 col-xs-12">
                        <img alt="" src="https://s3.amazonaws.com/uifaces/faces/twitter/ashleyford/128.jpg" className="avatar avatar-100 photo"/>
                    </header>
                    <section className="comment-content comment col-md-10 col-sm-9 col-xs-12">
                        <cite><b className="fn" ><a href="">admin</a></b> <span className="listing-owner">Listing Owner</span></cite>
                        <div className="comment-meta">
                            <a className="comment-reply-link" href="" onClick=""><i className="ion-ios-chatboxes-outline"></i></a>
                        </div>
                        <div>
                            <p>answer</p>
                        </div>

                        <a href="" className="comment-ago">
                            <time dateTime="2016-12-29T20:42:46+00:00">5 days ago</time>
                        </a>
                    </section>
                </article>
            </li>    
        )
    }
}

export default AnswerComment;