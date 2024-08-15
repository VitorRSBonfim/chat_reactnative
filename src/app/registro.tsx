import { View, Text } from "react-native";
import { StyleSheet } from "react-native";
import { Link } from "expo-router";
import { ImageBackground } from "react-native";

const image = {uri: "https://i.pinimg.com/736x/61/50/c8/6150c8e4e571b0c419607628f062beff.jpg"}


export default function Regsitro() {
    return (
        <View style={styles.container}>

            <ImageBackground source={image} blurRadius={30} style={styles.image}>
                <View>
                    <Text>
                        REGISTRO
                    </Text>
                </View>
            </ImageBackground>

            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
        
    }
})
