import { Text, TouchableOpacity, View } from "react-native";
import { useState } from "react";

import { stylesDefault } from "../../styles";
import { styles } from "./styles";

import { translate } from "../../i18n";
import { Flag } from "../../i18n/flag";

type Props = {
  locale: string;
  onLocaleChange: (locale: string) => void;
};

export function Locale({ locale, onLocaleChange }: Props) {
  const [localeIsOpened, setLocaleIsOpened] = useState(false);

  function handleLocaleChange(locale: string) {
    onLocaleChange(locale);
    setLocaleIsOpened(false);
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => setLocaleIsOpened((prevState) => !prevState)}
      >
        <Flag locale={locale} width={32} height={32} />
      </TouchableOpacity>
      {localeIsOpened && (
        <View style={styles.menu}>
          <TouchableOpacity onPress={() => handleLocaleChange("pt-BR")}>
            <View style={[stylesDefault.row, styles.item]}>
              <Flag locale="pt-BR" width={24} height={24} style={styles.flag} />
              <Text
                style={[styles.text, locale === "pt-BR" ? styles.active : null]}
              >
                {translate("portuguese (brazil)")}
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleLocaleChange("en")}>
            <View style={[stylesDefault.row, styles.item]}>
              <Flag locale="en" width={24} height={24} style={styles.flag} />
              <Text
                style={[styles.text, locale === "en" ? styles.active : null]}
              >
                {translate("english")}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
