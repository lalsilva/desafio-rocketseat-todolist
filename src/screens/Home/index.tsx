import {
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { styles } from "./styles";

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
