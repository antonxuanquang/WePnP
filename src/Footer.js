import React, {Component} from 'react';

class Footer extends Component {
    
    render() {
        return(
            <div className="footer-wrapper">
            
                <footer className="site-footer-widgets">
                    <div className="container">
                        <div className="row">
                            <div className="footer-widget-column col-xs-12 col-sm-12 col-lg-5">
                                <aside id="text-1" className="footer-widget widget_text">
                                    <div className="textwidget">Your Logo
                                        <p></p>
                                        <p>
                                            At Listify our purpose is to help people find great local businesses like dentists, hair stylists and mechanics. Go Explore!
                                        </p>
                                        <p>
                                            Proudly Made in Canada &amp; USA</p>
                                    </div>
                                </aside>
                            </div>
            
                            <div className="footer-widget-column col-xs-12 col-sm-6 col-lg-3 col-lg-offset-1">
                            </div>
            
                            <div className="footer-widget-column col-xs-12 col-sm-6 col-lg-3">
                            </div>
            
                        </div>
                    </div>
                </footer>
                
                <footer id="colophon" className="site-footer" role="contentinfo">
                    <div className="container">
            
                        <div className="site-info">
                            Copyright My Site © 2016. All Rights Reserved </div>
            
                        <div className="site-social">
                        </div>
            
                    </div>
                </footer>

            </div>
        )
    }
}

export default Footer;