import {Dimensions, StyleSheet} from 'react-native';
import color from '../../../../components/styles/color';

const deviceSize = Dimensions.get("window")

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.themeColor,
  },
  header_container: {
    marginTop:80,
    //backgroundColor: 'red',
    justifyContent:"flex-end"
  },
  header: {
    textAlign: 'center',
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  icon_container: {
    //backgroundColor:"blue",
    marginTop:50
  },
  icon: {
    alignItems:"center",
    padding:30,
    color:"#ffffff"
  },
  selectedIcon: {
    color:"#ffffff"
  },
  icon_label: {
    paddingTop:20,
    textAlign:"center",
    color:"#b4adad",
    fontSize:25,
    fontWeight:"bold"
  },
  btn_container: {
    flex:1,
    //backgroundColor:"red",
    justifyContent: 'center',
    alignItems: 'center',
  },
});
