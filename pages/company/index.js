import React, {Component} from 'react'

import {
    Alert,
    View,
    Text,
    Image,
    TouchableHighlight,
    StyleSheet,
    ScrollView
} from "react-native"
import Video from "react-native-video"
// import {} from "react-native-baidu-map"
import MapView from 'react-native-maps'
import pubStyles from "../../statics/style/styles_pub"

export default class Company extends Component{
    static navigationOptions = ({navigation}) => {
        var {name} = navigation.state.params;
        return {title: name}
    }
    constructor(props){
        super(props);

        this.state = {
            showPanel: "home",  //home:公司主页   preach: 宣讲信息   jobs: 校招岗位
            // mapType: MapTypes.NORMAL,
            zoom: 15,
            center: {
                longitude: 113.981718,
                latitude: 22.542449
            },
            trafficEnabled: false,
            baiduHeatMapEnabled: false,
            markers: [{
                longitude: 113.981718,
                latitude: 22.542449,
                title: "Window of the world"
            },{
                longitude: 113.995516,
                latitude: 22.537642,
                title: ""
            }]
        }
    }

    componentWillMount(){
        var {name} = this.props.navigation.state.params;
    }
    switchPanel(panel){
        this.setState({
            showPanel: panel
        })
    }

    loadStart(){
        console.log("loadStart")
    }

    setDuration(){
        console.log("setDuration")
    }
    setTime(){
        console.log("setTime")
    }
    onEnd(){
        console.log("onEnd")
    }
    videoError(){
        console.log("videoError")
    }
    onBuffer(){
        console.log("onBuffer")
    }
    onTimedMetadata(){
        console.log("onTimedMetadata")
    }

