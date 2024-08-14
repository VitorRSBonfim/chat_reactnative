import { StyleSheet, StatusBar } from "react-native";
import { View, Text} from "react-native";
import { ImageBackground } from "react-native";

const image = {uri: "https://i.pinimg.com/736x/61/50/c8/6150c8e4e571b0c419607628f062beff.jpg"}

export default function App() {
    return (
        <View style={styles.container}>
             <StatusBar barStyle={"light-content"} ></StatusBar>
             
             <ImageBackground source={image} blurRadius={10} style={styles.image} resizeMethod="resize">
                <Text>
                    AAA
                </Text>
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
        justifyContent: 'center',
        width: "100%",
        height: "100%"
        
      }
})
