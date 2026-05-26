import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n/translations';

export const useTranslation = () => {
    const { lang } = useLanguage();
    return translations[lang];
};
