import { StyleSheet } from "react-native";
import color from "../../../../components/styles/color";

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:color.themeColor
    },
    header_container:{
        //backgroundColor:"red",
        marginTop:30,
        marginBottom:20,
        padding:10,
        justifyContent:"center",
        alignItems:"center"
        
    },
    text_1:{
        fontSize:20,
        color:"#ffffff",
        fontWeight:"bold"
    },
    text_2:{
        marginTop:10,
        color:"#ffffff"
    },
    btn_container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
})