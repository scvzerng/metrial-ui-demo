//noinspection JSDuplicatedDeclaration
import React, {Component} from 'react'
import * as ReactDOM from "react-dom";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Tabs as ScrollTabs, Tab as ScrollTab } from 'material-ui-scrollable-tabs/Tabs';
import injectTapEventPlugin from 'react-tap-event-plugin';
const style = {
    margin: 12,
};
//noinspection JSDuplicatedDeclaration
import {Tabs, Tab} from 'material-ui/Tabs';
// From https://github.com/oliviertassinari/react-swipeable-views
import SwipeableViews from 'react-swipeable-views';
injectTapEventPlugin();
const styles = {
    headline: {
        fontSize: 24,
        paddingTop: 16,
        marginBottom: 12,
        fontWeight: 400,
    },
    slide: {
        padding: 10,
    },
};

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            slideIndex: 0,
        };
    }

    handleChange = value => {


        this.setState({
            slideIndex: value,
        });
    };


    render() {
        return (
            <div>
                <ScrollTabs
                    tabType={'scrollable-buttons'}
                    initialSelectedIndex={1}
                    onChange={this.handleChange}
                    value={this.state.slideIndex}
                >
                    <ScrollTab label="Tab One" value={0} />
                    <ScrollTab label="Tab Two" value={1} />
                    <ScrollTab label="Tab Three" value={2} />
                </ScrollTabs>
                <SwipeableViews
                    index={this.state.slideIndex}
                    onChangeIndex={this.handleChange}
                    enableMouseEvents={true}
                >
                    <div>
                        <h2 style={styles.headline}>Tabs with slide effect</h2>
                        Swipe to see the next slide.<br />
                    </div>
                    <div style={styles.slide}>
                        slide n°2
                    </div>
                    <div style={styles.slide}>
                        slide n°3
                    </div>
                </SwipeableViews>
            </div>
        );
    }
}


ReactDOM.render(<MuiThemeProvider><App/></MuiThemeProvider>,document.getElementById("root"));