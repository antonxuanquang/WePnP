import React , {Component} from 'react';

class Owner extends Component {
    render() {
        return (
            <aside className="widget widget-job_listing listify_widget_panel_listing_auhtor">
                <div className="job_listing-author">
                    <div className="job_listing-author-avatar">
                        <img alt="" src="https://s3.amazonaws.com/uifaces/faces/twitter/mlane/128.jpg" className="avatar photo"/> </div>
            
                    <div className="job_listing-author-info">
                        <h3 className="widget-title">{this.props.ownerID}</h3>
            
                        <small className="job_listing-author-descriptor">Listing Owner</small>
            
                        <div className="job_listing-author-info-more">
                            <a href="" className="popup-trigger"><span className="ion-email"></span></a>
            
                            <a href=""><span className="ion-information-circled"></span></a>
                        </div>
                    </div>
                </div>
            </aside>
        )
    }
}

export default Owner;