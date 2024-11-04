import {Stack} from "expo-router";


const MessageStack = () => {
    return (
        <Stack>
            <Stack.Screen name="[cid]" options={{headerShown: false}} />
        </Stack>
    );
}

export default MessageStack;