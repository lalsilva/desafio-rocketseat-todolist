import * as Localization from "expo-localization";
import { I18n } from "i18n-js";

import { ptBR } from "./locales/pt-BR";
import { en } from "./locales/en";

const translations = {
  ...ptBR,
  ...en,
};

const i18n = new I18n(translations);
i18n.enableFallback = true;
i18n.defaultLocale = "pt-BR";
i18n.locale = Localization.locale;

export function getLocale(): string {
  return i18n.locale;
}

export function changeLocale(locale: string) {
  i18n.locale = locale;
}

export function translate(key: string): string {
  return i18n.t(key);
}
