import React, { Component } from 'react';

class CoverImage extends Component {
    render() {
        return(
            <div className="page-cover entry-cover has-image"
                style={{background: '#ffffff url(https://unsplash.it/2000/500/?random) no-repeat top left'}}>
                <h1 className="page-title cover-wrapper">Submit Listing</h1>
            </div>
        )
    }
}

export default CoverImage;