    render(){
        return (
            <ScrollView style={{flex: 1, backgroundColor: '#fff'}}>
                <View style={[styles.compHead]}>
                    <View style={styles.compVideo}>
                        <Video
                            source={require("../../statics/mv/20160101souhu5mix.mp4")}
                            ref={(ref) => {
                            this.player = ref;
                        }}
                            rate={1.0}
                            volume={1.0}
                            muted={false}
                            paused={false}
                            resizeMode="cover"
                            repeat={true}
                            playInBackground={false}
                            playWhenInactive={false}
                            ignoreSilentSwitch={"ignore"}
                            progressUpdateInterval={250.0}
                            onLoadStart={this.loadStart}
                            onLoad={this.setDuration}
                            onProgress={this.setTime}
                            onEnd={this.onEnd}
                            onError={this.videoError}
                            onBuffer={this.onBuffer}
                            onTimedMetadata={this.onTimedMetadata}
                            style={styles.backgroundVideo}/>


                    </View>
                    <View style={{position: 'relative', paddingLeft: 80, paddingTop: 20, paddingBottom: 20}}>
                        <View style={[styles.logoWrap]}>
                            <Image source={require("../../statics/images/timg.jpg")} style={[pubStyles.fill]} />
                        </View>
                        <View>
                            <View>
                                <Text>北京畅游天下网络技术有限公司</Text>
                            </View>
                            <View style={[{marginTop: 15}]}>
                                <Text>北京 | 2000人以上</Text>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={styles.compCont}>
                    <View style={[pubStyles.tabWrap]}>
                        <View style={[pubStyles.tabItem, this.state.showPanel == "home"? pubStyles.tabActive:{}]}>
                            <TouchableHighlight underlayColor="#FFF" onPress={this.switchPanel.bind(this, "home")} style={[pubStyles.fill, pubStyles.flexcenter]}>
                                <Text style={[this.state.showPanel == "home" ? pubStyles.activeText:{}]}>公司主页</Text>
                            </TouchableHighlight>

                            <View style={pubStyles.tabSlider}></View>
                        </View>

                        <View style={[pubStyles.tabItem,  this.state.showPanel == "preach"? pubStyles.tabActive:{}]}>
                            <TouchableHighlight underlayColor="#FFF" onPress={this.switchPanel.bind(this, "preach")} style={[pubStyles.fill, pubStyles.flexcenter]}>
                                <Text style={[this.state.showPanel == "preach" ? pubStyles.activeText:{}]}>宣讲信息</Text>
                            </TouchableHighlight>
                            <View style={pubStyles.tabSlider}></View>
                        </View>

                        <View style={[pubStyles.tabItem,  this.state.showPanel == "jobs"? pubStyles.tabActive:{}]}>
                            <TouchableHighlight underlayColor="#FFF" onPress={this.switchPanel.bind(this, "jobs")} style={[pubStyles.fill, pubStyles.flexcenter]}>
                                <Text style={[this.state.showPanel == "jobs" ? pubStyles.activeText:{}]}>校招岗位</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                    {
                        this.state.showPanel == "home" &&
                        <View>
                            <View style={styles.compIntro}>
                                <View>
                                    <Text>公司介绍</Text>
                                </View>
                                <View style={{marginTop: 20}}>
                                    <Text>畅游公司(NASDAQ：CYOU)是中国领先的互联网游戏开发和运营商，于2009年4月在纳斯达克全球精选市场上市。公司致力于多元化的网络游戏开发、运营和授权代理，以"好游戏、大IP、大发行"为发展目标，秉承着匠人精神，畅游公司在中国网络游戏领域扮演着重要的角色。</Text>
                                </View>
                            </View>
                            <View style={styles.compManager}>
                                <View style={[pubStyles.borderBottom, {padding: 10}]}>
                                    <Text>团队管理</Text>
                                </View>
                                <View style={styles.teamIntro}>
                                    <View style={styles.teamAvatar}>
                                        <Image source={require("../../statics/images/timg.jpg")} style={[pubStyles.fill]} />
                                    </View>
                                    <View>
                                        <Text>陈德文</Text>
                                    </View>
                                    <View style={{marginTop: 10}}>
                                        <Text>现任搜狐畅游CEO</Text>
                                    </View>
                                </View>
                            </View>

                            <View style={styles.compManager}>
                                <View style={[pubStyles.borderBottom, {padding: 10}]}>
                                    <Text>公司地址</Text>
                                </View>

                                {/*<MapView*/}
                                    {/*initialRegion={{*/}
                                      {/*latitude: 37.78825,*/}
                                      {/*longitude: -122.4324,*/}
                                      {/*latitudeDelta: 0.0922,*/}
                                      {/*longitudeDelta: 0.0421,*/}
                                    {/*}}*/}
                                {/*/>*/}
                            </View>
                        </View>

                    }
                    {
                        this.state.showPanel == "preach" &&
                        <View>
                            <View style={styles.preachInfo}>
                                <View>
                                    <Text>宣讲信息</Text>
                                </View>
                                <View style={{marginTop: 20}}>
                                    <Text>畅游公司(NASDAQ：CYOU)是中国领先的互联网游戏开发和运营商，于2009年4月在纳斯达克全球精选市场上市。公司致力于多元化的网络游戏开发、运营和授权代理，以"好游戏、大IP、大发行"为发展目标，秉承着匠人精神，畅游公司在中国网络游戏领域扮演着重要的角色。</Text>
                                </View>
                            </View>

                        </View>
                    }

                    {
                        this.state.showPanel == "jobs" &&
                        <View>
                            <View style={styles.jobList}>
                                <View style={styles.jobItem}>
                                    <View>
                                        <Text>游戏策划 <Text>全职·实习</Text> </Text>
                                        <Text style={{position: "absolute", top: 0,right: 10}}>5人</Text>
                                    </View>
                                    <View style={{marginTop: 20}}>
                                        <Text>北京 | 学历不限</Text>
                                    </View>

                                </View>
                            </View>
                        </View>
                    }


                </View>

            </ScrollView>
        )
    }
}

var styles = StyleSheet.create({
    compHead: {
        borderBottomWidth: 15,
        borderBottomColor: "#eeeeee"
    },
    compCont: {
        borderBottomWidth: 15,
        borderBottomColor: "#eeeeee"
    },
    compVideo: {
        width: '100%',
        height: 150
    },
    compIntro: {
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 35,
        paddingRight: 35,
        borderBottomColor: "#eee",
        borderBottomWidth: 15
    },
    compManager: {
        paddingLeft: 10,
        paddingRight: 10,
        borderBottomColor: "#eee",
        borderBottomWidth: 15
    },
    teamIntro: {
        paddingTop: 20,
        paddingRight: 15,
        paddingBottom: 15,
        paddingLeft: 100,
        position: "relative",
        minHeight: 100
    },
    teamAvatar: {
        width: 60,
        height: 60,
        position: "absolute",
        top: 14,
        left: 15,
        borderRadius: 30,
        overflow: "hidden"
    },
    preachInfo: {
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 35,
        paddingRight: 35,
        borderBottomColor: "#eee",
        borderBottomWidth: 15
    },
    jobList: {
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 10,
        paddingRight: 10
    },
    jobItem: {
        borderBottomColor: "#dcdcdc",
        borderBottomWidth: 1,
        position: "relative",
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 20,
        paddingRight: 20
    },
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    logoWrap:{
        width: 60,
        height: 60,
        borderRadius: 30,
        overflow: "hidden",
        position: "absolute",
        left: 10,
        top: 10
    },
    map: {
        width: 500,
        height: 300,
        marginBottom: 16
    }
})