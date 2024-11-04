import {PropsWithChildren, useEffect, useState} from "react";
import {StreamChat} from "stream-chat";
import {Chat, OverlayProvider} from "stream-chat-expo";
import {ActivityIndicator} from "react-native";

// @ts-ignore
const client = StreamChat.getInstance(process.env.EXPO_PUBLIC_STREAM_API_KEY);

export default function ChatProvider({children} : PropsWithChildren) {
    const [isReady, setReady] = useState(false);

    useEffect(() => {
        const connect = async() => {
            await client.connectUser(
                {
                    id: 'john',
                    name: 'John Doe',
                    image: 'https://getstream.io/random_svg/?name=John',
                },
                client.devToken('john'),
            );
            setReady(true);
            /*const channel = client.channel('messaging', 'travel', {
                name: 'Awesome channel about traveling',
            });
            // Here, 'travel' will be the channel ID
            await channel.watch();*/

        };
        connect();

        return () => {
            client.disconnectUser();
            setReady(false);
        };
    },[])

    if (!isReady) {
        return <ActivityIndicator />
    }

    return(
        <OverlayProvider>
            <Chat client={client}>
                {children}
            </Chat>
        </OverlayProvider>
    );
}