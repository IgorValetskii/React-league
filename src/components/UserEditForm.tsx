import React from "react";
import {Form, Input} from "@rocketseat/unform";
import {Link} from "react-router-dom";

class UserEditForm extends React.Component<any> {
    constructor(props: any) {
        super(props);

    }


    handleSubmit() {

    }

    render() {
        const initialData = {
            name: 'Vasya',
            surname: 'Pupkin',
            username: 'Pup'
        }
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

export default UserEditForm