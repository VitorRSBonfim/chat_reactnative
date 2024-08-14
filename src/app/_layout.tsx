import { Stack, Slot } from "expo-router"
import { StatusBar } from "react-native"

export default function Layout() {
    return (
        <Stack>
            <Stack.Screen name="index" options={{headerShown: false}} ></Stack.Screen>
            <Stack.Screen name="login" />
            <Stack.Screen name="registro"/>
        </Stack>
    )
}
