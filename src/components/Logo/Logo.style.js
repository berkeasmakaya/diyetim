import { Dimensions, StyleSheet } from "react-native";

const deviceSize = Dimensions.get("window"); 

export default StyleSheet.create({
    container:{
        height:deviceSize.height/3,
        width:deviceSize.width,
        justifyContent:"center",
        alignItems:"center",
    },
    text:{
        fontSize:30,
        color:"#ffffff",
        paddingTop:30,
        fontWeight:"bold"
    }
})