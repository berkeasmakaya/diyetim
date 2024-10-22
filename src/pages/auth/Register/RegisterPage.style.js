import {StyleSheet } from "react-native";
import color from "../../../styles/color";

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:color.themeColor,
        justifyContent:"center"
    },
    input_container:{
        marginVertical:10,
    },
    buton_container:{
        marginVertical:20,
        paddingBottom:45,
    },
    error:{
        fontSize:15,
        color:"#000000",
        fontWeight:"bold",
        textAlign:"center"
    }
})