import React, { Component } from 'react';
import { API_SERVER_URL } from '../config';
import { Form, Button } from 'semantic-ui-react';
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import $ from 'jquery';
import States from '../Universal/States';

class ListingForm extends Component {
    
    constructor(props) {
        super(props);
        this.handleDayClick = this.handleDayClick.bind(this);
        this.handleResetClick = this.handleResetClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    state = {
        from: null,
        to: null,
        formData: {}
    }
    
    handleSubmit(e, {formData}) {
        e.preventDefault();
        const submitData = formData;
        submitData.listingFrom = this.state.from;
        submitData.listingTo = this.state.to;
        console.log(submitData);
        $.ajax({
            type: 'POST',
            url: API_SERVER_URL + 'meals',
            data: submitData,
            success: (data) => {
                console.log(data);
            },
            error: (error) => {
                alert("error");
            }
        });
        // this.setState(submitData, (prevState, props) => {
        //     console.log(submitData);
        // });
    }
    handleDayClick(e, day) {
        const range = DateUtils.addDayToRange(day, this.state);
        this.setState(range);
    }
    
    handleResetClick(e) {
        e.preventDefault();
        this.setState({
            from: null,
            to: null,
        });
    }
    
    render() {
        const { from, to } = this.state;
        return(
            <div className="container">
                <Form className="row content-area" onSubmit={this.handleSubmit}>
                    <Form.Input label='Listing Title' name='listingTitle' placeholder='Listing Title' required/>
                    <Form.Input label='Address' name='listingAddress' placeholder='Address' required />
                    <Form.Group widths='equal'>
                        <Form.Input label='City' name='listingCity' placeholder='City' required />
                        <Form.Select label='State' name='listingState' options={States} placeholder='Search State...' search required />
                        <Form.Input label='Zip Code' name='listingZipCode' placeholder='Zip Code' required />
                    </Form.Group>
                    <Form.Input name='listingPhone' label='Phone Number' placeholder='(xxx) xxx-xxxx' required />
                    <Form.Input name='listingWebsite' label='Website (Optional)' placeholder='Website (Optional)' />
                    <Form.Input name='listingCoverImage' label="Cover Image" type="file" accept="image/*" />
                    <Form.Input name='listingGalleryImages' label="Gallery Images" type="file" accept="image/*" />
                    <Form.TextArea name='listingDescription' label='Description' placeholder='Something that impress your customer'  />
                    <Form.Field 
                        control={DayPicker} 
                        numberOfMonths={ 2 }
                        selectedDays={ day => DateUtils.isDayInRange(day, { from, to }) }
                        onDayClick={ this.handleDayClick }
                        label="Available Day" required>
                    </Form.Field>
                    <Button type='submit' primary animated='fade'>
                        <Button.Content visible>
                            Submit
                        </Button.Content>
                        <Button.Content hidden>
                            Let's Rock
                        </Button.Content>
                    </Button>
                </Form>
            </div>
        )
    }
}

export default ListingForm;