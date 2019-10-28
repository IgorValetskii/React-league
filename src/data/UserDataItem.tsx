import React from "react";
import {User} from '../interfaces/user';

interface Props {
   user:User;
}
const UserItem = ({user}:Props) => {

    function Show() {
        alert(user.name)
    }

    return <li className="list-group-item list-group-item-action" onClick={()=>Show()} >{user.name} {user.surname}</li>;
};
export default UserItem;
