import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    fondo: {
        flex: 1,
        backgroundColor: "black",
        paddingHorizontal: 20

    },
    resultado: {
        color: "white",
        fontSize: 60,
        textAlign: "right",
        marginBottom: 10,

    },
    resultadoPeque: {
        color: "rgba(255,255,255, 0.5)",
        fontSize: 30,
        textAlign: "right",

    },

    calculadoraContainer : {
        flex: 1,
        justifyContent: "flex-end"

    },
    fila: {
        flexDirection: "row",
        justifyContent: "center",
        marginBottom: 18,
        paddingHorizontal: 10,
        

    },
    boton: {
        height: 80,
        width: 80,
        backgroundColor: "#2d2d2d",
        borderRadius: 100,
        justifyContent: "center",
        marginHorizontal: 10
        
    },

    botonText: {
        textAlign: "center",
        padding: 10,
        fontSize: 30,
        fontWeight: "300",
        color: "white"
    },
});