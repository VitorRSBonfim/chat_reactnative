import { Stack, Slot } from "expo-router"
import { StatusBar } from "react-native"

export default function Layout() {
    return (
        <Stack screenOptions={{headerTransparent: true, headerTintColor: "#FFFFFF", headerTitleAlign: "center"}}>
            <Stack.Screen name="index" options={{headerShown: false}} ></Stack.Screen>
            <Stack.Screen name="login" />
            <Stack.Screen name="registro"/>
        </Stack>
    )
}
