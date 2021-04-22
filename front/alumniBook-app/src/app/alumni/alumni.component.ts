import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Alumni } from '../alumni';
import { AlumniService } from '../alumni.service';

@Component({
  selector: 'app-alumni',
  templateUrl: './alumni.component.html',
  styleUrls: ['./alumni.component.scss']
})
export class AlumniComponent implements OnInit {

  alumniList = Array<Alumni>();
  constructor(private alumniService: AlumniService) { }

  ngOnInit(): void {
    this.getAllAlumni();
  }

  public getAllAlumni() {
    this.alumniService.getAllAlumni().subscribe( data => {
      console.log(data);
      this.alumniList = data;
    },
    (error : HttpErrorResponse) => {
      console.log("Error: getAllAlumni");
    });
  }




}
