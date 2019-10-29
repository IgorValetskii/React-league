import React from "react";
import { Form, Input } from '@rocketseat/unform';

// interface State {
//     login:string;
//     password:string;
// }

class UserForm extends React.Component<any> {
    constructor(props: any){
        super(props);
        // this.state = {login: '', password: ''};
    }

    handleSubmit(data: any){
        console.log(data)
    }

    render() {
        return(
            <Form onSubmit={this.handleSubmit}>
                <p>Firstname:</p>
                <Input name="firstname" />
                <p>Surname:</p>
                <Input name="surname" />
                <p>Username:</p>
                <Input name="username" />

                <button type="submit">Sign in</button>
            </Form>
        );
    }
}

export default UserForm;

