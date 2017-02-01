import React, { Component }  from 'react';
import QuerySection from './QuerySection';
import Result from './Result';

class QuerySectionAndResult extends Component {
    
    render() {
        return(
            <div>
                <div className="container">
            		<div className="row content-area">
            			<main id="main" className="site-main col-xs-12" role="main">
            			    <div className="job_listings">
            			        <QuerySection />
            			        <Result />
            			    </div>
            			</main>
            		</div>
            	</div>
            </div>
        )
    }
}

export default QuerySectionAndResult;