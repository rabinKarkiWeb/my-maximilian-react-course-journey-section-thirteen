import {   Component } from 'react';
import styles from './UserFinder.module.css';
import Users from './Users';
const DUMMY_USERS = [
	{ id: 'u1', name: 'Max' },
	{ id: 'u2', name: 'Manuel' },
	{ id: 'u3', name: 'Julie' },
];
class UserFinder extends Component {

  constructor() {
	super();
	this.state = {
	  filteredUsers: [],
	  searchTerm: '',
	};
  }
  componentDidMount() {
	// Send http request...
	this.setState({ filteredUsers: DUMMY_USERS });
  }
  componentDidUpdate(prevProps, prevState) {
	if (prevState.searchTerm !== this.state.searchTerm) {
	  this.setState({
		filteredUsers: DUMMY_USERS.filter((user) =>
		  user.name.includes(this.state.searchTerm)
		),
	  });
	}
  }
  searchChangeHandler(event) {
	this.setState({ searchTerm: event.target.value });
  }
  render() {
	return (
	  <div style={{textAlign:"center"}}>
		<input type='search' className={styles.finder} onChange={this.searchChangeHandler.bind(this)} />
		<Users users={this.state.filteredUsers} />
	  </div>
	);
  }
}

// const UserFinder = () => {
// 	const DUMMY_USERS = [
//   { id: 'u1', name: 'Max' },
//   { id: 'u2', name: 'Manuel' },
//   { id: 'u3', name: 'Julie' },
// ];
// 	const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
// 	const [searchTerm, setSearchTerm] = useState('');
//
// 	useEffect(() => {
// 		setFilteredUsers(
// 			DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
// 		);
// 	}, [searchTerm]);
//
// 	const searchChangeHandler = (event) => {
// 		setSearchTerm(event.target.value);
// 	};
//
// 	return (
// 		<div style={{textAlign:"center"}}>
// 			<input type='search' className={styles.finder} onChange={searchChangeHandler} />
// 			<Users users={filteredUsers} />
// 		</div>
// 	);
// };

export default UserFinder;