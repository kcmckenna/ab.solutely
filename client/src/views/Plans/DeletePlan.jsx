import React from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
////////////// MATERIAL-UI IMPORTS ///////////////////

////////////////////////////////////////////////////

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