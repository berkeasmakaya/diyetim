import { Dimensions, StyleSheet } from "react-native";
import color from "../../styles/color";

const deviceSize = Dimensions.get("window");
export default StyleSheet.create({
    container:{
        flex:1,
    },
    header_container:{
        flex:0.5,
        height:deviceSize.height/4.5,
        backgroundColor:color.themeColor,
        alignItems:"center",
        justifyContent:"space-between",
        padding:20,
    },
    header:{
        flex:1,
        color:"#ffffff",
        fontWeight:"bold",
        fontSize:40,
        marginTop:10,
    },
    icon_container:{
        flex:0.4,
        alignItems:"center",
    },
    icon:{
        borderRadius:50,
        marginTop:-50,
        backgroundColor:color.themeColor
    },
    name:{
        textAlign:"center",
        color:"#000000",
        fontWeight:"bold",
        fontSize:20,
        marginTop:5,
    },
    details_main_container:{
        flex:1,
        padding:10,
    },
    details_container:{
        flexDirection:"row",
        paddingVertical:10,
    },

    detail_header:{
        color:color.themeColor,
        fontWeight:"bold",
        fontSize:17,
    },
    detail_txt:{
        color:"#000000",
        fontWeight:"bold",
        fontSize:17
        
    },
    button_container:{
        flex:0.5,
        justifyContent:"center",
    }
})