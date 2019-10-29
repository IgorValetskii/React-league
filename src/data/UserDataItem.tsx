import React from "react";
import {User} from '../interfaces/user';

interface Props {
   user:User;
}
class UserItem extends React.Component<any> {
    constructor(props: Props) {
        super(props);

    }

   Show(){
        alert(this.props.user.name)
    }
    render(){
        return(
            <li className="list-group-item list-group-item-action" onClick={()=>this.Show()} >{this.props.user.name} {this.props.user.surname}</li>
        );
    }
}

export default UserItem;


// const UserItem = ({user}:Props) => {
//
//     function Show() {
//         alert(user.name)
//     }
//
//     return <li className="list-group-item list-group-item-action" onClick={()=>Show()} >{user.name} {user.surname}</li>;
// };