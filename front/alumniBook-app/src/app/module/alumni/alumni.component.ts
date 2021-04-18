import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AlumniService } from 'src/app/service/alumni.service';
import { Alumni } from './alumni';

@Component({
  selector: 'app-alumni',
  templateUrl: './alumni.component.html',
  styleUrls: ['./alumni.component.scss']
})
export class AlumniComponent implements OnInit {

  alumniList = Array<Alumni>();

  constructor(private alumniService: AlumniService) { }

  ngOnInit(): void {
  }

  public getAllAlumni() {
    this.alumniService.getAllAlumni().subscribe( data => {
      this.alumniList = data;
    },
    (error : HttpErrorResponse) => {
      console.log("Error: getAllAlumni");
    });
  }

}
