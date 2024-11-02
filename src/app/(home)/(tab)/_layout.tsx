import {Tabs} from "expo-router";
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export default function TabNavigator () {
    return(
        <Tabs screenOptions={{tabBarShowLabel: false}}>
            <Tabs.Screen name="index" options={{
                title:"Chats",
                tabBarIcon: ({size, color}) => (
                    <Entypo name="chat" size={size} color={color} />
                )
            }} />
            <Tabs.Screen name="profile" options={{
                title:"Account",
                tabBarIcon: ({size, color}) => (
                    <FontAwesome5 name="user-circle" size={size} color={color} />
                )
            }} />
        </Tabs>
    );
}