import React, {Component} from 'react';
import { Link } from 'react-router';
import RatingStar from '../Universal/RatingStar';

class HostOverviewWidget extends Component {
    
    
    
    render() {
        
        return(
            <li className="type-job_listing col-xs-12 col-sm-6 col-md-4 style-grid">
                <div className="content-box">
                    <Link to={"/meals/" + this.props.data.id} className="job_listing-clickbox"/>
                    <header className="job_listing-entry-header listing-cover has-image"
                        style={{background: '#ffffff url(https://unsplash.it/500/400/?random) no-repeat top left'}}>

                        <div className="job_listing-entry-header-wrapper cover-wrapper">

                            <div className="job_listing-entry-thumbnail">
                                <div className="list-cover has-image"></div>
                            </div>
                            <div className="job_listing-entry-meta">
                                <h1 className="job_listing-title">{this.props.data.listingTitle}</h1>
                                <div className="job_listing-location">{this.props.data.listingAddress + ", " + this.props.data.listingCity + ", " + this.props.data.listingState + " " + this.props.data.listingZipCode}</div>
                                <div className="job_listing-phone">
                                    <span><a>{this.props.data.listingPhone}</a></span>
                                </div>
                            </div>
                        </div>

                    </header> 

                    <footer className="job_listing-entry-footer">

                        <div className="job_listing-rating-wrapper">
                            <RatingStar />
                            <span className="job_listing-rating-average">
								<span>{this.props.data.listingRate}</span>
                            </span>
                            <span className="job_listing-rating-count"></span>
                        </div>
                        
                        <div className="job_listing-reviews">{this.props.data.listingReviewsCount} Reviews</div>  

                    </footer>
                </div>
            </li>    
        )
    }
}

export default HostOverviewWidget;