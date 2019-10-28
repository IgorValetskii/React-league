import React from 'react';
import UsersData from "../data/UsersData";
import {User} from "../interfaces/user";
import UserItem from "../data/UserDataItem";

interface Props {

}

const UserList = () => {
    function ShowForm() {
       alert('1')
    }

    return (
        <div>
         <ul className="list-group">
             Users
             {UsersData.map(user => (
                <UserItem key={user.id}
                    user={{name: user.name, surname: user.surname, id: user.id}}/>
             ))}
         </ul>

            <button onClick={()=>ShowForm()}>Add User</button>
        </div>
        );
}

export default UserList
// interface Props {
//     value : any
// }
//
// interface State {
//     flags? : boolean
//     tags?: string[]
// }
//
//
// class Users extends React.Component <State, any>{
//     constructor(props:any){
//         super(props);
//     this.state = {
//         flags : false
//     }
// }
//
// handleClick(){
//         this.setState({
//             flags: !this.state.flags
//             }
//         );
// }
//
//
// render() {
//         let list;
//         if (this.state.flags === true){
//           list = <p>list of users</p>
//         }
//         return (
//             <div>
//                 <button onClick={()=> this.handleClick()}>Show users</button>
//                 { console.log(this.state)}
//                <div>{list}</div>
//             </div>
//         );
//     }
// }
