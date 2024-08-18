import { StyleSheet } from "react-native";
import color from "../styles/color";

const base_style = StyleSheet.create({
    container:{
        borderWidth:1,
        borderRadius:20,
        borderColor:"#ffffff",
        justifyContent:"center",
        alignItems:"center",
        padding:15,
        margin:15
    },
    text:{
        fontSize:20,
        fontWeight:"bold"
    }
})

export default{
    primary:StyleSheet.create({
        ...base_style,
        container:{
            ...base_style.container,
            backgroundColor:"#ffffff",
        },
        text:{
            ...base_style.text,
            color:color.themeColor
        }

    }),
    secondary:StyleSheet.create({
        ...base_style,
        container:{
            ...base_style.container,
            backgroundColor:color.themeColor
        },
        text:{
            ...base_style.text,
            color:"#ffffff"
        }
    })
}