import { StyleSheet } from "react-native";
import color from "../../../../components/styles/color";

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:color.themeColor,
        justifyContent:"space-around"
    },
    header_container:{
        flex:1,
        padding:10,
        justifyContent:"center",
        alignItems:"center",
        //backgroundColor:"red"
    },
    header:{
        padding:10,
        fontSize:20,
        color:"#ffffff",
        fontWeight:"bold"
    },
    content_container:{
        flex:1,
        //backgroundColor:"blue",
        padding:20,
        justifyContent:"flex-start",
        alignItems:"center"
    },
    content:{
        fontSize:20,
        color:"#ffffff",
        
    },
    btn_container:{
        flex:1,
        //backgroundColor:"yellow",
        justifyContent:"space-around",
        alignItems:"center"
    },
    footer:{
        fontSize:15,
        fontWeight:"bold"
    }
})