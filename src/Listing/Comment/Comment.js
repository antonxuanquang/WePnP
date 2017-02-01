import React, {Component} from 'react';

class Comment extends Component {
    render () {
        return (
            <div id="comments" className="comments-area widget widget-job_listing">



            <div id="respond" className="comment-respond">
                <h3 id="reply-title" className="comment-reply-title"><span className="ion-ios-compose-outline"></span>Write a review <small><a href="">Cancel reply</a></small></h3>
                <form action="" method="post" className="comment-form" >
                    <p className="star-rating-wrapper comment-form-rating"><span className="star-rating-label">Your Rating</span><span className="stars"><a className="star active" href="" data-rating="5"></a><a className="star" href="" data-rating="4"></a><a className="star" href="" data-rating="3"></a><a className="star" href="" data-rating="2"></a><a className="star" href="" data-rating="1"></a></span>
                    </p>
                    <p className="comment-form-comment">
                        <label for="comment">Comment</label>
                        <textarea id="comment" name="comment" cols="45" rows="8" maxLength="65525" required="required"></textarea>
                    </p>
                    <p className="comment-form-author">
                        <label for="author">Name <span className="required">*</span>
                        </label>
                        <input id="author" name="author" type="text" value="" size="30" maxLength="245" aria-required="true" required="required" />
                    </p>
                    <p className="comment-form-email">
                        <label for="email">Email <span className="required">*</span>
                        </label>
                        <input id="email" name="email" type="email" value="" size="30" maxLength="100" aria-describedby="email-notes" aria-required="true" required="required" />
                    </p>
                    <p className="comment-form-url">
                        <label for="url">Website</label>
                        <input id="url" name="url" type="url" value="" size="30" maxLength="200"/>
                    </p>
                    <p className="form-submit">
                        <input name="submit" type="submit" id="submit" className="submit" value="Publish Review" />
                        <input type="hidden" name="comment_post_ID" value="685" id="comment_post_ID" />
                        <input type="hidden" name="comment_parent" id="comment_parent" value="0" />
                    </p>
                </form>
            </div>
        
        </div>
            
            )
    }
}

export default Comment ; 