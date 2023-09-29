import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const LogoPNG = require("../../../assets/logo.png");
const BtnAddPNG = require("../../../assets/btn-add.png");
const ListEmptyIconPNG = require("../../../assets/list-empty-icon.png");

export function Home() {
  const tasks: Array<any> | null | undefined = [];

  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <Image source={LogoPNG} />
      </View>

      <View style={styles.content}>
        {/* Campo e botão adicionar */}
        <View style={styles.row}>
          <TextInput
            style={styles.input}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor="#808080"
          />
          <TouchableOpacity style={styles.buttonAdd}>
            <Image source={BtnAddPNG} />
          </TouchableOpacity>
        </View>
        {/* Criadas (n) / Concluídas (n)*/}
        <View style={[styles.row, styles.createDone]}>
          {/* Criadas */}
          <View style={styles.row}>
            <Text style={[styles.createText, styles.bold]}>Criadas</Text>
            <Text style={[styles.createDoneCounter, styles.bold]}>0</Text>
          </View>
          {/* Concluídas */}
          <View style={styles.row}>
            <Text style={[styles.doneText, styles.bold]}>Concluídas</Text>
            <Text style={[styles.createDoneCounter, styles.bold]}>0</Text>
          </View>
        </View>
        {/* Lista de tarefas */}
        <FlatList
          data={tasks}
          keyExtractor={(item) => item}
          renderItem={(task) => <Text></Text>}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <View style={styles.emptyList}>
              <Image style={styles.emptyListIcon} source={ListEmptyIconPNG} />
              <Text style={[styles.emptyListText, styles.bold]}>
                Você ainda não tem tarefas cadastradas
              </Text>
              <Text style={styles.emptyListText}>
                Crie tarefas e organize seus itens a fazer
              </Text>
            </View>
          )}
        ></FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
  row: {
    flexDirection: "row",
  },
  input: {
    flex: 1,
    paddingHorizontal: 16,
    height: 54,
    marginRight: 8,
    color: "#F2F2F2",
    fontSize: 16,
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
    color: "#F2F2F2",
    fontSize: 12,
    paddingVertical: 2,
    paddingHorizontal: 8,
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
  },
  bold: {
    fontWeight: "bold",
  },
});
