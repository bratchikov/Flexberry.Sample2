import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('new-platform-sample2-author-l');
  this.route('new-platform-sample2-author-e',
  { path: 'new-platform-sample2-author-e/:id' });
  this.route('new-platform-sample2-author-e.new',
  { path: 'new-platform-sample2-author-e/new' });
  this.route('new-platform-sample2-book-l');
  this.route('new-platform-sample2-book-e',
  { path: 'new-platform-sample2-book-e/:id' });
  this.route('new-platform-sample2-book-e.new',
  { path: 'new-platform-sample2-book-e/new' });
  this.route('new-platform-sample2-country-l');
  this.route('new-platform-sample2-country-e',
  { path: 'new-platform-sample2-country-e/:id' });
  this.route('new-platform-sample2-country-e.new',
  { path: 'new-platform-sample2-country-e/new' });
  this.route('new-platform-sample2-language-l');
  this.route('new-platform-sample2-language-e',
  { path: 'new-platform-sample2-language-e/:id' });
  this.route('new-platform-sample2-language-e.new',
  { path: 'new-platform-sample2-language-e/new' });
});

export default Router;
