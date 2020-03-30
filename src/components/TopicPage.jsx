import React, { Component } from 'react'
import TopicForm from './TopicForm'
import TopicList from './TopicList'
import { getAll, addNew, deleteOne } from '../services/restclient';
import moment from 'moment';
import numberFormat from 'react-number-format';


export default class TopicPage extends Component {
    state = {
        id: 0,
        title: '',
        description: '',
        timetomaster: numberFormat,
        timespent: numberFormat,
        source: '',
        startdate: moment,
        inprogress: {value:true},
        completiondate: moment,
        topics: []
    };

    componentDidMount = () => {
        this.updateView();
    }

    updateView() {
        getAll().then(topics => {
            this.setState({ topics });
        }).catch(err => {
            console.error("Caught an error", err);
            this.setState({ error: err.message })
        });
    }

    newTopic = (t) => {
        addNew(t)
            .then((res) => {
            this.updateView();
        });
    }

    removeOne = (id) => {
        deleteOne(id)
            .then((response) => {
                this.updateView();
            });
    }

    render() {
        return (
            <div className="page">
                < TopicForm newTopic={this.newTopic} />
                <br /><br />
                < TopicList topics={this.state.topics} removeOne={this.removeOne} />
            </div>
        )
    }
}
