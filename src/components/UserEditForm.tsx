import React from "react";
import {Form, Input} from "@rocketseat/unform";
import {Link} from "react-router-dom";
import {getAsyncUserInfo} from "../store/actions/actions";
import {connect} from "react-redux";
import UserList from "./UserList";

class UserEditForm extends React.Component<any> {
    constructor(props: any) {
        super(props);

    }

    componentWillMount(): void {
        this.props.getUserInfo();
    }

    handleSubmit() {
    }

    render() {
        console.log(this.props);
        const initialData = {
            name: this.props.user.name,
            surname: this.props.user.surname,
            username: this.props.user.username
        };
        return (
            <Form onSubmit={this.handleSubmit} initialData={initialData}>
                <p>Firstname:</p>
                <Input name="name"/>
                <p>Surname:</p>
                <Input name="surname"/>
                <p>Username:</p>
                <Input name="username"/>

                <button type="submit">Edit User</button>
                <Link to="/users">
                    <button>Return</button>
                </Link>
            </Form>
        );
    }
}

const putStateToProps = (state: any) => ({
    user: state.user
});

const putActionsToProps = (dispatch: any) => {
    return {
        getUserInfo: () => {dispatch(getAsyncUserInfo())}
        // changeName1: bindActionCreators(changeName, dispatch),
        // changeSurname1: bindActionCreators(changeSurname, dispatch)
    };
};

export default connect(putStateToProps, putActionsToProps)(UserEditForm);