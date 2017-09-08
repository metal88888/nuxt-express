import Cookie from 'js-cookie';

export const getLang = () => {
    let lang = Cookie.get('lang');

    if (!lang) {
        lang = "en";
        Cookie.set('lang', lang);
    }

    return lang;
};