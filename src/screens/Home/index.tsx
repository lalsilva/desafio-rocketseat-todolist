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
import { I18n } from "i18n-js";

/* Idiomas */
/* Português (Brasileiro) */
import { ptBR } from "../../i18n/locales/pt_BR/pt-BR";
import { FlagBR } from "../../i18n/locales/pt_BR/flag";
/* Inglês (Estados Unidos) */
import { en } from "../../i18n/locales/en/en";
import { FlagEUA } from "../../i18n/locales/en/flag";

import { stylesDefault } from "../../styles";
import { styles } from "./styles";
import { Counter } from "../../components/Counter";
import { Task } from "../../components/Task";
import { TTask } from "../../components/Task/index.types";
import { TSection } from "./index.types";

export function Home() {
  const [locale, setLocale] = useState(Localization.locale);
  const [localeIsOpened, setLocaleIsOpened] = useState(false);

  const translations = {
    ...ptBR,
    ...en,
  };

  const i18n = new I18n(translations);
  i18n.enableFallback = true;
  i18n.defaultLocale = "pt-BR";
  i18n.locale = locale;

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

  function handleLocaleChange(locale: string) {
    setLocale(locale);
    setLocaleIsOpened(false);
  }

  useEffect(() => {
    setTasksCreated(tasks.filter((task) => !task.closed));
    setTasksClosed(tasks.filter((task) => task.closed));
  }, [tasks]);

  useEffect(() => {
    const sections: Array<TSection> = [];

    if (tasksCreated.length > 0) {
      sections.push({
        title: i18n.t("created tasks"),
        data: tasksCreated.sort((a, b) => b.dateCreated - a.dateCreated),
      });
    }

    if (tasksClosed.length > 0) {
      sections.push({
        title: i18n.t("completed tasks"),
        data: tasksClosed.sort((a, b) => b.dateClosed - a.dateClosed),
      });
    }

    setSectionsOfTasks(sections);
  }, [tasksCreated, tasksClosed]);

  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <View style={[stylesDefault.row, styles.headerLogoLocale]}>
          <Image source={Logo} />
          <View
            style={{
              position: "absolute",
              alignSelf: "stretch",
              alignItems: "flex-end",
              right: 0,
            }}
          >
            <TouchableOpacity
              onPress={() => setLocaleIsOpened((prevState) => !prevState)}
            >
              {locale === "pt-BR" ? (
                <FlagBR width={32} height={32} />
              ) : locale === "en" ? (
                <FlagEUA width={32} height={32} />
              ) : // TODO Colocar uma imagem neutra para o usuário entender que existem outros idiomas
              null}
            </TouchableOpacity>
            {localeIsOpened && (
              <View
                style={{
                  marginTop: 8,
                  padding: 12,
                  borderWidth: 1,
                  borderColor: "#0D0D0D",
                  borderRadius: 4,
                  backgroundColor: "#1A1A1A",
                }}
              >
                <TouchableOpacity onPress={() => handleLocaleChange("pt-BR")}>
                  <View
                    style={[
                      stylesDefault.row,
                      { alignItems: "center", marginBottom: 12 },
                    ]}
                  >
                    <FlagBR width={24} height={24} style={{ marginRight: 8 }} />
                    <Text
                      style={{
                        color: locale === "pt-BR" ? "#D9D9D9" : "#808080",
                        fontFamily: "Inter-Regular",
                      }}
                    >
                      Português (Brasileiro)
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleLocaleChange("en")}>
                  <View style={[stylesDefault.row, { alignItems: "center" }]}>
                    <FlagEUA
                      width={24}
                      height={24}
                      style={{ marginRight: 8 }}
                    />
                    <Text
                      style={{
                        color: locale === "en" ? "#D9D9D9" : "#808080",
                        fontFamily: "Inter-Regular",
                      }}
                    >
                      Inlgês (Estados Unidos)
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>
      </View>

      <View style={styles.content}>
        {/* Campo e botão adicionar */}
        <View style={stylesDefault.row}>
          <TextInput
            style={styles.input}
            placeholder={i18n.t("add a new task")}
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
            text={i18n.t("created")}
            textStyles={styles.createText}
            counter={tasksCreated.length}
          />
          <Counter
            text={i18n.t("closed")}
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
                {i18n.t("you don't have tasks registered yet")}
              </Text>
              <Text style={styles.emptyListText}>
                {i18n.t("create tasks and organize your to-do items")}
              </Text>
            </View>
          )}
        ></SectionList>
      </View>
    </View>
  );
}
