import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
});
