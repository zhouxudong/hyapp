import {StyleSheet} from "react-native"

var styles = StyleSheet.create({
    borderBottom: {
        borderBottomColor: "#eeeeee",
        borderBottomWidth: 1
    },

    fill: {
        width: "100%",
        height: "100%"
    },
    flexcenter: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    tabWrap: {
        height: 50,
        flexDirection: "row",
        position: "relative"
    },
    tabItem: {
        height: 50,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomColor: '#ddd',
        borderBottomWidth: 1,
        position: "relative"
    },
    activeText: {
        color: '#27be9f'
    },
    tabActive: {
        borderBottomColor: '#27be9f'
    },
    tabSlider: {
        position: 'absolute',
        height: 30,
        top: 10,
        right: 0,
        borderRightColor:'#f4f4f4',
        borderRightWidth:1
    },

})

export default styles;