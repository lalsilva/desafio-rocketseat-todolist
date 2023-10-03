import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        position: "absolute",
        alignSelf: "stretch",
        alignItems: "flex-end",
        right: 0,
    },
    menu: {
        marginTop: 8,
        padding: 12,
        borderWidth: 1,
        borderColor: "#0D0D0D",
        borderRadius: 4,
        backgroundColor: "#1A1A1A",
    },
    item: { alignItems: "center", marginBottom: 12 },
    flag: { marginRight: 8 },
    text: {
        color: "#808080",
        fontFamily: "Inter-Regular",
    },
    active: {
        color: "#D9D9D9",
    },
});