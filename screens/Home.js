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
        <Text>You have {this.props.subjects.current.length} subjects.</Text>
        <Button
          title="Select more subjects"
          onPress={() => this.props.navigation.navigate('subjects')}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  const {subjects} = state;
  return {subjects};
};

export default connect(mapStateToProps)(Home);
