import React, {Component} from 'react';
import {
    Button,
    View,
    Text,
    ScrollView,
    Image,
    StyleSheet
} from 'react-native';
import pubStyles from "../../statics/style/styles_pub"

export default class Calender extends Component{
    constructor(props){
        super(props);
        this.state = {

            showDays: []
        }
    }
    componentWillMount(){
        var days = [];
        for(var i = 1; i< 31;i++){
            days.push(i);
        }
        this.setState({
            showDays: days
        })
    }

    render(){
        return (
            <ScrollView  style={{flex: 1, backgroundColor: '#fff'}}>
                <View>
                    <View style={styles.calenderTopBar}>
                        <Text>2018年2月</Text>
                    </View>
                    <View style={{paddingLeft: 10, paddingRight: 10, backgroundColor: '#fdfdfd'}}>
                        <View style={{flexDirection: 'row'}}>
                            <View style={styles.witem}>
                                <Text style={{color: '#27be9f'}}>SUN</Text>
                            </View>
                            <View style={styles.witem}>
                                <Text style={{color: '#27be9f'}}>MON</Text>
                            </View>
                            <View style={styles.witem}>
                                <Text style={{color: '#27be9f'}}>TUE</Text>
                            </View>
                            <View style={styles.witem}>
                                <Text style={{color: '#27be9f'}}>WED</Text>
                            </View>
                            <View style={styles.witem}>
                                <Text style={{color: '#27be9f'}}>THU</Text>
                            </View>
                            <View style={styles.witem}>
                                <Text style={{color: '#27be9f'}}>FRI</Text>
                            </View>
                            <View style={styles.witem}>
                                <Text style={{color: '#27be9f'}}>SAT</Text>
                            </View>
                        </View>

                        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                            {
                                this.state.showDays.map((item, index) => {
                                    return (
                                        <View key={'d' + index} style={styles.ditem}>
                                            <Text>{item}</Text>
                                        </View>
                                    )
                                })
                            }
                        </View>

                    </View>
                </View>

                <View style={{borderBottomColor: '#eee', borderBottomWidth: 10}}></View>
                <View>
                    <View style={{flexDirection: 'row'}}>
                        <View style={[pubStyles.tabItem, styles.xjTabActive]}>
                            <Text style={styles.xjTabTextActive}>当日宣讲</Text>
                            <View style={pubStyles.tabSlider}></View>
                        </View>

                        <View style={pubStyles.tabItem}>
                            <Text>关注宣讲</Text>
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

    calenderTopBar: {
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomColor: '#ddd',
        borderBottomWidth: 1,
    },
    witem: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomColor: '#ddd',
        borderBottomWidth: 1,
        height: 50
    },
    ditem: {
        width: '14.28%',
        alignItems: 'center',
        justifyContent: 'center',
        height: 30
    },

    xjTabActive: {
        borderBottomColor: '#27be9f'
    },
    xjTabTextActive: {
        color: '#27be9f'
    }
})