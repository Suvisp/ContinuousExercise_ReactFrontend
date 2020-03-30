import React, { Component } from 'react';
import moment from 'moment';
import numberFormat from 'react-number-format';

export default class TopicForm extends Component {
    state = {
        title: "",
        description: "",
        timetomaster: numberFormat,
        timespent: numberFormat,
        source: "",
        startdate: moment,
        inprogress: {value:true},
        completiondate: moment,
        id: 0
    }

    titleChange = (ev) => {
        this.setState({ title: ev.target.value });
    }

    descriptionChange = (ev) => {
        this.setState({ description: ev.target.value });
    }

    timetomasterChange = (ev) => {
        this.setState({ timetomaster: ev.target.value });
    }

    timespentChange = (ev) => {
        this.setState({ timespent: ev.target.value });
    }

    sourceChange = (ev) => {
        this.setState({ source: ev.target.value });
    }

    startdateChange = (ev) => {
        this.setState({ startdate: ev.target.value });
    }

    inprogressChange = (ev) => {
        this.setState({ inprogress: ev.target.value });
    }

    completiondateChange = (ev) => {
        this.setState({ completiondate: ev.target.value });
    }

    createTopic = (ev) => {
        ev.preventDefault();
        this.props.newTopic(this.state);
        this.setState({ title: '', description: '', timetomaster: numberFormat, timespent: numberFormat, source: '', startdate: moment, inprogress: true, completiondate: moment });
    }

    render() {
        return (
            <div className="form">
                <h3>Add study topics</h3>
                <table>
                    <tbody>
                        <tr>
                            <td><label htmlFor="tTitle">Title: </label></td>
                            <td><input className="tTitle" value={this.state.title} onChange={this.titleChange} /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="tDescription">Description: </label></td>
                            <td><input className="tDescription" value={this.state.description} onChange={this.descriptionChange} /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="tTimetomaster">Time to master: </label></td>
                            <td><input className="tTimetomaster" value={this.state.timetomaster} onChange={this.timetomasterChange} /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="tSpent">Time spent: </label></td>
                            <td><input className="tSpent" value={this.state.timespent} onChange={this.timespentChange} /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="tSource">Source: </label></td>
                            <td><input className="tSource" value={this.state.source} onChange={this.sourceChange} /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="tStartdate">Start date: </label></td>
                            <td><input className="tStartdate" value={this.state.startdate} onChange={this.startdateChange} /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="tInprogress">In progress:</label></td>
                            <td><select className="tInprogress" value={this.state.inprogress} onChange={this.inprogressChange}>
                                <option value={true}>Yes</option>
                                <option value={false}>No</option>
                            </select></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="tCompletiondate">Completion date: </label></td>
                            <td><input className="tCompletiondate" value={this.state.completiondate} onChange={this.completiondateChange} /></td>
                        </tr>
                        <tr>
                            <td><input type="button" value="Save" onClick={this.createTopic} /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}