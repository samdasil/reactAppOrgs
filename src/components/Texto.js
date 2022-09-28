import React from "react";
import { StyleSheet, Text } from "react-native";


export default function Texto({ children, style } ) {

    let estilo = style?.fontWeight == 'bold' ? estilo = estilos.textBold : estilo = estilos.text;

    return <Text style={[style, estilo]}>{ children }</Text>

}


const estilos = StyleSheet.create({
    text: {
        fontWeight: "normal",
        fontFamily: "MontserratRegular",
    },
    textBold: {
        fontWeight: "normal",
        fontFamily: "MontserratBold",
    }
});