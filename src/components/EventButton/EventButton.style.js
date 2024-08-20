import { StyleSheet } from "react-native";

const base_style = StyleSheet.create({
    container:{
        padding:10
        
    },
    event_card:{
        marginVertical:10,
        padding:10,
        borderWidth:1,
        borderRadius:10,
        borderColor:"#ffffff"
    },
    header:{
        fontSize:20,
        fontWeight:"bold",
        paddingBottom:10,
    },
    content:{
        
    }
})

export default {
    primary: StyleSheet.create({
        ...base_style,
        header:{
            ...base_style.header,
            color:"#ffffff",
        },
        content:{
            ...base_style.content,
            color:"#ffffff"
        }
    }),
    secondary:StyleSheet.create({
        ...base_style,
        event_card:{
            ...base_style.event_card,
            backgroundColor:"#e0e0e0"
        },
        header:{
            ...base_style.header,
            color:"#000000"
        },
        content:{
            ...base_style.content,
            color:"#000000"
        }
    })
    
}