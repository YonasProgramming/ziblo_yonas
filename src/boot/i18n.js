import { createI18n } from 'vue-i18n';
import messages from 'src/i18n';
import { boot } from 'quasar/wrappers';

export default boot(({ app }) => {
  const availableLocales = Object.keys(messages);
  const savedLocale = localStorage.getItem('appLocale');

  const systemLocale = navigator.language.split('-')[0].toLowerCase();
  const selectedLocale =
    availableLocales.includes(savedLocale)
      ? savedLocale
      : availableLocales.includes(systemLocale)
        ? systemLocale
        : 'en';

  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: selectedLocale,
    fallbackLocale: 'en',
    messages
  });

  app.use(i18n);
});

export { createI18n };
