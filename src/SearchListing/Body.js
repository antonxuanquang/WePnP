import React, { Component }  from 'react';
import ResultMap from './ResultMap';
import QuerySectionAndResult from './QuerySectionAndResult';

class SearchListing extends Component {
    
    render() {
        return(
            <div>
                <ResultMap />
                <QuerySectionAndResult />
            </div>
        )
    }
}

export default SearchListing;