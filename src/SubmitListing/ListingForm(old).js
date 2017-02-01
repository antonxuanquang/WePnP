import React, { Component } from 'react';

class ListingForm extends Component {
    render() {
        return(
            <div id="primary" className="container">
                <div className="row content-area">
            
                    <main id="main" className="site-main col-md-10 col-md-offset-1 col-xs-12" role="main">
                        <article id="post-32" className="post-32 page type-page status-publish has-post-thumbnail hentry content-box content-box-wrapper">
            
                            <div className="content-box-inner">
            
                                <div className="entry-content">
                                    <form action="/submit-listing/?customize_changeset_uuid=3e14070a-f7f4-43f5-bee5-8a18d24ed053" method="post" id="submit-job-form" className="job-manager-form" enctype="multipart/form-data">
                                    
                                        <fieldset>
                                            <label>Your account</label>
                                            <div className="field account-sign-in">
                                                You are currently signed in as admin.
                                                <a className="button" href="http://localhost/wp-login.php?action=logout&amp;redirect_to=http%3A%2F%2Flocalhost%2Fsubmit-listing%2F&amp;_wpnonce=5da9549da9">Sign out</a>
                                            </div>
                                        </fieldset>
            
                                        <fieldset className="fieldset-job_title">
                                            <label for="job_title">Title</label>
                                            <div className="field required-field">
                                                <input type="text" className="input-text" name="job_title" id="job_title" placeholder="" value="" maxlength="" required="" />
                                            </div>
                                        </fieldset>
                                        <fieldset className="fieldset-job_location">
                                            <label for="job_location">Location <small>(optional)</small>
                                            </label>
                                            <div className="field ">
                                                <input type="text" className="input-text" name="job_location" id="job_location" placeholder="e.g. &quot;London&quot;" value="" maxlength="" />
                                                <small className="description">Leave this blank if the location is not important</small> </div>
                                        </fieldset>
                                        <fieldset className="fieldset-application">
                                            <label for="application">Contact email/URL</label>
                                            <div className="field required-field">
                                                <input type="text" className="input-text" name="application" id="application" placeholder="Enter an email address or website URL" value="bllah@asda.com" maxlength="" required=""/>
                                            </div>
                                        </fieldset>
                                        <fieldset className="fieldset-job_region">
                                            <label for="job_region">Listing Region</label>
                                            <div className="field required-field">
                                                <select name="job_region" id="job_region" className="postform" >
                                                    <option value="" selected="selected">Select Region</option>
                                                </select>
                                                <div className="chosen-container chosen-container-single" title="" id="job_region_chosen"><a className="chosen-single" tabindex="-1"><span>Select Region</span><div><b></b></div></a>
                                                    <div className="chosen-drop">
                                                        <div className="chosen-search">
                                                            <input type="text" autocomplete="off" />
                                                        </div>
                                                        <ul className="chosen-results"></ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </fieldset>
                                        <fieldset className="fieldset-job_category">
                                            <label for="job_category">Listing Category</label>
                                            <div className="field required-field">
                                                <select name="job_category[]" id="job_category" className="job-manager-category-dropdown " multiple="multiple" data-placeholder="Choose a category…" data-no_results_text="No results match" data-multiple_text="Select Some Options" >
                                                    <option className="level-0" value="21">Arts &amp; Entertainment</option>
                                                    <option className="level-1" value="31">&nbsp;&nbsp;&nbsp;Nightclub</option>
                                                    <option className="level-0" value="22">Automotive</option>
                                                    <option className="level-0" value="43">Barbershop</option>
                                                    <option className="level-0" value="23">Bars</option>
                                                    <option className="level-1" value="25">&nbsp;&nbsp;&nbsp;Breweries</option>
                                                    <option className="level-0" value="24">Beauty &amp; Spas</option>
                                                    <option className="level-0" value="41">Coffee &amp; Tea</option>
                                                    <option className="level-0" value="42">Doughnuts</option>
                                                    <option className="level-0" value="26">Financial Services</option>
                                                    <option className="level-0" value="27">Food</option>
                                                    <option className="level-0" value="28">Health &amp; Medical</option>
                                                    <option className="level-0" value="29">Home Services</option>
                                                    <option className="level-0" value="30">Hotels &amp; Travel</option>
                                                    <option className="level-0" value="32">Nightlife</option>
                                                    <option className="level-0" value="33">Pets</option>
                                                    <option className="level-0" value="34">Public Services &amp; Government</option>
                                                    <option className="level-0" value="35">Real Estate</option>
                                                    <option className="level-0" value="36">Restaurants</option>
                                                    <option className="level-1" value="38">&nbsp;&nbsp;&nbsp;Steakhouse</option>
                                                    <option className="level-1" value="39">&nbsp;&nbsp;&nbsp;Thai</option>
                                                    <option className="level-1" value="40">&nbsp;&nbsp;&nbsp;Vegan</option>
                                                    <option className="level-0" value="37">Shopping</option>
                                                </select>
                                                <div className="chosen-container chosen-container-multi" title="" id="job_category_chosen">
                                                    <ul className="chosen-choices">
                                                        <li className="search-field">
                                                            <input type="text" value="Choose a category…" className="default" autocomplete="off" />
                                                        </li>
                                                    </ul>
                                                    <div className="chosen-drop">
                                                        <ul className="chosen-results"></ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </fieldset>
                                        <fieldset className="fieldset-job_hours">
                                            <label for="job_hours">Hours of Operation <small>(optional)</small>
                                            </label>
                                            <div className="field ">
            
                                                <table>
                                                    <tbody>
                                                        <tr>
                                                            <th width="40%">&nbsp;</th>
                                                            <th align="left">Open</th>
                                                            <th align="left">Close</th>
                                                        </tr>
            
                                                        <tr>
                                                            <td align="left">Monday</td>
                                                            <td align="left" className="business-hour">
                                                                <input type="text" className="timepicker ui-timepicker-input" name="job_hours[1][start]" value="" autocomplete="off" />
                                                            </td>
                                                            <td align="left" className="business-hour">
                                                                <input type="text" className="timepicker ui-timepicker-input" name="job_hours[1][end]" value="" autocomplete="off" />
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td align="left">Tuesday</td>
                                                            <td align="left" className="business-hour">
                                                                <input type="text" className="timepicker ui-timepicker-input" name="job_hours[2][start]" value="" autocomplete="off" />
                                                            </td>
                                                            <td align="left" className="business-hour">
                                                                <input type="text" className="timepicker ui-timepicker-input" name="job_hours[2][end]" value="" autocomplete="off" />
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td align="left">Wednesday</td>
                                                            <td align="left" className="business-hour">
                                                                <input type="text" className="timepicker ui-timepicker-input" name="job_hours[3][start]" value="" autocomplete="off" />
                                                            </td>
                                                            <td align="left" className="business-hour">
                                                                <input type="text" className="timepicker ui-timepicker-input" name="job_hours[3][end]" value="" autocomplete="off" />
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td align="left">Thursday</td>
                                                            <td align="left" className="business-hour">
                                                                <input type="text" className="timepicker ui-timepicker-input" name="job_hours[4][start]" value="" autocomplete="off" />
                                                            </td>
                                                            <td align="left" className="business-hour">
                                                                <input type="text" className="timepicker ui-timepicker-input" name="job_hours[4][end]" value="" autocomplete="off" />
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td align="left">Friday</td>
                                                            <td align="left" className="business-hour">
                                                                <input type="text" className="timepicker ui-timepicker-input" name="job_hours[5][start]" value="" autocomplete="off" />
                                                            </td>
                                                            <td align="left" className="business-hour">
                                                                <input type="text" className="timepicker ui-timepicker-input" name="job_hours[5][end]" value="" autocomplete="off" />
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td align="left">Saturday</td>
                                                            <td align="left" className="business-hour">
                                                                <input type="text" className="timepicker ui-timepicker-input" name="job_hours[6][start]" value="" autocomplete="off" />
                                                            </td>
                                                            <td align="left" className="business-hour">
                                                                <input type="text" className="timepicker ui-timepicker-input" name="job_hours[6][end]" value="" autocomplete="off" />
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td align="left">Sunday</td>
                                                            <td align="left" className="business-hour">
                                                                <input type="text" className="timepicker ui-timepicker-input" name="job_hours[0][start]" value="" autocomplete="off" />
                                                            </td>
                                                            <td align="left" className="business-hour">
                                                                <input type="text" className="timepicker ui-timepicker-input" name="job_hours[0][end]" value="" autocomplete="off" />
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </fieldset>
                                        <fieldset className="fieldset-featured_image">
                                            <label for="featured_image">Cover Image <small>(optional)</small>
                                            </label>
                                            <div className="field ">
                                                <div className="job-manager-uploaded-files">
                                                </div>
            
                                                <input type="file" className="input-text wp-job-manager-file-upload" data-file_types="jpg|jpeg|gif|png" name="featured_image" id="featured_image" placeholder="" />
                                                <small className="description">
            			Maximum file size: 8 MB.	</small> </div>
                                        </fieldset>
                                        <fieldset className="fieldset-gallery_images">
                                            <label for="gallery_images">Gallery Images <small>(optional)</small>
                                            </label>
                                            <div className="field ">
                                                <div className="job-manager-uploaded-files">
                                                </div>
            
                                                <input type="file" className="input-text wp-job-manager-file-upload" data-file_types="jpg|jpeg|gif|png" multiple="" name="gallery_images[]" id="gallery_images" placeholder="" />
                                                <small className="description">
            			Maximum file size: 8 MB.	</small> </div>
                                        </fieldset>
                                        <fieldset className="fieldset-job_description">
                                            <label for="job_description">Description</label>
                                            <div className="field required-field">
                                                <div id="wp-job_description-wrap" className="wp-core-ui wp-editor-wrap tmce-active">
                                                    <link href="http://localhost/wp-includes/css/editor.min.css?ver=4.7" type="text/css" media="all" />
                                                    <div className="wp-editor-container">
                                                        
                                                        <textarea className="wp-editor-area" rows="8" autocomplete="off" cols="40" name="job_description" id="job_description" aria-hidden="true"></textarea>
                                                    </div>
                                                </div>
                                            </div>
                                        </fieldset>
                                        
                                        <h2>Company Details</h2>
            
            
                                        <fieldset className="fieldset-company_website">
                                            <label for="company_website">Website <small>(optional)</small>
                                            </label>
                                            <div className="field ">
                                                <input type="text" className="input-text" name="company_website" id="company_website" placeholder="http://" value="" maxlength="" />
                                            </div>
                                        </fieldset>
                                        <fieldset className="fieldset-phone">
                                            <label for="phone">Phone Number <small>(optional)</small>
                                            </label>
                                            <div className="field ">
                                                <input type="text" className="input-text" name="phone" id="phone" placeholder="" value="" maxlength="" />
                                            </div>
                                        </fieldset>
                                        <fieldset className="fieldset-company_video">
                                            <label for="company_video">Video <small>(optional)</small>
                                            </label>
                                            <div className="field ">
                                                <input type="text" className="input-text" name="company_video" id="company_video" placeholder="A link to a video about your company" value="" maxlength="" />
                                            </div>
                                        </fieldset>
            
            
            
                                        <p>
                                            <input type="hidden" name="job_manager_form" value="submit-job" />
                                            <input type="hidden" name="job_id" value="0" />
                                            <input type="hidden" name="step" value="0" />
                                            <input type="submit" name="submit_job" className="button" value="Preview" />
                                        </p>
            
                                    </form>
            
                                </div>
            
            
                            </div>
                        </article>
            
            
                    </main>
            
                </div>
            </div>
        )
    }
}

export default ListingForm;