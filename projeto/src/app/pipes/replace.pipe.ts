import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'replace'
})
    // implements PipeTransform: disponibiliza um metodo de transformação de exibição
export class ReplacePipe implements PipeTransform {       

    // primeiro parametro recebe o nome da propriedade em que o pipe será inserido
    // segundo parametro recebe o caractere substituido no transform
    // terceiro parametro recebe o valor pelo qual o segundo parametro será substituido
    transform(propriedade: string, char: string, novoValor: string){    
        return propriedade.replace(char, novoValor);
    } 
}