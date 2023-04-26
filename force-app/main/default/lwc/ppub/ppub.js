import { LightningElement, api } from 'lwc';

export default class Ppub extends LightningElement {
    @api ide;
    @api nome;
    @api valor;
    @api fase;
}