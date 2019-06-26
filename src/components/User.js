import React from 'react';
import { connect } from 'react-redux';
import { get_user } from './../actions/index'

class User extends React.Component {
    render() {
        const { get_user, user } = this.props
        return (
            <div>
                <h1 className="jumbotron-heading text-center">{user.email}</h1>
                <p className="text-center">
                    <button onClick={() => { get_user() }} className="btn btn-success mr-2">Get Random User</button>
                </p>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, { get_user })(User)
