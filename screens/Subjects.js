import React from 'react';
import {connect} from 'react-redux';
import {StyleSheet, Text, View, Button} from 'react-native';
import {addUser} from '../redux/actions';
import axios from 'axios';

class Subjects extends React.Component {
  state = {
    users: [],
  };

  componentDidMount() {
    axios('https://jsonplaceholder.typicode.com/users')
      .then(({data}) => {
        this.setState({users: data});
      })
      .catch(err => {
        console.log(err.response);
        console.log(err);
      });
  }

  render() {
    return (
      <View>
        <Text>Select Subjects Below!</Text>

        {this.state.users.map((user, index) => (
          <Button
            key={user.id}
            title={`Add ${user.name}`}
            onPress={() => this.props.dispatch(addUser(user))}
          />
        ))}

        <Button
          title="Back to home"
          onPress={() => this.props.navigation.navigate('home')}
        />
        <Text>You have {this.props.users.users.length} subjects.</Text>
      </View>
    );
  }
}

//...

const mapStateToProps = state => {
  const {users} = state;
  return {users};
};

export default connect(mapStateToProps)(Subjects);
