import { Component, OnInit } from '@angular/core';

import { ICourses } from './course';

@Component({
    selector:'app-course-list',
    templateUrl:'./course-list.component.html'
})

export class courseListComponent implements OnInit {
    
    courses : ICourses[] = [];

    ngOnInit(): void {

        this.courses = [
            {
                id       : 1,
                name     : 'Introdução ao Angular 12',
                imageUrl : '',
                price    : 100,
                code     : 'exemplo-1',
                duration : 20,
                rating   : 4.8, 
            },
            {
                id       : 2,
                name     : 'Introdução ao HTML 5',
                imageUrl : '',
                price    : 100,
                code     : 'exemplo-2',
                duration : 20,
                rating   : 4.5, 
            },
        ]    
    }
}