import React, {Component} from 'react';
import IntroPicture from './IntroPicture';
import MapWidget from './MapWidget';
import Photo from './Photo';
// import Comment from './Comment/Comment';
import Description from './Description';
import CommentList from './Comment/CommentList';
import Owner from './Owner';
import Time from './Time';
import $ from 'jquery';
import { API_SERVER_URL } from '../config';

class Listing extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            data: {
                availability: []
            }
        }
    }
    
    componentDidMount() {
        $.ajax({
            type: 'GET',
            url: API_SERVER_URL + 'meals/' + this.props.params.listingID,
            success: function(data) {
                // console.log('yay, it works');
                this.setState({
                    data: data
                });
                console.log(this.state.data.listingAvailability);
            }.bind(this),
            error: function(xhr, status, err) {
                console.log('why error???');
            }
        })
    }
    
    render() {
        
        // const mealId = this.props.params.mealId
        this.location = this.state.data.listingAddress + ", " + this.state.data.listingCity + ", " + this.state.data.listingState + " " + this.state.data.listingZipCode;
        
        return (
            <div>
                <IntroPicture 
                    title={this.state.data.listingTitle}
                    location={this.location}
                    rate={this.state.data.listingRate}
                    reviewCount={this.state.data.listingReviewsCount}
                />
                <div id="primary" className="container">
                    <div className="row content-area">
                        <main id="main" className="site-main col-xs-12 col-sm-7 col-md-8" role="main">
                            <MapWidget 
                                location={this.location}
                                phone={this.state.data.listingPhone}
                                link={this.state.data.link}
                            />
                            
                            <Owner ownerID={this.state.data.listingOwnerID}/>
                            
                            <Photo 
                                images={this.state.data.listingImages}
                            />
                            <Description 
                                description={this.state.data.listingDescription}
                            />
                            <CommentList />
                        </main>
                        <div id="secondary" className="widget-area col-md-4 col-sm-5 col-xs-12" role="complementary">
                            <Time 
                                from={this.state.data.listingFrom}
                                to={this.state.data.listingTo}/>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default Listing;