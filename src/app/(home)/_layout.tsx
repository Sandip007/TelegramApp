
import {Redirect, Stack} from "expo-router";
import ChatProvider from "@/provider/ChatProvider";
import {useAuth} from "@/provider/AuthProvider";

const HomeLayoutScreen = () => {
    const { user } = useAuth();

    if (!user) {
        return <Redirect href="/(auth)/login" />
    }


    return(
        <ChatProvider>
            <Stack>
                <Stack.Screen name="(tab)" options={{headerShown: false}} />
            </Stack>
        </ChatProvider>
    );
}

export default HomeLayoutScreen;