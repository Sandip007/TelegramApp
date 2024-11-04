import {ChannelList} from "stream-chat-expo";
import React from "react";
import {router} from "expo-router";


const HomeScreen = () => {
    return(
        //
        <ChannelList onSelect={(channel) => router.push(`/(home)/message/${channel.cid}`) } />
    );
}

export default HomeScreen;