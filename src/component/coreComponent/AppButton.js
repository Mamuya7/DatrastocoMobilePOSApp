import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { styles } from "../../assets/styles/AppStyles";



const AppButton = (props) => {
    return (
    <TouchableOpacity style = {styles.button} onPress={props.press}>
        <View>
            <Text style = {styles.buttonText}>{props.title}</Text>
        </View>
    </TouchableOpacity>
    );
    
}

export default AppButton;