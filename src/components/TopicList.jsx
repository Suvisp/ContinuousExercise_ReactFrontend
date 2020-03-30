import React, { Component } from 'react';
import TopicContent from './TopicContent';

export default class TopicList extends Component {

    render() {
        var topiclist = this.props.topics.map((t, ind) => {
            return (<TopicContent id={t.id} key={t.id} topic={t} removeTopic={this.props.removeOne} />)
        })
        return (
            <table className="list">
                <thead>
                    <tr>
                        <th>Topic id</th><th>Title</th><th>Desription</th><th>Time to master (h)</th><th>Time spent (h)</th><th>Source</th><th>Start date</th><th>In progress</th><th>Completion date</th><th>Edit</th><th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {topiclist}
                </tbody>    
            </table>
        );
    }
}
