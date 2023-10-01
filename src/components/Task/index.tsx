import { Image, Text, TouchableOpacity, View } from "react-native";
import { useState } from "react";

import { stylesDefault } from "../../styles";
import { styles } from "./styles";
import { TTask } from "../../types/task.type";

const TaskIconClosed = require("../../../assets/task-icon-closed.png");
const TrashIcon = require("../../../assets/trash-icon.png");
const TrashIconHover = require("../../../assets/trash-icon-hover.png");

type Props = {
  task: TTask;
  onClose: () => void;
  onRemove: () => void;
};

export function Task({
  task: { closed, description },
  onClose,
  onRemove,
}: Props) {
  const [buttonRemovePressed, setButtonRemovePressed] = useState(false);

  function handleButtonCloseTaskPress() {
    onClose();
  }

  function handleButtonRemovePressIn() {
    setButtonRemovePressed((prevState) => !prevState);
  }

  function handleButtonRemovePressOut() {
    handleButtonRemovePressIn();
    onRemove();
  }

  return (
    <View style={styles.task}>
      <View style={[stylesDefault.row, styles.taskRow]}>
        <TouchableOpacity onPress={handleButtonCloseTaskPress}>
          {!closed ? (
            <View style={[styles.taskIcon, styles.taskIconOpened]}></View>
          ) : (
            <Image style={styles.taskIcon} source={TaskIconClosed} />
          )}
        </TouchableOpacity>
        <Text
          style={[
            styles.taskDescription,
            closed ? styles.taskDescriptionClosed : null,
          ]}
        >
          {description}
        </Text>
        <TouchableOpacity
          style={[
            styles.buttonRemove,
            buttonRemovePressed ? styles.buttonRemovePressed : null,
          ]}
          activeOpacity={1}
          onPressIn={handleButtonRemovePressIn}
          onPressOut={handleButtonRemovePressOut}
        >
          <Image source={!buttonRemovePressed ? TrashIcon : TrashIconHover} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
