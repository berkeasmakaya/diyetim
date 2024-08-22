import { StyleSheet } from "react-native";
import color from "../../../styles/color";

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:color.themeColor
    },
    header_container:{
        //backgroundColor:"red",
        marginTop:60,
        marginBottom:30,
    },
    header:{
        color:"#ffffff",
        fontSize:20,
        textAlign:"center"
    },
    btn_container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
})