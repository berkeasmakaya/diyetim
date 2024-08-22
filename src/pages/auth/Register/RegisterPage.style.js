import { Dimensions, StyleSheet } from "react-native";
import color from "../../../styles/color";


const deviceSize = Dimensions.get("window")

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:color.themeColor,
    },
    logo_container:{
        
    },
    input_container:{
        
    },
    buton_container:{
        
    },
    error:{
        fontSize:15,
        color:"#000000",
        fontWeight:"bold",
        textAlign:"center"
    }
})