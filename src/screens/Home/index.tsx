import {
  Alert,
  Image,
  SectionList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useEffect, useState } from "react";

import uuid from "react-native-uuid";

import { Task } from "../../components/Task";
import { TTask } from "../../types/task.type";
import { stylesDefault } from "../../styles";
import { styles } from "./styles";
import { Counter } from "../../components/Counter";

const Logo = require("../../../assets/logo.png");
const BtnAdd = require("../../../assets/btn-add.png");
const ListEmptyIcon = require("../../../assets/list-empty-icon.png");

export function Home() {
  const [tasks, setTasks] = useState<TTask[]>([]);
  const [taskDescription, setTaskDescription] = useState("");
  const [tasksCreated, setTasksCreated] = useState<TTask[]>([]);
  const [tasksClosed, setTasksClosed] = useState<TTask[]>([]);
  const [sectionsOfTasks, setSectionsOfTasks] = useState<any[]>([]);
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
      dateClosed: 0,
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
    const { id, closed } = task;

    setTasks((prevState) => {
      // Filtra a lista retirando a tarefa a ser fechada
      let tasks = prevState.filter((item) => item.id !== id);
      // Adiciona a tarefa fechada à lista filtrada
      tasks = [
        ...tasks,
        {
          ...task,
          closed: !closed,
          dateClosed: !closed ? Date.now() : 0,
        },
      ];
      // Retorna a lista ordenada pela data de fechamento
      return tasks;
    });
  }

  function handleTaskRemove({ id, description }: TTask) {
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

  useEffect(() => {
    setTasksCreated(tasks.filter((task) => !task.closed));
    setTasksClosed(tasks.filter((task) => task.closed));
  }, [tasks]);

  useEffect(() => {
    const sections: Array<any> = [];

    if (tasksCreated.length > 0) {
      sections.push({
        title: "Tarefas Criadas",
        data: tasksCreated.sort((a, b) => b.dateCreated - a.dateCreated),
      });
    }

    if (tasksClosed.length > 0) {
      sections.push({
        title: "Tarefas Concluídas",
        data: tasksClosed.sort((a, b) => b.dateClosed - a.dateClosed),
      });
    }

    setSectionsOfTasks(sections);
  }, [tasksCreated, tasksClosed]);

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
          <Counter
            text="Criadas"
            textStyles={styles.createText}
            counter={tasksCreated.length}
          />
          <Counter
            text="Concluídas"
            textStyles={styles.doneText}
            counter={tasksClosed.length}
          />
        </View>
        {/* Lista de tarefas */}
        <SectionList
          sections={sectionsOfTasks}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => (
            <Task
              task={item}
              onClose={() => handleTaskClose(item)}
              onRemove={() => handleTaskRemove(item)}
            />
          )}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={[styles.sectionTtitle, stylesDefault.bold]}>
              {title}
            </Text>
          )}
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
        ></SectionList>
      </View>
    </View>
  );
}
