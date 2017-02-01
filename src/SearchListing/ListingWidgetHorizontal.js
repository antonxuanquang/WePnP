import React, { Component }  from 'react';

class ListingWidgetHorizontal extends Component {
    
    render() {
        return(
            <li className="type-job_listing style-list col-xs-12">
                <div className="content-box">
                    <a href="" className="job_listing-clickbox"></a>
                    <header className="job_listing-entry-header listing-cover has-image">
                        <div className="job_listing-entry-header-wrapper cover-wrapper">
                            <div className="job_listing-entry-thumbnail">
                                <div className="list-cover has-image"></div>
                            </div>
                            <div className="job_listing-entry-meta">
                                <h1 className="job_listing-title">Astoundify Barbershop</h1>
                                <div className="job_listing-location job_listing-location-formatted">
                                    <a className="google_map_link" href="" target="_blank">
                                        Liberty Street, Toronto Ontario M6K, Canada
                                    </a>
                                </div>
                                <div className="job_listing-phone">
                                    <span><a href="tel:9055555555">(905) 555-5555</a></span>
                                </div>
                            </div>
                        </div>
                    </header>
                    <footer className="job_listing-entry-footer">
                        <div className="job_listing-rating-wrapper" >
                            <span className="job_listing-rating-stars">
                				<span className="star-icon"><span className="ion-ios-star-outline"></span></span>
                				<span className="star-icon"><span className="ion-ios-star-outline"></span></span>
                				<span className="star-icon"><span className="ion-ios-star-outline"></span></span>
                				<span className="star-icon"><span className="ion-ios-star-outline"></span></span>
                				<span className="star-icon"><span className="ion-ios-star-outline"></span></span>
                            </span>
                            <span className="job_listing-rating-average">
        				        <span>0.0</span>
                            </span>
                        </div>
                    </footer>
                </div>
            </li>
        )
    }
}

export default ListingWidgetHorizontal;