
import {Slot, Stack} from "expo-router";
import { StreamChat } from 'stream-chat';
import {useEffect} from "react";
import {Chat, OverlayProvider} from "stream-chat-expo";



const client = StreamChat.getInstance('cx7nbaextht9');

const HomeLayoutScreen = () => {

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

            /*const channel = client.channel('messaging', 'travel', {
                name: 'Awesome channel about traveling',
            });
            // Here, 'travel' will be the channel ID
            await channel.watch();*/

        };
        connect();
    })

    return(
        <OverlayProvider>
            <Chat client={client}>
                <Stack>
                    <Stack.Screen name="(tab)" options={{headerShown: false}} />
                </Stack>
            </Chat>
        </OverlayProvider>
    );
}

export default HomeLayoutScreen;