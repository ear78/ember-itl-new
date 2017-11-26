import Ember from 'ember';

export default Ember.Route.extend({
    beforModel(){
        this.replaceWith('home');
    }
});
