import React, {Component} from 'react';

class MapWidget extends Component {
    
    render() {
        console.log(this.props.location);
        return (
            
            <div className="map-widget-sections">

                <div className="map-widget-section map-widget-section--split">
                    <div id="listing-contact-map"> 
                    <address>
                        <iframe width='600' height='400' frameborder='0' scrolling='no'  marginheight='0' marginwidth='0' src={'https://maps.google.com/maps?&q=' + encodeURIComponent(this.props.location) + '&output=embed'}/>
                    </address>
                    </div>
                </div>
                
                <div className="map-widget-section map-widget-section--split">
                    <div className="job_listing-location">{this.props.location}</div>        
                    <div className="job_listing-phone">
                        <span><a href="">{this.props.phone}</a></span>
                    </div>
                    <div className="job_listing-url">
                        <span><a href="">{this.props.link || ""}</a></span>
                    </div>
                </div>
            </div>
        )
    }
}

export default MapWidget;