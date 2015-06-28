
var React = require('react-native');
var {
	AppRegistry,
	NavigatorIOS,
	StyleSheet,
	View,
	WebView,
	Text,
} = React;

var Index = React.createClass({

	render: function(){
		return(
			<View style={{flex:1}}>
				<WebView
					style={{flex:1,}}
					bounces={true}
					url={'http://m.ctrip.com'}
					/>
			</View>
		);
	}
});


module.exports = Index;