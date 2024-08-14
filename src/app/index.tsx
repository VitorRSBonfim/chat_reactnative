import { StyleSheet, StatusBar } from "react-native";
import { View, Text, Button, Pressable} from "react-native";
import { ImageBackground, Image } from "react-native";
import { Link, Redirect} from "expo-router";
import { useState } from "react";
const image = {uri: "https://i.pinimg.com/736x/61/50/c8/6150c8e4e571b0c419607628f062beff.jpg"}

export default function App() {

    const [o, setO] = useState<boolean>(false)

    if (o) {
        return (
            <Redirect href={{pathname: "/login"}}></Redirect>
        )
    }

    return (
        <View style={styles.container}>
             <StatusBar barStyle={"light-content"} ></StatusBar>
             
             <ImageBackground source={image} blurRadius={30} style={styles.image} >
                <Text style={styles.textHeader}>
                        Wellcome to your new chat
                </Text>

                <View style={styles.containerLogin}>
                    <Link href={{pathname: "/login"}} style={styles.linkLogin}>
                        Login
                    </Link>
                    <Text style={{color: "white", marginBottom: 10, marginTop: 5}} >
                        Do not have an account? <Link href={{pathname: "/registro"}} style={{color: "#F23545"}}> Register</Link>
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
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        height: "100%",
        
    },
    textHeader: {
        color: "#FFFFFF",
        fontSize: 30,
        fontWeight: "100",
        paddingTop: 40
    },
    containerBtn: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 20
    },
    btnLogin: {
        width: "90%",
        display: "flex",
        backgroundColor: "#F23545",
        height: 60,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        textAlign: "center"
    },
    btnLoginTxt: {
        color: "#FFFFFF",
        textAlign: "center",
        backgroundColor: "red"
    },
    btnBottomtxt: {
        color: "white", marginTop: 3
    },
    containerLogin: {
        width: "90%", justifyContent: "center", alignItems: "center"
    },
    linkLogin: {
        width: "90%", borderRadius:20 ,height: 60, textAlign: "center", textAlignVertical: "center", backgroundColor: "#F23545", color: "#FFFFFF", fontSize: 22
    }
})
