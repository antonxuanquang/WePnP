import React, { Component } from 'react';
import HostOverviewWidget from './HostOverviewWidget';

class HostOverviewSection extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            props: props
        }
    }
    
    render() {
        
        var widgetList = this.props.data.map((widget) => {
            return <HostOverviewWidget data={widget} key={widget.id}/>
        })
        
        return (
            <div className="container">
                <aside className="home-widget">
        	        <div className="home-widget-section-title">
        	            <h2 className="home-widget-title">{this.props.widgetTitle}</h2>
        	            <h2 className="home-widget-description">{this.props.widgetDescription}</h2>
        	        </div>
        	        <ul className="job_listings">
        	            {widgetList}
        	        </ul>
        	    </aside>
            </div>    
        )
    }
}

export default HostOverviewSection;