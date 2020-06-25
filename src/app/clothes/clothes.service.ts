import { Injectable } from '@angular/core';

@Injectable()
export class ClothesService{
    public data:string="Clothes Emporioum";
    public getData():string{
        return this.data+" "+" started by Kiran"
    }
}