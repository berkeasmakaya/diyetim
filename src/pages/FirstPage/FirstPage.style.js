import { StyleSheet } from "react-native";
import color from "../../components/styles/color";

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:color.themeColor
    },
    logo_container:{
        flex:1,
        //backgroundColor:"red",
        justifyContent:"center"
    },
    button_container:{
        flex:1,
        //backgroundColor:"red",
        justifyContent:"flex-start",
    }
})