import React, {Component} from 'react'
import * as ReactDOM from "react-dom";
import FlatButton from 'material-ui/FlatButton';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
const style = {
    margin: 12,
};
export default class App extends Component{
    render(){
        return (
            <FlatButton
                icon={<ActionAndroid />}
                style={style}
            />

      );
    }
}



ReactDOM.render(<MuiThemeProvider><App/></MuiThemeProvider>,document.getElementById("root"));