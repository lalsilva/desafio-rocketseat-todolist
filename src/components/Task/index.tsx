import { Image, Text, TouchableOpacity, View } from "react-native";
import { useState } from "react";

import { stylesDefault } from "../../styles";
import { styles } from "./styles";

const TaskIconClosed = require("../../../assets/task-icon-closed.png");
const TrashIcon = require("../../../assets/trash-icon.png");
const TrashIconHover = require("../../../assets/trash-icon-hover.png");

type Props = {
  item: any;
  onClose: () => void;
  onRemove: () => void;
};

export function Task({ item, onClose, onRemove }: Props) {
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
