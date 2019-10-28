import React from 'react';

interface Props {
    value : any
}

interface State {
    flags? : boolean
    tags?: string[]
}


class Users extends React.Component <State, any>{
    constructor(props:any){
        super(props);
    this.state = {
        flags : false
    }
}

handleClick(){
        this.setState({
            flags: !this.state.flags
            }
        );
}


render() {
        let list;
        if (this.state.flags === true){
          list = <p>list of users</p>
        }
        return (
            <div>
                <button onClick={()=> this.handleClick()}>Show users</button>
                { console.log(this.state)}
               <div>{list}</div>
            </div>
        );
    }
}

export default Users