import React from 'react';
import {connect} from 'react-redux';
import {StyleSheet, Text, View, Button} from 'react-native';

class Subjects extends React.Component {
  render() {
    return (
      <View s>
        <Text>My Subjects!</Text>
      </View>
    );
  }
}

//...

const mapStateToProps = state => {
  const {subjects} = state;
  return {subjects};
};

export default connect(mapStateToProps)(Subjects);
