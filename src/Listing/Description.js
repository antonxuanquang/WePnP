import React, { Component } from 'react';

class Decription extends Component {
    render() {
        return(
            <aside className="widget widget-job_listing listify_widget_panel_listing_content">
                <h1 className="widget-title widget-title-job_listing ion-ios-paper-outline">Details</h1>
                <p>{this.props.description}</p>
            </aside>
        )
    }
}

export default Decription;

