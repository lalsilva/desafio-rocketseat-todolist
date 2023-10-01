import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    task: {
        minHeight: 64,
        padding: 12,
        paddingRight: 10,
        marginBottom: 8,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#333",
        backgroundColor: "#262626"
    },
    taskRow: {
        flex: 1,
        alignItems: "center",
    },
    taskIcon: {
        marginRight: 12,
    },
    taskIconOpened: {
        width: 17,
        height: 17,
        borderWidth: 2,
        borderColor: "#4EA8DE",
        borderRadius: 17,
    },
    taskDescription: {
        flex: 1,
        color: "#F2F2F2",
        fontSize: 14,
        fontFamily: "Inter-Regular",
        lineHeight: 19.6
    },
    taskDescriptionClosed: {
        color: "#808080",
        textDecorationLine: "line-through",
    },
    taskRemoveClosed: {
        borderRadius: 4,
        backgroundColor: "#333"
    },
    buttonRemove: {
        width: 32,
        height: 32,
        marginLeft: 8,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 4,
    },
    buttonRemovePressed: {
        backgroundColor: "#333",
    },
})