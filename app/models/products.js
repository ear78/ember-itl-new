import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr('string'),
    desc: DS.attr('string'),
    title: DS.attr('string'),
    image: DS.attr('string')
});
