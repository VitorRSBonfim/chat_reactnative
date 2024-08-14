import { View, Text } from "react-native";
import { Link } from "expo-router";


export default function Login() {
    return (
        <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>

            <Text> 
                <Link href={{pathname: "/"}}></Link>
                BOTAO home
             </Text>
            <Link href={{pathname:"/registro"}} >AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</Link>
        </View>
    )
}
