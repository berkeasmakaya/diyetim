import { StyleSheet } from "react-native";
import color from "../../styles/color";

export default StyleSheet.create({
    container:{
        borderWidth:2,
        borderRadius:10,
        borderColor:color.themeColor,
        margin:20,
    },
    header_container:{
        flexDirection:"row",
        justifyContent:"space-between",
        backgroundColor:color.themeColor,
        padding:10,
        borderTopRightRadius:7,
        borderTopLeftRadius:7,
        borderColor:color.themeColor,
    },
    header:{
        fontSize:18,
        fontWeight:"bold",
        color:"#ffffff"
    },
    detail_container:{
        backgroundColor:'#ffffff',
        padding:10,
        borderBottomRightRadius:10,
        borderBottomLeftRadius:10,
        borderColor:color.themeColor,
    },
    detail:{
        paddingVertical:5,
        color:color.themeColor,
        fontWeight:"bold",
        fontSize:15
    }
})