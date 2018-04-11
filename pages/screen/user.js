import React, {Component} from 'react';
import {
    Button,
    View,
    Text,
    ScrollView,
    Image,
    StyleSheet
} from 'react-native';

import pubStyles from "../../statics/style/styles_pub";

export default class User extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <ScrollView style={{flex: 1, backgroundColor: '#f8fbfb'}}>
                <View style={styles.meHeadBorderTop}>
                    <View style={{height: 220, backgroundColor: '#fff'}}>
                        <Image style={[pubStyles.fill,{marginTop: 30}]} source={require("../../statics/images/my.png")}/>

                        <View style={styles.meHeadPosition}>
                            <View style={styles.avatarImgWrap}>
                                <Image style={pubStyles.fill} source={require("../../statics/icon/no-avatar.png")}/>
                            </View>
                            <View style={{alignItems: 'center', marginTop: 15}}>
                                <Text>登录 / 注册</Text>
                            </View>
                        </View>


                    </View>
                </View>

                <View style={styles.meBodyBox}>
                    <View style={{flexDirection: 'row', backgroundColor: '#fff'}}>
                        <View style={[pubStyles.flexcenter, {height: 50}]}>
                            <Text>基本信息</Text>
                            <View style={pubStyles.tabSlider} />
                        </View>

                        <View style={[pubStyles.flexcenter, {height: 50}]}>
                            <Text>关注宣讲</Text>
                        </View>
                    </View>

                    <View style={styles.bodyListWrap}>
                        <View style={styles.bodyBoxItem}>
                            <View style={styles.boxItemIconView}>
                                <Image style={styles.bodyBoxItemIcon} source={require("../../statics/icon/resume.png")}/>
                            </View>
                            <View style={styles.boxItemTxtView}>
                                <Text>简历</Text>
                            </View>
                        </View>
                        <View style={styles.bodyBoxItem}>
                            <View style={styles.boxItemIconView}>
                                <Image style={styles.bodyBoxItemIcon} source={require("../../statics/icon/resume.png")}/>
                            </View>
                            <View style={styles.boxItemTxtView}>
                                <Text>offerbus</Text>
                            </View>
                        </View>
                        <View style={styles.bodyBoxItem}>
                            <View style={styles.boxItemIconView}>
                                <Image style={styles.bodyBoxItemIcon} source={require("../../statics/icon/offer-school.png")}/>
                            </View>
                            <View style={styles.boxItemTxtView}>
                                <Text>offer学院</Text>
                            </View>
                        </View>
                        <View style={styles.bodyBoxItem}>
                            <View style={styles.boxItemIconView}>
                                <Image style={styles.bodyBoxItemIcon} source={require("../../statics/icon/feedback.png")}/>
                            </View>
                            <View style={styles.boxItemTxtView}>
                                <Text>意见反馈</Text>
                            </View>
                        </View>
                    </View>

                </View>
            </ScrollView>
        )
    }
}

var styles = StyleSheet.create({
    wrapper: {},

    text: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    meHeadBorderTop: {
        // borderTopColor: '#fff',
        // borderTopWidth: 5
    },
    meHeadPosition: {
        alignItems: 'center',
        position: 'absolute',
        top: 20,
        width: '100%'
    },
    avatarImgWrap: {
        width: 120,
        height: 120,
        borderRadius: 60,
        overflow: 'hidden'
    },
    meBodyBox: {
        width: '80%',
        marginRight: 'auto',
        marginLeft: 'auto',
        position: 'relative',
        marginTop: 0,

        shadowColor: '#f5fbfb',
        shadowOffset: {width: 5, height: 5},
        shadowOpacity: 1,
        shadowRadius: 5
    },
    bodyListWrap: {
        marginTop: 20,
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: '#fff',

        shadowColor: '#f5fbfb',
        shadowOffset: {width: 5, height: 5},
        shadowOpacity: 1,
        shadowRadius: 5
    },
    bodyBoxItem: {
        borderBottomColor: '#f4f4f4',
        borderBottomWidth: 1,
        // height: 50,
        // justifyContent: 'center',
        // paddingLeft: 20,
        flexDirection: 'row'
    },
    boxItemIconView: {
        width: 50,
        justifyContent: 'center',
        height: 50,
        alignItems: 'center'
    },
    boxItemTxtView: {
        flex: 1,
        justifyContent: 'center',
        height: 50,
        alignItems: 'flex-start'
    },
    bodyBoxItemIcon: {
        width: 20,
        height: 20,
        // marginRight: 20,
    }
})