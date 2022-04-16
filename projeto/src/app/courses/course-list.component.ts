import { CourseService } from './course.service';
import { Component, OnInit } from '@angular/core';

import { ICourses, ItableHeader } from './course';

@Component({
    selector:'app-course-list',
    templateUrl:'./course-list.component.html',
    styleUrls: ['./course-list.component.css']
})

export class courseListComponent implements OnInit {
    
    _courses  : ICourses[] = [];
    header!   : ItableHeader[];

    _pesquisa!        : string;
    cursosFiltrados!  : ICourses[]

    constructor(private CourseService: CourseService){
        this._courses = this.CourseService.retrieveAll();
    }

    ngOnInit(): void {
        // Table cabeçalho //
        this.header = [
            {
                imagem :'',
                nome   :'Curso',
                preco  :'Preço',
                code   :'Codigo',
                rating :'Avaliação',
                opcoes :'Opções'
            }
        ]
        this.cursosFiltrados = this._courses
    }

    // Eventos de filtro de pesquisa // 
    set filtro(valor: string){
        this._pesquisa = valor;

        this.cursosFiltrados = this._courses.filter((course: ICourses) => course.name.toLocaleLowerCase().indexOf(this._pesquisa.toLocaleLowerCase()) > -1)
    }
    get filtro(){
        return this._pesquisa
    }
}