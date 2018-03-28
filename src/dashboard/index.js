import React, { Component } from 'react'
import PropTypes from 'prop-types'

// If you were testing, you'd want to export this component
// so that you can test your custom made component and not
// test whether or not Redux and Redux Form are doing their jobs
class Dashboard extends Component {
    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    }

    render() {
        const {  location } = this.props

        return (
            <div>You are now at {location.pathname}</div>

        )
    }
}
export default Dashboard