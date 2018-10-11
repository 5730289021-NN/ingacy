import { Template } from 'meteor/templating';
//import { ReactiveDict } from 'meteor/reactive-dict';

import { Offers } from '../api/offers';

import './offer';
import './body.html';

Template.body.helpers({
    appTitle() {
        return 'Ingacy';
    },
    appCaption() {
        return 'ระบบซื้อขาย M ที่ดีที่สุดในประเทศไทย';
    },
    offers() {
      const instance = Template.instance();
      return Offers.find({});
    },
});