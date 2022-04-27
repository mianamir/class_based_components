import { Fragment, useState, useEffect, Component } from "react";

import Users from './Users';
import UsersContext from '../store/users-context';
import classes from './UserFinder.module.css';

class UserFinder extends Component{

    static contextType = UsersContext;

    constructor(){
        super();
        this.state = {
            filteredUsers: [],
            searchTerm: ''

        };
    } // constructor ends

    componentDidMount(){
        // Send http request
        this.setState({ filteredUsers: this.context.users });
    }

    

    componentDidUpdate(prevProps, prevState){
        if (prevState.searchTerm !== this.state.searchTerm){
            this.setState({
                filteredUsers: this.context.users.filter((user) => 
                    user.name.includes(this.state.searchTerm)),
                
            });
        }
        
    }

    searchChangeHandler(event){
        this.setState({searchTerm: event.target.value});
    }

    render(){
       return (
            <Fragment>
            <input className={classes.finder} 
                    type='search' 
                    onChange={this.searchChangeHandler.bind(this)} />

            <Users users={this.state.filteredUsers} />
           </Fragment>
       );
    }

} // class ends


// const UserFinder = () => {

//     const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);

//     const [searchTerm, setSearchTerm] = useState('');

//     useEffect(() => {
//         setFilteredUsers(
//             DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
//         );
//     }, [searchTerm]);

//     const searchChangeHandler = (event) => {
//         setSearchTerm(event.target.value);
//     }

//     return (
//         <Fragment>
//           <input className={classes.finder} type='search' onChange={searchChangeHandler} />
//           <Users users={filteredUsers} />
//         </Fragment>
//       );

// };

export default UserFinder;