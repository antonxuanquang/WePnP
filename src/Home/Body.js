import { API_SERVER_URL } from '../config';
import React, { Component } from 'react';
import SearchHost from './SearchHost';
import HostOverviewSection from './HostOverviewSection';
import $ from 'jquery';

class Home extends Component {
    
    componentDidMount() {
        $.ajax({
            type: 'GET',
            url: API_SERVER_URL + 'meals/aroundme',
            success: function(data) {
                // console.log('yay, it works');
                this.setState({
                    aroundMe: {
                        widgetTitle: "Recent Listings",
                        widgetDescription: "Discover some of our best listings",
                        data: data
                    }
                });
            }.bind(this),
            error: function(xhr, status, err) {
                // console.log('why error???');
                this.setState({
                    aroundMe: {
                        widgetTitle: "Recent Listings",
                        widgetDescription: "Discover some of our best listings",
                        data: [
                            {
                                listingTitle: "Astoundify Barbershop",
                                listingLocation: "555 Liberty Village, Toronto, Ontario, Canada",
                                listingPhone: "(905) 444-5555",
                                listingRate: 4.3,
                                listingReviewsCount: 10
                            }
                        ]
                    }
                });
            }.bind(this)
        })
        
        $.ajax({
            type: 'GET',
            url: API_SERVER_URL + 'meals/topviews',
            success: function(data) {
                // console.log('yay, it works');
                this.setState({
                    topReviewed: {
                        widgetTitle: "Top Reviewed",
                        widgetDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                        data: data
                    }
                });
            }.bind(this),
            error: function(xhr, status, err) {
                // console.log('why error???');
                this.setState({
                    topReviewed: {
                        widgetTitle: "Top Reviewed",
                        widgetDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                        data: [
                            {
                                listingTitle: "Astoundify Barbershop",
                                listingLocation: "555 Liberty Village, Toronto, Ontario, Canada",
                                listingPhone: "(905) 444-5555",
                                listingRate: 4.3,
                                listingReviewsCount: 10
                            }
                        ]
                    }
                });
            }.bind(this)
        })
        
        $.ajax({
            type: 'GET',
            url: API_SERVER_URL + 'meals/toprate',
            success: function(data) {
                // console.log('yay, it works');
                this.setState({
                    topRated: {
                        widgetTitle: "Top Rated",
                        widgetDescription: "Vivamus tortor magna, finibus varius commodo quis, congue vitae orci. Integer ut nisl consequat",
                        data: data
                    }
                });
            }.bind(this),
            error: function(xhr, status, err) {
                // console.log('why error???');
                this.setState({
                    topRated: {
                        widgetTitle: "Top Rated",
                        widgetDescription: "Vivamus tortor magna, finibus varius commodo quis, congue vitae orci. Integer ut nisl consequat",
                        data: [
                            {
                                listingTitle: "Astoundify Barbershop",
                                listingLocation: "555 Liberty Village, Toronto, Ontario, Canada",
                                listingPhone: "(905) 444-5555",
                                listingRate: 4.3,
                                listingReviewsCount: 10
                            }
                        ]
                    }
                });
            }.bind(this)
        })
    }
    
    constructor(props) {
        super(props);
        this.state = {
            aroundMe: {
                widgetTitle: "Recent Listings",
                widgetDescription: "Discover some of our best listings",
                data: []
            },
            topReviewed: {
                widgetTitle: "Top Reviewed",
                widgetDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                data: []
            },
            topRated: {
                widgetTitle: "Top Rated",
                widgetDescription: "Vivamus tortor magna, finibus varius commodo quis, congue vitae orci. Integer ut nisl consequat",
                data: []
            }
        };
    }
    
    render() {
        return (
            <div>
                <SearchHost />
                <HostOverviewSection 
                    widgetTitle={this.state.aroundMe.widgetTitle}
                    widgetDescription={this.state.aroundMe.widgetDescription}
                    data={this.state.aroundMe.data}
                />
                
                <HostOverviewSection 
                    widgetTitle={this.state.topReviewed.widgetTitle}
                    widgetDescription={this.state.topReviewed.widgetDescription}
                    data={this.state.topReviewed.data}
                />
                
                <HostOverviewSection 
                    widgetTitle={this.state.topRated.widgetTitle}
                    widgetDescription={this.state.topRated.widgetDescription}
                    data={this.state.topRated.data}
                />
                
            </div>
        )
    }
}

export default Home;