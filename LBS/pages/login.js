
var React = require('react-native');
var Index = require('./index');
var Util = require('./util');


var {
  AppRegistry,
  NavigatorIOS,
  StyleSheet,
  View,
  Text,
  Image,
  TextInput, 
  TouchableHighlight,
  ScrollView,
  AsyncStorage,
} = React;


var logo = {
  uri: 'https://avatars1.githubusercontent.com/u/6133685?v=3&u=b30eea0e99ae19a132ae9d1f1b6eea1ddf286c78&s=140'
};

var Login = React.createClass({
  getInitialState: function() {
    return {
      username: '',
      pwd: '',
    };
  },

  componentDidMount: function(){
    var _that = this;
    AsyncStorage.multiGet(['user', 'token'], function(errs, values){
        if(!errs){
          //二维数组转对象
          var obj = Util.arr2Obj(values);
          //如果已经登录则直接登录
          if(obj.user && obj.token){
            setTimeout(function(){
              _that._goMainPage();
            }, 300);
          }
        }
    });
  },

  render: function(){
    return (
      <View style={styles.container} >

        <View>
          <Image style={styles.logo} source={logo}></Image>
        </View>

        <View style={styles.row}>
          <Text style={styles.text}>
            用户名
          </Text>
          <TextInput style={styles.input} onEndEditing={this._getUserName}/>
        </View>

        <View style={styles.row}>
          <Text style={styles.text}>
            密码
          </Text>
          <TextInput style={styles.input} password={true} onChange={this._getPassword}/>
        </View>

        <TouchableHighlight underlayColor="#FFF" onPress={this._submit}>
          <View style={styles.button}>
            <Text style={styles.bt}>登录</Text>
          </View>
        </TouchableHighlight>
        
      </View>
    );
  },

  _getUserName: function(event){
    this.setState({
      username: event.nativeEvent.text
    });
  },

  _getPassword: function(event){
    this.setState({
      pwd: event.nativeEvent.text
    });
  },

  _submit: function(){
    var username = this.state.username;
    var password = this.state.pwd;

    var _that = this;
    if(username == 'wlh' && password == '123'){
      AsyncStorage.multiSet([['user', 'wlh'], ['token', '123']], function(errs){
        if(!errs){
          _that._goMainPage();
        }
      });
    }

  },
  _goMainPage: function(){
    this.props.navigator.push({
      title: "首页",
      component: Index,
      leftButtonTitle:" "
    });
  }

});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:64,
    alignItems: 'center',
  },
  logo:{
    width:80,
    height:80,
    marginTop:30,
    borderRadius:40,
  },
  row:{
    flexDirection:'row',
    alignItems: 'center',
    marginTop:10,
  },
  input:{
    width:200,
    height:35,
    borderWidth:1,
    borderColor:'#ccc',
    paddingLeft:5,
    borderRadius:3,
  },
  text:{
    width:55,
    fontSize:16,
  },
  button:{
    width:65,
    height:35,
    backgroundColor:'#1DB8FF',
    borderWidth:1,
    borderColor:'#1DB8FF',
    borderRadius:3,
    color:'#fff',
    marginTop: 20,
    alignItems:'center',
    justifyContent:'center'
  },
  bt:{
    color:'#fff'
  }
  
});

module.exports = Login;
