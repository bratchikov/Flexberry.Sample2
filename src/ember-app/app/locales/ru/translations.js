import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import NewPlatformSample2AuthorLForm from './forms/new-platform-sample2-author-l';
import NewPlatformSample2BookLForm from './forms/new-platform-sample2-book-l';
import NewPlatformSample2CountryLForm from './forms/new-platform-sample2-country-l';
import NewPlatformSample2LanguageLForm from './forms/new-platform-sample2-language-l';
import NewPlatformSample2AuthorEForm from './forms/new-platform-sample2-author-e';
import NewPlatformSample2BookEForm from './forms/new-platform-sample2-book-e';
import NewPlatformSample2CountryEForm from './forms/new-platform-sample2-country-e';
import NewPlatformSample2LanguageEForm from './forms/new-platform-sample2-language-e';
import NewPlatformSample2AuthorModel from './models/new-platform-sample2-author';
import NewPlatformSample2BookModel from './models/new-platform-sample2-book';
import NewPlatformSample2CountryModel from './models/new-platform-sample2-country';
import NewPlatformSample2LanguageModel from './models/new-platform-sample2-language';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'new-platform-sample2-author': NewPlatformSample2AuthorModel,
    'new-platform-sample2-book': NewPlatformSample2BookModel,
    'new-platform-sample2-country': NewPlatformSample2CountryModel,
    'new-platform-sample2-language': NewPlatformSample2LanguageModel
  },

  'application-name': 'Books',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Books',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Books',
          title: 'Books'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        books: {
          caption: 'Books',
          title: 'Books',
          'new-platform-sample2-country-l': {
            caption: 'Country',
            title: ''
          },
          'new-platform-sample2-book-l': {
            caption: 'Book',
            title: ''
          },
          'new-platform-sample2-author-l': {
            caption: 'Author',
            title: ''
          },
          'new-platform-sample2-language-l': {
            caption: 'Language',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'new-platform-sample2-author-l': NewPlatformSample2AuthorLForm,
    'new-platform-sample2-book-l': NewPlatformSample2BookLForm,
    'new-platform-sample2-country-l': NewPlatformSample2CountryLForm,
    'new-platform-sample2-language-l': NewPlatformSample2LanguageLForm,
    'new-platform-sample2-author-e': NewPlatformSample2AuthorEForm,
    'new-platform-sample2-book-e': NewPlatformSample2BookEForm,
    'new-platform-sample2-country-e': NewPlatformSample2CountryEForm,
    'new-platform-sample2-language-e': NewPlatformSample2LanguageEForm
  },

});

export default translations;
