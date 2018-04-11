import React, {Component} from 'react';
import {
    Button,
    View,
    Text,
    ScrollView,
    Image,
    StyleSheet
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator'
import Home from "./screen/home"
import Calender from "./screen/calender"
import User from "./screen/user"

export default class MainScreen extends Component {

    static navigationOptions = {
        title: 'OfferBar',
    }

    constructor(props){
        super(props);









        this.state = {
            selectedTab: 'home',
        }

    }

    render(){
        const {navigate} = this.props.navigation;
        return (
            <TabNavigator >
                <TabNavigator.Item
                    selected={this.state.selectedTab == 'home'}
                    renderIcon={() => <Image style={{width: 30, height: 30}} source={require("../statics/icon/home.png")}/>}
                    renderSelectedIcon={() => <Image style={{width: 30, height: 30}} source={require("../statics/icon/home-active.png")}/>}
                    selectedTitleStyle={{color: '#27be9f'}}
                    onPress={() => this.setState({selectedTab: 'home'})}
                    title="首页">
                    <Home {...this.props}/>

                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab == 'calender'}
                    renderIcon={() => <Image style={{width: 30, height: 30}} source={require("../statics/icon/calender.png")}/>}
                    renderSelectedIcon={() => <Image style={{width: 30, height: 30}} source={require("../statics/icon/calender-active.png")}/>}
                    selectedTitleStyle={{color: '#27be9f'}}
                    onPress={() => this.setState({selectedTab: 'calender'})}
                    title="宣讲日历">
                    <Calender/>

                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab == 'me'}
                    renderIcon={() => <Image style={{width: 30, height: 30}} source={require("../statics/icon/me.png")}/>}
                    renderSelectedIcon={() => <Image style={{width: 30, height: 30}} source={require("../statics/icon/me-active.png")}/>}
                    selectedTitleStyle={{color: '#27be9f'}}
                    onPress={() => this.setState({selectedTab: 'me'})}
                    title="我的">

                    <User/>

                </TabNavigator.Item>

            </TabNavigator>
        )
    }
}
