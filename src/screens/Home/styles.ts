import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    /* Estilos globais */
    row: {
        flexDirection: "row",
    },
    bold: {
        fontFamily: "Inter-Bold",
    },
    noBorder: {
        borderTopWidth: 0,
        borderRightWidth: 0,
        borderBottomWidth: 0,
        borderLeftWidth: 0,
    },
    /* Estilos por elemento */
    screen: {
        flex: 1,
    },
    header: {
        height: 173,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#0D0D0D",
    },
    content: {
        marginTop: -28,
        paddingHorizontal: 24,
    },
    input: {
        flex: 1,
        paddingHorizontal: 16,
        height: 54,
        marginRight: 8,
        color: "#F2F2F2",
        fontSize: 16,
        fontFamily: "Inter-Regular",
        borderWidth: 1,
        borderColor: "#0D0D0D",
        borderRadius: 6,
        backgroundColor: "#262626",
    },
    buttonAdd: {
        width: 52,
        height: 52,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#1E6F9F",
        borderRadius: 6,
    },
    buttonAddPressed: {
        backgroundColor: "#4EA8DE",
    },
    createDone: {
        paddingTop: 32,
        paddingBottom: 20,
        justifyContent: "space-between",
        borderBottomWidth: 1,
        borderBottomColor: "#333",
    },
    createText: {
        color: "#4EA8DE",
        fontSize: 14,
    },
    createDoneCounter: {
        paddingVertical: 2,
        paddingHorizontal: 8,
        color: "#F2F2F2",
        fontSize: 12,
        marginLeft: 8,
        borderRadius: 10,
        backgroundColor: "#333",
    },
    doneText: {
        color: "#8284FA",
        fontSize: 14,
    },
    emptyList: {
        width: "100%",
        height: 208,
        alignItems: "center",
        justifyContent: "center",
    },
    emptyListIcon: {
        marginBottom: 16,
    },
    emptyListText: {
        color: "#808080",
        fontFamily: "Inter-Regular",
    },
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
        marginRight: 15,
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
    },
    taskDescriptionClosed: {
        color: "#808080",
        textDecorationLine: "line-through",
    },
    taskRemove: {
        width: 32,
        height: 32,
        alignItems: "center",
        justifyContent: "center",
    },
    taskRemoveClosed: {
        borderRadius: 4,
        backgroundColor: "#333"
    }
});
