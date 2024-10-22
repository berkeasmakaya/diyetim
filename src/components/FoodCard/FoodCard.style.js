import { StyleSheet } from "react-native";
import color from "../../styles/color";

export default StyleSheet.create({
    container:{
        borderWidth:1,
        borderColor:color.themeColor,
        borderRadius:10,
        backgroundColor:"#ffffff",
        margin:10,
        padding:10,
        flexDirection:"row",
        alignItems:"center"
    },
    food_name:{
        color:color.themeColor,
        fontSize:20,
        fontWeight:"bold",
        margin:20,
        flexShrink:1, //metni sığdırmak için daraltılmasını sağlar
        
    },
    image_container:{
        
    },
    image:{
        width:125,
        height:125,
        borderRadius:10,
    }
})