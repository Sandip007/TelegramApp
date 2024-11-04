
import {Stack} from "expo-router";
import ChatProvider from "@/provider/ChatProvider";

const HomeLayoutScreen = () => {
    return(
        <ChatProvider>
            <Stack>
                <Stack.Screen name="(tab)" options={{headerShown: false}} />
            </Stack>
        </ChatProvider>
    );
}

export default HomeLayoutScreen;