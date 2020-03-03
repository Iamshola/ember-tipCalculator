import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';


export default class ApplicationController extends Controller {
  @tracked total = 0;
  @tracked tipAmount = 0;

  constructor() {
    super(...arguments);
    this.options = ['0', '10', '20', '30', '40'];
    this.billAmount = 0;
    this.guestAmount = 0; 
    this.tipAmount = 0;
  }
  

  @action
  calculateAmount() {
    this.tipAmount = Math.round(this.billAmount * this.tipAmount / 100) / 2
    this.total = Number(this.tipAmount) + Number(this.billAmount) / Number(this.guestAmount);
  }

}

