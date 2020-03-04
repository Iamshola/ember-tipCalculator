import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';


export default class ApplicationController extends Controller {
  @tracked total = 0;
  @tracked individualTip;


  constructor() {
    super(...arguments);
    this.options = ['0', '10', '20', '30', '40'];
    this.billAmount = 0;
    this.guestAmount = 0; 
    this.individualTip = 0;
  }
  
  @action
  calculateAmount() {
    this.individualTip = Math.round(this.billAmount * this.tipAmount / 100) / +(this.guestAmount)
    this.total = Number(this.individualTip) + Number(this.billAmount);
  }

}

