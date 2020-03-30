import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom';
import { IoIosTrash } from "react-icons/io";


export default class TopicContent extends Component {
    link = "";
    constructor(props) {
        super(props);
        this.link = "/edit/" + this.props.topic.id;
        this.state = {
        }
    }

    removeTopic = () => {
        this.props.removeTopic(this.props.topic.id);
    }

    render() {

            return (
            <Fragment>
                <tr className="topics">
                    <td>{this.props.topic.id}</td>
                    <td>{this.props.topic.title}</td>
                    <td>{this.props.topic.description}</td>
                    <td>{this.props.topic.timetomaster}</td>
                    <td>{this.props.topic.timespent}</td>
                    <td>{this.props.topic.source}</td>
                    <td>{this.props.topic.startdate}</td>
                    <td>{this.props.topic.inprogress ? 'Yes' : 'No'}</td>
                    <td>{this.props.topic.completiondate}</td>
                    <td><span><Link to={this.link}>📝</Link></span></td>
                    <td><span onClick={this.removeTopic} ><IoIosTrash /></span></td>
                </tr>
            </Fragment>
        )
    }
}