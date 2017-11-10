import React from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
////////////// MATERIAL-UI IMPORTS ///////////////////
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class DeletePlan extends React.Component {

    componentDidMount() {
        axios({
            method: 'delete',
            url: `/api/plans/${this.props.plan._id}`
        }).then((plan) => {
            if (plan) {
                this.props.onDeleteSuccess()
            }
        })
    }

    render() {
        return <Redirect to="/login" />
    }
}

export default DeletePlan;