import { Component } from "@angular/core";

@Component({
    selector: 'app-contador',
    template: `
    
    <h1>{{title}}</h1>
    <!-- <h1>{{1*6}}</h1> -->
    <button (click)="acumular(base)">+{{base}}</button>
    <span>{{num}}</span>
    <button (click)="acumular(-base)">-{{base}}</button>
    <h2>{{base}}</h2>
    
    `
})


export class ContadorComponent {

    // public title: string = 'Contador APP';
    title = 'Contador APP';
    num: number = 0;
    base: number = 5

    acumular(valor: number) {
        this.num += valor;

    }
}