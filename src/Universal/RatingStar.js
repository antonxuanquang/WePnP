import React, { Component } from 'react';

class RatingStar extends Component {
    
    render() {
        return (
            <span className="job_listing-rating-stars">
				<span className="star-icon"><span className="ion-ios-star-outline"></span></span>
				<span className="star-icon"><span className="ion-ios-star-outline"></span></span>
				<span className="star-icon"><span className="ion-ios-star-outline"></span></span>
				<span className="star-icon"><span className="ion-ios-star-outline"></span></span>
				<span className="star-icon"><span className="ion-ios-star-outline"></span></span>
            </span>    
        )
    }
    
}

export default RatingStar;