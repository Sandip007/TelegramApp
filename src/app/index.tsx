import {StyleSheet, Text, View} from "react-native";
import Colors from "@/constants/Colors";
import {Redirect} from "expo-router";

export default function HomeScreen() {
    return <Redirect href={"/(home)/(tab)/"} />;
}

const indexStyle = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: Colors.light.background,
        alignItems: "center",
        justifyContent: "center"
    }
});