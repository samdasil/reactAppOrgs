import React from "react";
import { StyleSheet, Image, Dimensions, View } from "react-native";

import Texto from "../components/Texto";

import topo from "../../assets/topo.png";
import logo from "../../assets/logo.png";

const width = Dimensions.get("screen").width;

export default function Home() {
    return <>
        <Image source={topo} style={estilos.topo}></Image>
        <Texto style={estilos.titulo}>Detalhes da cesta</Texto>

        <View style={estilos.detalhesCesta}>
            <Texto style={estilos.nome}>Cesta de Verduras</Texto>
            <View style={estilos.fazenda}>
                <Image source={logo} style={estilos.imagemFazenda}></Image>
                <Texto style={estilos.nomeFazenda}>Jenny Jack Farm</Texto>
            </View>
            <Texto style={estilos.descricao}>Uma cesta de produtos selecionados cuidadosamente da fazenda direto para sua cozinha. </Texto>
            <Texto style={estilos.preco}>R$ 40,00</Texto>
        </View>
    </>
}

const estilos = StyleSheet.create({
    topo: {
        width: "100%",
        height: 578 / 768 * width
    },
    titulo: {
        position: "absolute",
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        width: "100%",
        padding: 20,
        fontSize: 20,
        lineHeight: 26
    },
    nome: {
        color: "#464646",
        fontSize: 26,
        lineHeight: 42,
    },
    nomeFazenda:{
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12,
    },
    detalhesCesta:{
        paddingVertical: 10,
        paddingHorizontal: 10
    },
    descricao: {
        color: "#A3A3A3",
        fontSize: 16,
        lineHeight: 26
    },
    preco: {
        color: "#2A9F85",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8
    },
    imagemFazenda: {
        width: 32,
        height: 32
    },
    fazenda: {
        flexDirection: "row",
        paddingVertical: 12
    }
});