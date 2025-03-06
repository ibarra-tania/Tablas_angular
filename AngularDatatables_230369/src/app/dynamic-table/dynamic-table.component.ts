import { AfterViewInit, Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as $ from 'jquery';
import 'datatables.net'
import {DataTableDirective} from 'angular-datatables';
import { Observable, observeOn, Subject } from 'rxjs';
import DataTables from 'datatables.net';


@Component({
  selector: 'app-dynamic-table',
  imports: [],
  templateUrl: './dynamic-table.component.html',
  styleUrl: './dynamic-table.component.css'
})
export class DynamicTableComponent implements OnInit, AfterViewInit{
  users: any[] = [];
  
  constructor(private http: HttpClient) { }

  ngOnInit(): void { 
    this.http.get<any[]>('http://jsonplaceholder.typicode.com/users')
    .subscribe(data =>{
        this.users=data;
        setTimeout(() =>{
          this.initDataTable();
        }, 500)
    })
  }

  
}
