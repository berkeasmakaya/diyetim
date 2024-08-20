import {Dimensions, StyleSheet} from 'react-native';
import color from '../../../../components/styles/color';

const deviceSize = Dimensions.get("window")

export default StyleSheet.create({
  container: {
    backgroundColor: color.themeColor,
    flex: 1,
  },
  header_container: {
    width:deviceSize.width,
    height:deviceSize.height/5,
    //backgroundColor: 'blue',
    padding: 10,
    justifyContent:"center"
  },
  header: {
    fontSize: 20,
    color: '#ffffff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  choice_container: {
    width:deviceSize.width,
    height:deviceSize.height/3,
    justifyContent: 'center',
  },
  btn_container: {
    width:deviceSize.width,
    height:deviceSize.height/2.5,
    //backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
