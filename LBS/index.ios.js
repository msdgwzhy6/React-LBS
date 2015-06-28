
var React = require('react-native');
var Login = require('./pages/login');


var {
  AppRegistry,
  NavigatorIOS,
  StyleSheet,
  PixelRatio,
  View,
  Text,
  ScrollView,
  TouchableHighlight,
} = React;

var APP = React.createClass({
  render: function(){
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          component: Login,
          title: '登录'
        }}
      />
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex:1,
    
  },
});

AppRegistry.registerComponent('LBS', () => APP);
