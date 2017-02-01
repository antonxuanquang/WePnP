import React, { Component } from 'react';
import CoverImage from './CoverImage';
import ListingForm from './ListingForm';

class SubmitListing extends Component {
    render() {
        return(
            <div className="site-content">
                <CoverImage />
                <ListingForm />
            </div>
        )
    }
}

export default SubmitListing;