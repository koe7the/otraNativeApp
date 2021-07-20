import React from 'react';
import {connect} from 'react-redux';
import {StyleSheet, Text, View, Button} from 'react-native';

class Home extends React.Component {
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    return (
      <View>
        <Text>You have {this.props.users.users.length} subjects.</Text>
        <Button
          title="Select more subjects"
          onPress={() => this.props.navigation.navigate('subjects')}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  let {users} = state;
  return {users};
};

export default connect(mapStateToProps)(Home);
