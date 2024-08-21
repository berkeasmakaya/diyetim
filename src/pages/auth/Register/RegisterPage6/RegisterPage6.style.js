import { Dimensions, StyleSheet } from "react-native";
import color from "../../../../components/styles/color";

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:color.themeColor,
    },
    header_container:{
        marginTop:100,
    },
    header:{
        fontSize:20,
        fontWeight:"bold",
        textAlign:"center",
        color:"#ffffff"
    },
    input_container:{
        marginTop:100,
        justifyContent:"center",
        alignItems:"center"
    },
    input:{
        //backgroundColor:"red",
        width:Dimensions.get("window").width/1.9,
        height:Dimensions.get("window").height /10
    },
    info:{
        textAlign:"center",
        color:"#000000",
        fontWeight:"bold",
        fontSize:15
    },  
    
    btn_container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    error:{
        fontWeight:"bold",
        color:"#000000"
    }
    
})