import React, {Component} from 'react';
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';

class Time extends Component {
    
    constructor(props) {
        super(props);
        this.handleDayClick = this.handleDayClick.bind(this);
    }
    
    state = {
        from: null,
        to: null,
        avaiFrom: new Date(),
        avaiTo: new Date(),
    };
    
    componentWillReceiveProps(props) {
        this.setState({
            avaiFrom: new Date(props.from),
            avaiTo: new Date(props.to)
        });
    }
    
    handleDayClick(e, day) {
        const range = DateUtils.addDayToRange(day, this.state);
        this.setState(range);
    }
    
    render() {
        const { from, to, avaiFrom, avaiTo } = this.state;
        return (
            <aside className="widget widget-job_listing listify_widget_panel_listing_business_hours">
                <h1 className="widget-title widget-title-job_listing ion-ios-clock-outline">Opening Days</h1>
                <DayPicker
                    disabledDays={ day => !DateUtils.isDayBetween(day, avaiFrom, avaiTo) }
                    selectedDays={ day => DateUtils.isDayInRange(day, { from, to }) }
                    onDayClick={ this.handleDayClick }
                />
            </aside>
        )
    }
}

export default Time;