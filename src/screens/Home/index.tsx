import {
  Alert,
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useState } from "react";

import uuid from "react-native-uuid";

import { Task } from "../../components/Task";
import { TTask } from "../../types/task.type";
import { stylesDefault } from "../../styles";
import { styles } from "./styles";

const Logo = require("../../../assets/logo.png");
const BtnAdd = require("../../../assets/btn-add.png");
const ListEmptyIcon = require("../../../assets/list-empty-icon.png");

export function Home() {
  const [tasks, setTasks] = useState<TTask[]>([]);
  const [taskDescription, setTaskDescription] = useState("");
  const [buttonAddPressed, setButtonAddPressed] = useState(false);

  function handleButtonAddPressIn() {
    setButtonAddPressed((prevState) => !prevState);
  }

  function handleButtonAddPressInOut() {
    handleButtonAddPressIn();

    const description = taskDescription.trim();
    const task: TTask = {
      id: uuid.v4().toString(),
      description,
      dateCreated: Date.now(),
      closed: false,
      dateClosed: null,
    };

    if (description.length === 0) {
      return Alert.alert(
        "Tarefa Inválida!",
        "É necessária uma descrição para a tarefa."
      );
    }

    if (tasks.filter((task) => task.description === description).length > 0) {
      return Alert.alert(
        "Tarefa Existente!",
        "Já foi adicionada uma tarefa com essa descrição."
      );
    }

    setTasks((prevState) => [...prevState, task]);
    setTaskDescription("");
  }

  function handleTaskClose(task: TTask) {
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

  function handleTaskRemove({ id, description }: any) {
    Alert.alert("Remover Tarefa", `Deseja remover a tarefa: ${description}?`, [
      {
        text: "Sim",
        onPress: () =>
          setTasks((prevState) => prevState.filter((task) => task.id !== id)),
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
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
            onChangeText={setTaskDescription}
            value={taskDescription}
          />
          <TouchableOpacity
            style={[
              styles.buttonAdd,
              buttonAddPressed ? styles.buttonAddPressed : null,
            ]}
            activeOpacity={1}
            onPressIn={handleButtonAddPressIn}
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
            <Task
              task={item}
              onClose={() => handleTaskClose(item)}
              onRemove={() => handleTaskRemove(item)}
            />
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
