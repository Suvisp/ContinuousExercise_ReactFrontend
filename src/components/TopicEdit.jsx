import React, { Component } from 'react';
import { getOne, editOne } from '../services/restclient';
import moment from 'moment';
import numberFormat from 'react-number-format';

export default class TopicEdit extends Component {
    constructor(props) {
        super(props);
        const id = this.props.match.params["id"];
        this.state = { topics: { id: 0, title: '', description: '', timetomaster: numberFormat, timespent: numberFormat, source: '', startdate: moment, inprogress: true, completiondate: moment }, id: id };
    }

    componentDidMount() {
        getOne(this.state.id).then(topics => {
            this.setState({ topics });
        })
    }

    titleChange = (ev) => {
        let title = ev.target.value
        this.setState(prevState => {
            return { topics: { ...prevState.topics, title: title } }
        })
    }

    descriptionChange = (ev) => {
        let description = ev.target.value
        this.setState(prevState => {
            return { topics: { ...prevState.topics, description: description } }
        })
    }

    timetomasterChange = (ev) => {
        let timetomaster = ev.target.value
        this.setState(prevState => {
            return { topics: { ...prevState.topics, timetomaster: timetomaster } }
        })
    }

    timespentChange = (ev) => {
        let timespent = ev.target.value
        this.setState(prevState => {
            return { topics: { ...prevState.topics, timespent: timespent } }
        })
    }

    sourceChange = (ev) => {
        let source = ev.target.value
        this.setState(prevState => {
            return { topics: { ...prevState.topics, source: source } }
        })
    }

    startdateChange = (ev) => {
        let startdate = ev.target.value
        this.setState(prevState => {
            return { topics: { ...prevState.topics, startdate: startdate } }
        })
    }

    inprogressChange = (ev) => {
        let inprogress = ev.target.value
        this.setState(prevState => {
            return { topics: { ...prevState.topics, inprogress: inprogress } }
        })
    }

    completiondateChange = (ev) => {
        let completiondate = ev.target.value
        this.setState(prevState => {
            return { topics: { ...prevState.topics, completiondate: completiondate } }
        })
    }

    update = () => {
        editOne(this.state.id, this.state.topics).then(() => {
            this.props.history.push("/")
        })
    }

    render() {
        return (
            <div className="form">
                <h3>Edit a topic</h3>
                <table>
                    <tbody>
                        <tr>
                            <td><label htmlFor="tTitle">Title: </label></td>
                            <td><input className="tTitle" value={this.state.topics.title} onChange={this.titleChange} /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="tDescription">Description: </label></td>
                            <td><input className="tDescription" value={this.state.topics.description} onChange={this.descriptionChange} /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="tTimetomaster">Time to master: </label></td>
                            <td><input className="tTimetomaster" value={this.state.topics.timetomaster} onChange={this.timetomasterChange} /></td>
                        </tr>
                        <tr>
                            <td> <label htmlFor="tSpent">Time spent: </label></td>
                            <td><input className="tSpent" value={this.state.topics.timespent} onChange={this.timespentChange} /></td>
                        </tr>
                        <tr>
                            <td> <label htmlFor="tSource">Source: </label></td>
                            <td> <input className="tSource" value={this.state.topics.source} onChange={this.sourceChange} /></td>
                        </tr>
                        <tr>
                            <td> <label htmlFor="tStartdate">Start date: </label></td>
                            <td> <input className="tStartdate" value={this.state.topics.startdate} onChange={this.startdateChange} /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="tInprogress">In progress:</label></td>
                            <td><select className="tInprogress" value={this.state.inprogress} onChange={this.inprogressChange}>
                                <option value="true">Yes</option>
                                <option value="false">No</option>
                            </select></td>
                        </tr>
                        <tr>
                            <td> <label htmlFor="tCompletiondate">Completion date: </label></td>
                            <td><input className="tCompletiondate" value={this.state.topics.completiondate} onChange={this.completiondateChange} /></td>
                        </tr>
                        <tr>
                            <td><input type="button" value="Save changes" onClick={this.update} /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}