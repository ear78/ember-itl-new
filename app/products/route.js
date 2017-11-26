import Ember from 'ember';

export default Ember.Route.extend({
    model(){
        return [{
            name: 'ILS-3600',
            desc: 'The ILS-3600 Dual LED Lighting System utilizes LED technology and precision optics to provide a low power, low light pollution, dual tower lighting solution. All electronics is accessible at ground level reducing the need for costly tower climbs. The flash head contains only LEDs and a multi-stage surge suppression network. System modularity facilitates maintenance and long term reliability. Low noise design enhances compatibility with 4G/LTE technology.',
            title: 'ILS-3600-OIR',
            image: 'https://www.itl-llc.com/cms_assets/ITL_Product_Images/ils/ILS-3600-000_CLOSED_1_T.png'
        }]
    }
});
