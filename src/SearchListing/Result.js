import React, { Component }  from 'react';
import ListingWidgetHorizontal from './ListingWidgetHorizontal';

class Result extends Component {
    
    render() {
        return(
            <div>
                <div className="archive-job_listing-filter-title">
                    <div className="archive-job_listing-layout-wrapper">
                        <a href="#" data-style="grid" className="archive-job_listing-layout button active"><span className="ion-grid"></span></a>
                        <a href="#" data-style="list" className="archive-job_listing-layout button"><span className="ion-navicon-round"></span></a>
                    </div>
                    <h3 className="archive-job_listing-found">
                        <span className="results-found">7</span> Results Found           
                    </h3>
                </div>
                
                <ul className="job_listings">
                    <ListingWidgetHorizontal />
                </ul>
            </div>
            
        )
    }
}

export default Result;