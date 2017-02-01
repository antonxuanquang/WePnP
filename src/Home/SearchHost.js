import React, {Component} from 'react';

class SearchHost extends Component {
    
    render() {
        return (
            <div className="homepage-cover has-image" 
                style={{background: '#ffffff url(https://unsplash.it/2000/500/?random) no-repeat top left'}}>
                
        	    <div className="container">
        	        <div className="listify_widget_search_listings">
        	            <div className="home-widget-section-title">
        	                <h1 className="home-widget-title">Search Your City</h1>
        	                <h2 className="home-widget-description">Listify helps you find out whats happening in your city, Let's explore.</h2>
        	            </div>
        	            <p>Listify helps you find out whats happening in your city, Let&#8217;s explore.</p>
        
        	            <form className="job_search_form" action="/search" method="GET">
        
        	                <div className="search_jobs">
        	                    <div className="search_keywords">
        	                        <input type="text" name="search_keywords" id="search_keywords" placeholder="What are you looking for?" />
        	                    </div>
        
        	                    <div className="search_location">
        	                        <input type="text" name="search_location" id="search_location" placeholder="Location" />
        	                    </div>
        
        
        	                    <div className="search_categories">
        	                        <label>Category</label>
        	                        <select className='job-manager-category-dropdown'>
        	                            <option>All categories</option>
        	                            <option>Barbershop</option>
        	                            <option>Bars</option>
        	                            <option>Coffee &amp; Tea</option>
        	                            <option>Doughnuts</option>
        	                            <option>Food</option>
        	                        </select>
        	                    </div>
        	                </div>
        	                <button type="submit" data-refresh="Loading..." data-label="Search" name="update_results" className="update_results">Search</button>
        	            </form>
        	        </div>
        	    </div>
        	</div>
        )
    }
}

export default SearchHost;