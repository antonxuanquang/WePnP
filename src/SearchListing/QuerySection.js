import React, { Component }  from 'react';

class QuerySection extends Component {
    
    render() {
        return(
            <form className="job_filters">

                <div className="search_jobs">

                    <div className="search_keywords">
                        <label for="search_keywords">What are you looking for?</label>
                        <input type="text" name="search_keywords" id="search_keywords" placeholder="What are you looking for?" value="" />
                    </div>
                
                    <div className="search_location"><i className="locate-me"></i>
                        <label for="search_location">Location</label>
                        <input type="text" name="search_location" id="search_location" placeholder="Location" value="" autocomplete="off" />
                    </div>
                
                    <div className="search_categories">
                        <label for="search_categories">Category</label>
                        <span className="select job-manager-category-dropdown-wrapper"><select name="search_categories[]" id="search_categories" className="job-manager-category-dropdown " data-placeholder="Choose a category…" data-no_results_text="No results match" data-multiple_text="Select Some Options">
                            <option value="">All categories</option>	<option className="level-0" value="43">Barbershop</option>
                            	<option className="level-0" value="23">Bars</option>
                            	<option className="level-0" value="41">Coffee &amp; Tea</option>
                            	<option className="level-0" value="42">Doughnuts</option>
                            	<option className="level-0" value="27">Food</option>
                            </select>
                        </span>
                        <div className="chosen-container chosen-container-single" title="" id="search_categories_chosen"><a className="chosen-single" tabindex="-1"><span>All categories</span><div><b></b></div></a>
                            <div className="chosen-drop">
                                <div className="chosen-search">
                                    <input type="text" autocomplete="off" />
                                </div>
                                <ul className="chosen-results">
                                    <li className="active-result result-selected" data-option-array-index="0">All categories</li>
                                    <li className="active-result level-0" data-option-array-index="1">Barbershop</li>
                                    <li className="active-result level-0" data-option-array-index="2">Bars</li>
                                    <li className="active-result level-0" data-option-array-index="3">Coffee &amp; Tea</li>
                                    <li className="active-result level-0" data-option-array-index="4">Doughnuts</li>
                                    <li className="active-result level-0" data-option-array-index="5">Food</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                
                    <div className="search-radius-wrapper in-use">
                        <div className="search-radius-label">
                            <label for="use_search_radius">
                                <input type="checkbox" name="use_search_radius" id="use_search_radius" checked="checked" /> Radius: <span className="radi">50</span> mi </label>
                        </div>
                        <div className="search-radius-slider">
                            <div id="search-radius" className="ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all"><span className="ui-slider-handle ui-state-default ui-corner-all" tabindex="0"></span>
                            </div>
                        </div>
                
                        <input type="hidden" id="search_radius" name="search_radius" value="50" />
                    </div>
                
                    <input type="hidden" id="search_lat" name="search_lat" value="0" />
                    <input type="hidden" id="search_lng" name="search_lng" value="0" />
                    <input type="hidden" name="search_region" className="search_region" value="0" /> 
                </div>
            </form>
        )
    }
}

export default QuerySection;