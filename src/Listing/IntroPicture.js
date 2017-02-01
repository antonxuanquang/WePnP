import React, { Component } from 'react';
import RatingStar from '../Universal/RatingStar';

class IntroPicture extends Component {
    
    render() {
        return (
            <div className="listing-cover content-single-job_listing-hero has-image"
                style={{background: '#ffffff url(https://unsplash.it/2000/500/?random) no-repeat top left'}}>

                <div className="content-single-job_listing-hero-wrapper cover-wrapper container">
            
                    <div className="content-single-job_listing-hero-inner row">
            
                        <div className="content-single-job_listing-hero-company col-md-7 col-sm-12">
                            <h1 className="job_listing-title">{this.props.title}</h1>
                            <div className="job_listing-location">{this.props.location}</div>
                            <div className="job_listing-rating-wrapper">
                                
            				    <RatingStar />
                                
                                <span className="job_listing-rating-count">{this.props.reviewCount} Reviews</span>
                            </div>
                        </div>
            
                        <div className="content-single-job_listing-hero-actions col-md-5 col-sm-12">
                            <a href="" className="button button-secondary">Book now!!!</a>
                        </div>
                    </div>
            
                </div>
            
            </div>
        )
    }
}

export default IntroPicture;