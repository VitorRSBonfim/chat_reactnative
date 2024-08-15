import { View, Text } from "react-native";
import { StyleSheet } from "react-native";
import { Link } from "expo-router";
import { ImageBackground } from "react-native";
import { Image } from "react-native";
import { TextInput } from "react-native";

const image = {uri: "https://i.pinimg.com/736x/61/50/c8/6150c8e4e571b0c419607628f062beff.jpg"}

const logo = require("../../assets/images/logo.png")

export default function Login() {
    return (
        <View style={styles.container}>

            <ImageBackground source={image} blurRadius={30} style={styles.image}>
                <View style={styles.containerLogin}>
                    <Text>

                    </Text>
                    <Image source={logo} resizeMode="center">

                    </Image>

                    <View style={styles.contaierForm}>
                        <TextInput style={styles.txtInput} placeholder="Full Name"></TextInput>
                        <TextInput style={styles.txtInput} placeholder="Email Address"></TextInput>
                        <TextInput style={styles.txtInput} placeholder="Password"></TextInput>
                        <TextInput style={styles.txtInput} placeholder="Confirm Password"></TextInput>
                    </View>

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
        
    },
    containerLogin: {
        flex: 1,
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center"
    },
    contaierForm: {
        height: "auto",
        width: "100%",
        backgroundColor: "blue",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30
    },
    txtInput: {
        marginTop: 30,
        marginBottom: 30
    }
})
