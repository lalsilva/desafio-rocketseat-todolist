import {
  Alert,
  Image,
  SectionList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import uuid from "react-native-uuid";
import { useEffect, useState } from "react";

import * as Localization from "expo-localization";

import { stylesDefault } from "../../styles";
import { styles } from "./styles";
import { Counter } from "../../components/Counter";
import { Task } from "../../components/Task";
import { TTask } from "../../components/Task/index.types";
import { TSection } from "./index.types";
import { Locale } from "../../components/Locale";
import { changeLocale, translate } from "../../i18n";

export function Home() {
  const [locale, setLocale] = useState(Localization.locale);

  const [tasks, setTasks] = useState<TTask[]>([]);
  const [taskDescription, setTaskDescription] = useState("");
  const [tasksCreated, setTasksCreated] = useState<TTask[]>([]);
  const [tasksClosed, setTasksClosed] = useState<TTask[]>([]);
  const [sectionsOfTasks, setSectionsOfTasks] = useState<any[]>([]);
  const [buttonAddPressed, setButtonAddPressed] = useState(false);

  const Logo = require("../../../assets/logo.png");
  const BtnAdd = require("../../../assets/btn-add.png");
  const ListEmptyIcon = require("../../../assets/list-empty-icon.png");

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
        translate("invalid task"),
        translate("a description for the task is required")
      );
    }

    if (tasks.filter((task) => task.description === description).length > 0) {
      return Alert.alert(
        translate("existing task"),
        translate("a task with this description has already been added")
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
    Alert.alert(
      translate("remove task"),
      `${translate("do you want to remove the task")}: ${description}?`,
      [
        {
          text: translate("yes"),
          onPress: () =>
            setTasks((prevState) => prevState.filter((task) => task.id !== id)),
        },
        {
          text: translate("no"),
          style: "cancel",
        },
      ]
    );
  }

  function handleLocaleChange(locale: string) {
    setLocale(locale);
    changeLocale(locale);
  }

  useEffect(() => {
    setTasksCreated(tasks.filter((task) => !task.closed));
    setTasksClosed(tasks.filter((task) => task.closed));
  }, [tasks]);

  useEffect(() => {
    const sections: Array<TSection> = [];

    if (tasksCreated.length > 0) {
      sections.push({
        title: translate("created tasks"),
        data: tasksCreated.sort((a, b) => b.dateCreated - a.dateCreated),
      });
    }

    if (tasksClosed.length > 0) {
      sections.push({
        title: translate("completed tasks"),
        data: tasksClosed.sort((a, b) => b.dateClosed - a.dateClosed),
      });
    }

    setSectionsOfTasks(sections);
  }, [tasksCreated, tasksClosed, locale]);

  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <View style={[stylesDefault.row, styles.headerLogoLocale]}>
          <Image source={Logo} />
          <Locale locale={locale} onLocaleChange={handleLocaleChange} />
        </View>
      </View>

      <View style={styles.content}>
        {/* Campo e botão adicionar */}
        <View style={stylesDefault.row}>
          <TextInput
            style={styles.input}
            placeholder={translate("add a new task")}
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
            text={translate("created")}
            textStyles={styles.createText}
            counter={tasksCreated.length}
          />
          <Counter
            text={translate("closed")}
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
                {translate("you don't have tasks registered yet")}
              </Text>
              <Text style={styles.emptyListText}>
                {translate("create tasks and organize your to-do items")}
              </Text>
            </View>
          )}
        ></SectionList>
      </View>
    </View>
  );
}
