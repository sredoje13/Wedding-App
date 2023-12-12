import { View ,Text} from 'react-native';
import Title from '../UI/Title';
import OneItemDUmmy from '../components/All/OneItemDUmmy'
import { FlatList } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import IconButton from '../UI/IconButton';
import { Colors } from '../util/style';
function FavoriteScreen(props) {
    const tasks=useSelector((state)=>state.Wedding.tasks)
    const favtasks=tasks.filter((item)=>item.important)
    const renderItems=({item})=>(
        <View>
        <IconButton name="star" color={Colors.primary600} size={32} isdisabled={true}/>
    <OneItemDUmmy
            item={item}
            isRecent={true}
            isMyTask={true}
            myDate={item.date}
        />
        </View>
    
    )
    return (
       <View>
        <Title props="NAJVAZNIJE OBAVEZE"/>
        <FlatList
        style={{margin:20}}
        scrollEnabled={true}
       data={favtasks}
       renderItem={renderItems}
        />

       </View>
    );
}

export default FavoriteScreen;