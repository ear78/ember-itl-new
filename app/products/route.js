import Ember from 'ember';

export default Ember.Route.extend({
    model(){
        return [
            {
            name: 'ILS-3600-OIR',
            title: 'ILS-3600-OIR',
            desc: 'The ILS-3600 Dual LED Lighting System utilizes LED technology and precision optics to provide a low power, low light pollution, dual tower lighting solution. All electronics is accessible at ground level reducing the need for costly tower climbs. The flash head contains only LEDs and a multi-stage surge suppression network. System modularity facilitates maintenance and long term reliability. Low noise design enhances compatibility with 4G/LTE technology.',
            image: 'https://www.itl-llc.com/cms_assets/ITL_Product_Images/ils/ILS-3600-000_CLOSED_1_T.png'
        },
            {
            name: 'IFH-1700-OIR',
            title: 'IFH-1700-OIR',
            desc: 'The IFH-1700-0IR utilizes Infrared Emitters, LED technology and advanced optics to achieve a compact, energy efficient, L-864(L) medium intensity red beacon. The IFH-1700-0IR comes ready for installation with a 10 foot cable attached. Designed for durability, the IFH-1700- 0IR has an aluminum top and base and clear acrylic cover. The IFH-1700-0IR is designed for long term maintainability with field replaceable LED boards, power supply board, and light engine.',
            image: 'https://www.itl-llc.com/cms_assets/ITL_Product_Images/mon/MON-G930-000_OPEN_T.png'
        },
            {
            name: 'ILS-D1RW-8SP-E1',
            title: 'ILS-D1RW-8SP-E1',
            desc: 'The ILS-D1RW-8SP-E1 Dual LED Lighting System utilizes LED technology for both red night and white day lighting. This complete E1 system consists of a Dual LED Flash head, Power Supply, interconnecting cables, photocell kit and side light kit.',
            image: 'https://www.itl-llc.com/cms_assets/ITL_Product_Images/ils/ILS-D1RW-8SP_CLOSED_1_T.png'
        },
            {
            name: 'ILS-3400',
            title: 'ILS-3400',
            desc: 'he ILS-3400 Medium Intensity Dual Lighting System utilizes proven xenon flash tube technology and Fresnel optics to provide a reliable and long-term maintainable dual tower lighting solution.  The same power supply is utilized in both the ILS-2400 and ILS-3400 systems reducing personnel training time and inventory requirements.',
            image: 'https://www.itl-llc.com/cms_assets/ITL_Product_Images/ils/ILS-3400-000_CLOSED_1_T.png'
        }
    ]
    }
});
