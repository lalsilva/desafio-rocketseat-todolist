import {
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useState } from "react";

import { Task } from "../../components/Task";
import { stylesDefault } from "../../styles";
import { styles } from "./styles";

const Logo = require("../../../assets/logo.png");
const BtnAdd = require("../../../assets/btn-add.png");
const ListEmptyIcon = require("../../../assets/list-empty-icon.png");

export function Home() {
  const [tasks, setTasks] = useState<any[]>([
    {
      id: 1,
      description:
        "Primeiro item. Integer urna interdum massa libero auctor neque.",
      closed: false,
      dateClosed: null,
    },
    {
      id: 2,
      description: "Segundo item. Integer urna neque turpis turpis semper.",
      closed: false,
      dateClosed: null,
    },
    {
      id: 3,
      description: "Terceiro item. Integer urna interdum neque turpis turpis.",
      closed: false,
      dateClosed: null,
    },
  ]);
  const [buttonAddPressed, setButtonAddPressed] = useState(false);

  function handleButtonAddPressInOut() {
    setButtonAddPressed((prevState) => !prevState);
  }

  function handleTaskClose(task: any) {
    setTasks((prevState) => {
      const { id, closed } = task;

      // Filtra a lista retirando a tarefa a ser fechada
      let tasks = prevState.filter((item) => item.id !== id);
      // Adiciona a tarefa fechada à lista filtrada
      tasks = [
        ...tasks,
        {
          ...task,
          closed: !closed,
          dateClosed: !closed ? Date.now() : null,
        },
      ];
      // Retorna a lista ordenada pela data de fechamento
      return tasks;
    });
  }

  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <Image source={Logo} />
      </View>

      <View style={styles.content}>
        {/* Campo e botão adicionar */}
        <View style={stylesDefault.row}>
          <TextInput
            style={styles.input}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor="#808080"
          />
          <TouchableOpacity
            style={[
              styles.buttonAdd,
              buttonAddPressed ? styles.buttonAddPressed : null,
            ]}
            activeOpacity={1}
            onPressIn={handleButtonAddPressInOut}
            onPressOut={handleButtonAddPressInOut}
          >
            <Image source={BtnAdd} />
          </TouchableOpacity>
        </View>
        {/* Criadas (n) / Concluídas (n)*/}
        <View
          style={[
            stylesDefault.row,
            styles.createDone,
            tasks.length > 0 ? stylesDefault.noBorder : null,
          ]}
        >
          {/* Criadas */}
          <View style={stylesDefault.row}>
            <Text style={[styles.createText, stylesDefault.bold]}>Criadas</Text>
            <Text style={[styles.createDoneCounter, stylesDefault.bold]}>
              0
            </Text>
          </View>
          {/* Concluídas */}
          <View style={stylesDefault.row}>
            <Text style={[styles.doneText, stylesDefault.bold]}>
              Concluídas
            </Text>
            <Text style={[styles.createDoneCounter, stylesDefault.bold]}>
              0
            </Text>
          </View>
        </View>
        {/* Lista de tarefas */}
        <FlatList
          data={tasks}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Task item={item} onClose={() => handleTaskClose(item)} />
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <View style={styles.emptyList}>
              <Image style={styles.emptyListIcon} source={ListEmptyIcon} />
              <Text style={[styles.emptyListText, stylesDefault.bold]}>
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
