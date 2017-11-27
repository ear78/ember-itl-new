import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('index', {path: '/'});
  this.route('products');
  this.route('about');
  this.route('news');
  this.route('events');
  this.route('careers');
  this.route('contact');
  this.route('inocc');
  this.route('myitl');
  this.route('privacy-policy');
  this.route('faa-guidelines');
  this.route('terms-of-service');
});

export default Router;
