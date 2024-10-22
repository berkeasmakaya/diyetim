import { Dimensions, StyleSheet } from "react-native";
import color from "../../styles/color";

const deviceSize = Dimensions.get("window")

export default StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"space-around"
    },
    image_container:{
        //backgroundColor:"red"
    },
    image:{
        width:deviceSize.width,
        height:deviceSize.height/4,
    },
    header_container:{
        //backgroundColor:"blue",
        width:deviceSize.width,
        height:deviceSize.height/8,
        justifyContent:"center",
        alignItems:"center",
        flexShrink:1,
    },
    header:{
        fontSize:30,
        color:"#ffffff",
        fontWeight:"bold",
    },
    content_container:{
        //backgroundColor:"purple",
        width:deviceSize.width,
        height:deviceSize.height/3,
        justifyContent:"space-evenly",
        paddingLeft:15,
    },
    content:{
        flexShrink:1,
        color:"#ffffff",
        fontWeight:"bold",
        fontSize:18
    },
    btn_container:{
        //backgroundColor:"blue",
        width:deviceSize.width,
    }
})