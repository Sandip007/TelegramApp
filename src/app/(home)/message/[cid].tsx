import {ActivityIndicator, Text, View} from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import {useLocalSearchParams} from "expo-router";
import {Channel as ChannelType} from "stream-chat";
import {Channel, MessageList, MessageInput, useChatContext} from "stream-chat-expo";
import {useEffect, useState} from "react";

const Message = () => {
    const [channel, setChannel] = useState<ChannelType | null>(null);
    const { cid } = useLocalSearchParams<{cid: string}>();
    console.log(cid);
    const { client } = useChatContext();

    useEffect(() => {
        const fetchChannel = async () =>{
            const channelResponse = await client.queryChannels({cid});
            setChannel(channelResponse[0])
        };
        fetchChannel();
    }, [cid]);

    if (!channel) {
        return <ActivityIndicator />
    }

    return(
        <Channel channel={channel}>
            <MessageList />
            <SafeAreaView edges={['bottom']}>
                <MessageInput />
            </SafeAreaView>
        </Channel>
    );
}


export default Message;