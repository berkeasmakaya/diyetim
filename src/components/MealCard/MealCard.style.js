import { StyleSheet } from "react-native";
import color from "../../styles/color";

export default StyleSheet.create({
    container:{
        flexDirection:"row",
        margin:10,
        padding:10,
        borderWidth:1,
        borderColor:"#ffffff",
        borderRadius:10,
        backgroundColor:"#ffffff",
        justifyContent:"space-between"
    },
    text:{
        fontSize:20,
        fontWeight:"bold",
        color:"#000000"
    },
    icon_container:{
        borderWidth:2,
        borderRadius:30,
        borderColor:color.themeColor
    }
})