import React, { Component } from 'react';
import RatingStar from '../../Universal/RatingStar';

class CommentRespond extends Component {
    render() {
        return (
            <div className="comment-respond">
                <h3 className="comment-reply-title"><span className="ion-ios-compose-outline"></span>Write a review <small><a href="">Cancel reply</a></small></h3>
                <form action="" method="post" className="comment-form">
                    <p className="star-rating-wrapper comment-form-rating">
                        <span className="star-rating-label">Your Rating</span>
                        <RatingStar />
                    </p>
                    <p className="logged-in-as"><a href="">Logged in as admin</a>. <a href="">Log out?</a>
                    </p>
                    <p className="comment-form-comment">
                        <label>Comment</label>
                        <textarea cols="45" rows="8" maxLength="65525" ></textarea>
                    </p>
                    <p className="form-submit">
                        <input name="submit" type="submit" id="submit" className="submit" value="Publish Review" />
                        <input type="hidden" name="comment_post_ID" value="270" />
                        <input type="hidden" name="comment_parent" value="0" />
                    </p>
                    <p>
                        <input type="hidden" name="akismet_comment_nonce" value="a4b17f3f9e" />
                    </p>
                    <input type="hidden" name="_wp_unfiltered_html_comment" value="35bcaafb6e" />
                    <p></p>
                    <input type="hidden" name="ak_js" value="1483478154577" />
                </form>
            </div>    
        )
    }
}

export default CommentRespond;