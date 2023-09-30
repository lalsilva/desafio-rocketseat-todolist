import { Image, Text, TouchableOpacity, View } from "react-native";

import { stylesDefault } from "../../styles";
import { styles } from "./styles";

const TaskIconClosed = require("../../../assets/task-icon-closed.png");
const TrashIcon = require("../../../assets/trash-icon.png");

type Props = {
  item: any;
};

export function Task({ item }: Props) {
  return (
    <View style={styles.task}>
      <View style={[stylesDefault.row, styles.taskRow]}>
        <TouchableOpacity>
          {!item.closed ? (
            <View style={[styles.taskIcon, styles.taskIconOpened]}></View>
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
  );
}
