import { Dimensions, StyleSheet } from "react-native";
import color from "../../../styles/color";

const deviceSize = Dimensions.get("window")

export default StyleSheet.create({
    modal:{
        justifyContent:"flex-end",
        margin:5
    },
    container:{
        backgroundColor:"#ffffff",
        padding:10,
        marginHorizontal:10,
        borderRadius:10,
        height:deviceSize.height/3.5,
    },
    btn_container:{
        //backgroundColor:"red",
        marginTop:55,
    },
    header_txt:{
        marginTop:20,
        textAlign:"center",
        color:color.themeColor,
        fontSize:20,
        fontWeight:"bold",
    }
})