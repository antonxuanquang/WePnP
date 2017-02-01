import React, { Component } from 'react';
import { Link } from 'react-router'

class Header extends Component {
    
    render() {
        return (
            <div>
                <header className="site-header">
                    <div className="primary-header">
                        <div className="container">
                            <div className="primary-header-inner">
                                <div className="site-branding">
                
                                    <h1 className="site-title"><a href="./index.html" rel="home">My Site</a></h1>
                                    <h2 className="site-description">Just another WordPress site</h2>
                                </div>
                
                                <div className="primary nav-menu">
                                    <div className="nav-menu-container">
                                        <ul id="menu-primary" className="menu">
                                            <li className="menu-item menu-type-link">
                                                <a href="#search-header" data-toggle="#search-header" className="search-overlay-toggle"></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                
                            <div id="search-header" className="search-overlay">
                                <div className="container">
                
                                    <form role="search" method="get" className="search-form" action="./listings/index.html">
                                        <label>
                                            <span className="screen-reader-text">Search for:</span>
                                            <input type="search" className="search-field" placeholder="Search" value="" name="search_keywords" title="Search for:" />
                                        </label>
                                        <button type="submit" className="search-submit"></button>
                                    </form>
                                    <a href="#search-header" data-toggle="#search-header" className="ion-close search-overlay-toggle"></a>
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <nav id="site-navigation" className="main-navigation" role="navigation">
                        <div className="container">
                            <a href="#" className="navigation-bar-toggle">
                                <i className="ion-navicon-round"></i>
                                <span className="mobile-nav-menu-label">Primary</span>
                            </a>
                
                            <div className="navigation-bar-wrapper">
                                <div className="primary nav-menu">
                                    <ul id="menu-primary-1" className="primary nav-menu">
                                        <li className="menu-item menu-type-link">
                                            <a href="#search-header" data-toggle="#search-header" className="search-overlay-toggle"></a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="secondary nav-menu">
                                    <ul>
                                        <li className="current_page_item"><Link to={`/`}>Home</Link>
                                        </li>
                                        <li className="page_item page-item-55"><a href="./submit-listing">Submit Listing</a>
                                        </li>
                                        <li className="page_item page-item-25 page_item_has_children"><a href="">My Account</a>
                                            <ul className='children'>
                                                <li className="page_item page-item-37"><a href="">Listings</a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                
                            <a href="#search-navigation" data-toggle="#search-navigation" className="ion-search search-overlay-toggle"></a>
                
                            <div id="search-navigation" className="search-overlay">
                
                                <form role="search" method="get" className="search-form" action="./listings/index.html">
                                    <label>
                                        <span className="screen-reader-text">Search for:</span>
                                        <input type="search" className="search-field" placeholder="Search" value="" name="search_keywords" title="Search for:" />
                                    </label>
                                    <button type="submit" className="search-submit"></button>
                                </form>
                                <a href="#search-navigation" data-toggle="#search-navigation" className="ion-close search-overlay-toggle"></a>
                            </div>
                        </div>
                    </nav>
                </header>
            </div>
        )
    }
}

export default Header;

