import React, {Component} from 'react';
import {
    Alert,
    Button,
    View,
    Text,
    TouchableHighlight,
    ScrollView,
    Image,
    StyleSheet
} from 'react-native';
import pubStyles from "../../statics/style/styles_pub"
import Swiper from 'react-native-swiper'

export default class Home extends Component{
    constructor(props){
        super(props);

        this.state = {
            homeTab: "company", //'company':热门公司 ; 'square':活动广场

        }

    }

    handleSwitch(panel){
        this.setState({
            homeTab: panel
        })
    }
    handleToCompany(){
        var {navigate} = this.props.navigation;
        // Alert.alert("to company");
        navigate("Company", {name: "搜狐畅游"})
    }

    render(){
        var {homeTab} = this.state;
        return (
            <ScrollView style={{flex: 1, backgroundColor: '#fff'}}>
                <View style={{height: 200}}>
                    <Swiper style={styles.wrapper}>
                        <View style={pubStyles.flexcenter}>
                            <Image style={pubStyles.fill} source={require('../../statics/images/banner/0569585243277259654.jpg')}/>
                        </View>
                        <View style={pubStyles.flexcenter}>
                            <Image style={pubStyles.fill} source={require('../../statics/images/banner/0569585405835599468.png')}/>
                        </View>
                        <View style={pubStyles.flexcenter}>
                            <Image style={pubStyles.fill} source={require('../../statics/images/banner/0569602525273649367.jpg')}/>
                        </View>
                        <View style={pubStyles.flexcenter}>
                            <Image style={pubStyles.fill} source={require('../../statics/images/banner/0569603550222892721.png')}/>
                        </View>

                    </Swiper>
                </View>
                <View style={{ paddingLeft: 10, paddingRight:10}}>
                    <View style={{height: 50,flexDirection: "row", position: 'relative'}}>
                        <View style={[pubStyles.tabItem, homeTab=="company" ? pubStyles.tabActive : {}]}>
                            <Text onPress={this.handleSwitch.bind(this, "company")}
                                  style={[styles.text, homeTab=="company" ? pubStyles.activeText : {}]}>热门公司</Text>
                            <View style={pubStyles.tabSlider}></View>
                        </View>

                        <View style={[pubStyles.tabItem, homeTab=="square" ? pubStyles.tabActive : {}]}>
                            <Text onPress={this.handleSwitch.bind(this, "square")}
                                  style={[styles.text, homeTab=="square" ? pubStyles.activeText : {}]}>活动广场</Text>
                        </View>
                    </View>
                </View>
                {
                    this.state.homeTab == "company" ?
                        <View style={{paddingLeft: 10, paddingRight: 10}}>
                            <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>

                                <View style={styles.cpyItem}>
                                    <TouchableHighlight onPress={this.handleToCompany.bind(this)}>
                                        <View style={styles.cpyImageWrap}>
                                            <Image style={styles.cpyImg} source={require('../../statics/images/banner/0569585243277259654.jpg')}/>
                                        </View>
                                    </TouchableHighlight>
                                    <View style={styles.cpySubText}>
                                        <Text>游戏畅想家：上帝太忙，换你创造世界</Text>
                                    </View>
                                </View>



                                <View style={styles.cpyItem}>
                                    <View style={styles.cpyImageWrap}>
                                        <Image style={styles.cpyImg} source={require('../../statics/images/banner/0569585405835599468.png')}/>
                                    </View>

                                    <View style={styles.cpySubText}>
                                        <Text>有你又科技，有你有未来</Text>
                                    </View>

                                </View>
                                <View style={styles.cpyItem}>
                                    <View style={styles.cpyImageWrap}>
                                        <Image style={styles.cpyImg} source={require('../../statics/images/banner/0569602525273649367.jpg')}/>
                                    </View>
                                    <View style={styles.cpySubText}>
                                        <Text>对话未见的世界</Text>
                                    </View>
                                </View>
                                <View style={styles.cpyItem}>
                                    <View style={styles.cpyImageWrap}>
                                        <Image style={styles.cpyImg} source={require('../../statics/images/banner/0569603550222892721.png')}/>
                                    </View>
                                    <View style={styles.cpySubText}>
                                        <Text>智者远行，逐梦全球</Text>
                                    </View>
                                </View>
                                <View style={styles.cpyItem}>
                                    <View style={styles.cpyImageWrap}>
                                        <Image style={styles.cpyImg} source={require('../../statics/images/banner/0569602525273649367.jpg')}/>
                                    </View>
                                    <View style={styles.cpySubText}>
                                        <Text>对话未见的世界</Text>
                                    </View>
                                </View>
                                <View style={styles.cpyItem}>
                                    <View style={styles.cpyImageWrap}>
                                        <Image style={styles.cpyImg} source={require('../../statics/images/banner/0569603550222892721.png')}/>
                                    </View>
                                    <View style={styles.cpySubText}>
                                        <Text>智者远行，逐梦全球</Text>
                                    </View>
                                </View>
                            </View>

                        </View>
                        :
                        <View style={{paddingTop: 5,paddingBottom: 5}}>
                            <View style={styles.squareItem}>
                                <Image style={pubStyles.fill} source={{uri: "https://offer-bar.oss-cn-beijing.aliyuncs.com/U/0/4234242342424-2-1.jpg"}}/>
                            </View>
                            <View style={styles.squareItem}>
                                <Image style={pubStyles.fill} source={{uri: "https://offer-bar.oss-cn-beijing.aliyuncs.com/U/0/3345352345222-1.png"}}/>
                            </View>
                            <View style={styles.squareItem} >
                                <Image style={pubStyles.fill} source={{uri: "https://offer-bar.oss-cn-beijing.aliyuncs.com/wx/images/pintuanBG.jpg"}}/>
                            </View>
                        </View>
                }


            </ScrollView>
        )
    }
}

var styles = StyleSheet.create({

    text: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    cpyImageWrap: {
        borderRadius: 3,
        overflow: 'hidden'
    },
    cpyItem: {
        width: '50%',
        paddingLeft: 5,
        paddingRight: 5,
        marginTop: 20
    },
    cpyImg: {
        width: '100%',
        height: 100
    },
    cpySubText: {
        height: 20,
        marginTop: 8
    },
    squareItem: {
        width: '100%',
        height: 200,
        paddingTop: 10,
        paddingLeft: 15,
        paddingRight: 15,
        paddingBottom: 10,
        borderBottomColor: "#eee",
        borderBottomWidth: 20
    }
})