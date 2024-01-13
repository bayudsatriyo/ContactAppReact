import React from "react";

export interface localeContext {
  locale: string;
  toggleLocale: () => void;
}

const LocaleContext = React.createContext<localeContext>({
  locale: "id" || "en",
  toggleLocale: () => {},
});

export const LocaleProvider = LocaleContext.Provider;
export const LocaleConsumer = LocaleContext.Consumer;

export default LocaleContext;
