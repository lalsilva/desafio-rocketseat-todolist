import {
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { styles } from "./styles";
import { useState } from "react";

const Logo = require("../../../assets/logo.png");
const BtnAdd = require("../../../assets/btn-add.png");
const ListEmptyIcon = require("../../../assets/list-empty-icon.png");
const TaskIconClosed = require("../../../assets/task-icon-closed.png");
const TrashIcon = require("../../../assets/trash-icon.png");

export function Home() {
  const [buttonAdPressed, setButtonAddPressed] = useState(false);

  const tasks: Array<any> | null | undefined = [
    {
      id: 1,
      description:
        "Integer urna interdum massa libero auctor neque turpis turpis semper.",
      closed: false,
    },
    {
      id: 2,
      description:
        "Integer urna interdum massa libero auctor neque turpis turpis semper.",
      closed: true,
    },
  ];

  function handleButtonAddPressInOut() {
    setButtonAddPressed((prevState) => !prevState);
  }

  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <Image source={Logo} />
      </View>

      <View style={styles.content}>
        {/* Campo e botão adicionar */}
        <View style={styles.row}>
          <TextInput
            style={styles.input}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor="#808080"
          />
          <TouchableOpacity
            style={[
              styles.buttonAdd,
              buttonAdPressed ? styles.buttonAddPressed : null,
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
            styles.row,
            styles.createDone,
            tasks.length > 0 ? styles.noBorder : null,
          ]}
        >
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
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.task}>
              <View style={[styles.row, styles.taskRow]}>
                <TouchableOpacity>
                  {!item.closed ? (
                    <View
                      style={[styles.taskIcon, styles.taskIconOpened]}
                    ></View>
                  ) : (
                    <Image style={styles.taskIcon} source={TaskIconClosed} />
                  )}
                </TouchableOpacity>
                <Text
                  style={[
                    styles.taskDescription,
                    item.closed ? styles.taskDescriptionClosed : null,
                  ]}
                >
                  {item.description}
                </Text>
                <TouchableOpacity style={styles.taskRemove}>
                  <Image source={TrashIcon} />
                </TouchableOpacity>
              </View>
            </View>
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <View style={styles.emptyList}>
              <Image style={styles.emptyListIcon} source={ListEmptyIcon} />
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
