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
  const [buttonAddPressed, setButtonAddPressed] = useState(false);

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
          renderItem={({ item }) => <Task item={item} />}
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
