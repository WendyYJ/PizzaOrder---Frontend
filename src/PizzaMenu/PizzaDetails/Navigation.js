import React from 'react';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
/*
import { SearchBar } from 'react-native-elements';

export default class App extends React.Component {
  state = {
    search: '',
  };

  updateSearch = search => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;

    return (
      <nav>
      <SearchBar
        placeholder="Type Here..."
        onChangeText={this.updateSearch}
        value={search}
      />
      </nav>
    );
  }
}
*/


function Navigation(){
   return (
     <nav>
        <p>Search</p>
        <AccessAlarmIcon color='secondary' />
        
     </nav>

   );
  }
 export default Navigation;
 
