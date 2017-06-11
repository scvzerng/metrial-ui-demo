// @flow

//noinspection JSDuplicatedDeclaration

import { Menu, Icon,Popover } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
import React, {Component} from 'react'
import 'antd/dist/antd.css';
import * as ReactDOM from "react-dom";
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";
import css from "./main.css"
const style = {
    margin: 12,
};

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            slideIndex: 0,
            show:false
        };
    }
    handleChange = (value) => {


        this.setState({
            slideIndex: value,
        });
    };

    handleClick = (e,data)=>{
        console.log(data);
    }

    render() {
        return (
            <div>

                    <Menu
                        onClick={this.handleClick}
                        style={{ width: 240 }}
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        mode="inline"
                    >
                        <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>

                            <MenuItemGroup key="g1" title="Item 1">
                                <Menu.Item key="1">
                                    <ContextMenuTrigger id="some_unique_identifier" attributes={{
                                        onContextMenu:()=>{
                                            this.setState({
                                                show:true
                                            })
                                        }
                                    }}>
                                    Option 1
                                    </ContextMenuTrigger>
                                </Menu.Item>
                                <Menu.Item key="2">
                                    <ContextMenuTrigger id="some_unique_identifier" attributes={{
                                        onContextMenu:()=>{
                                           this.setState({
                                               show:true
                                           })
                                        }
                                    }}>
                                    Option 2
                                    </ContextMenuTrigger>
                                </Menu.Item>
                            </MenuItemGroup>
                            <MenuItemGroup key="g2" title="Item 2">
                                <Menu.Item key="3">Option 3</Menu.Item>
                                <Menu.Item key="4">Option 4</Menu.Item>
                            </MenuItemGroup>

                        </SubMenu>
                        <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigation Two</span></span>}>
                            <Menu.Item key="5">Option 5</Menu.Item>
                            <Menu.Item key="6">Option 6</Menu.Item>
                            <SubMenu key="sub3" title="Submenu">
                                <Menu.Item key="7">Option 7</Menu.Item>
                                <Menu.Item key="8">Option 8</Menu.Item>
                            </SubMenu>
                        </SubMenu>
                        <SubMenu key="sub4" title={<span><Icon type="setting" /><span>Navigation Three</span></span>}>
                            <Menu.Item key="9">Option 9</Menu.Item>
                            <Menu.Item key="10">Option 10</Menu.Item>
                            <Menu.Item key="11">Option 11</Menu.Item>
                            <Menu.Item key="12">Option 12</Menu.Item>
                        </SubMenu>
                    </Menu>
                <ContextMenu id="some_unique_identifier">
                    <MenuItem data={"some_data"} onClick={this.handleClick}>
                        ContextMenu Item 1
                    </MenuItem>
                    <MenuItem data={"some_data"} onClick={this.handleClick}>
                        ContextMenu Item 2
                    </MenuItem>
                    <MenuItem data={"some_data"} onClick={this.handleClick}>
                        ContextMenu Item 3
                    </MenuItem>
                </ContextMenu>
            </div>

        );
    }
}

ReactDOM.render(<App/>,document.getElementById("root"));