import { StyleSheet } from "react-native";
import color from "../../../styles/color";

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:color.themeColor,
    },
    header_container:{
        marginVertical:100
    },
    header:{
        fontSize:20,
        fontWeight:"bold",
        color:"#ffffff",
        textAlign:"center"
    },
    picker_container:{
        
        justifyContent:"center",
        alignItems:"center",
        //backgroundColor:"blue"
    },
    btn_container:{
        //backgroundColor:"red",
        flex:1.5,
        justifyContent:"center",
        alignItems:"center",
    }
})