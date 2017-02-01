import React, { Component } from 'react';

class Photo extends Component {
    
    render() {
        
        return (
            <aside className="widget widget-job_listing">
                <div className="listing-gallery slick-initialized slick-slider">
                    <div className="slick-list draggable" >
                        <div className="slick-track">
                            <div className="slick-active">
                                <a href="https://unsplash.it/750/680/?random">
                                    <img src="https://unsplash.it/750/680/?random" className="size-large" alt="big listing"/> 
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            
                <div className="listing-gallery-nav slick-initialized slick-slider">
                    <div className="slick-list draggable">
                        <div className="slick-track">
                            <div className="slick-slide slick-active">
                                <div className="item__wrapper">
                                    <img src="https://unsplash.it/150/150/?random" className="size-thumbnail" alt="listing"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>
        )
    }
}

export default Photo;