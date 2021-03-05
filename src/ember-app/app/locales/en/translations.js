import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

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

  'application-name': 'Application caption',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please have a cold beer...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Application caption',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Application caption',
          title: 'Application title'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        books: {
          caption: 'books',
          title: 'books',
          'new-platform-sample2-country-l': {
            caption: 'new-platform-sample2-country-l',
            title: 'new-platform-sample2-country-l'
          },
          'new-platform-sample2-book-l': {
            caption: 'new-platform-sample2-book-l',
            title: 'new-platform-sample2-book-l'
          },
          'new-platform-sample2-author-l': {
            caption: 'new-platform-sample2-author-l',
            title: 'new-platform-sample2-author-l'
          },
          'new-platform-sample2-language-l': {
            caption: 'new-platform-sample2-language-l',
            title: 'new-platform-sample2-language-l'
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
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
