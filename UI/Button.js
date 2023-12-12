import { Pressable ,View,Text,StyleSheet} from 'react-native';
import { Colors } from '../util/style';

function Button({title,onPress,style,disabled,styletitle}) {
    return (
        <Pressable
          disabled={disabled}
         style={({pressed})=>[styles.container,style,pressed&&styles.pressed,disabled&&styles.disabled]} onPress={onPress}>
        <View>
           <Text style={[styles.title,styletitle]}>
               {title}
           </Text>
        </View>
          </Pressable>
    );
}
const styles=StyleSheet.create({
    container:{
      borderRadius:5,
      width:'auto',
      backgroundColor:Colors.primary600,
      elevation:5,
      justifyContent:'center',
      alignItems:'center'
    },
    title:{
   color:Colors.primary100,
   fontFamily:'YatraOne-Regular',
   padding:5,
   margin:5,
   textAlign:'center'
    },
    pressed:{
      opacity:0.7
    },
    disabled:{
      opacity:0.5
    }
  })
export default Button;