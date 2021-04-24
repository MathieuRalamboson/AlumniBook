import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Alumni } from '../alumni';
import { AlumniService } from '../alumni.service';
import { Column, GridOption } from 'angular-slickgrid';


@Component({
  selector: 'app-alumni',
  templateUrl: './alumni.component.html',
  styleUrls: ['./alumni.component.scss']
})
export class AlumniComponent implements OnInit {
  columnDefinitions: Column[] = [];
  gridOptions: GridOption = {};
  dataset: any[] = [];

  //Modale
  displayModal: boolean = false;

  alumniList = Array<Alumni>();
  constructor(private alumniService: AlumniService) { }

  ngOnInit(): void {
    this.getAllAlumni();
    this.prepareGrid();
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

  onClickAddAlumni() {
    this.showModal();
  }

  showModal() {
    this.displayModal = true;
    console.log("Modale Ouverte !");
  }

  hideModal() {
    this.displayModal = false;
    console.log("Modale Fermer !");
  }

  onClickFermerModal() {
    this.hideModal();
  }

  onClickEnregistrerModal() {
    this.hideModal();
    console.log("Enregistrement!")
  }

  prepareGrid() {
    this.columnDefinitions = [
      { id: 'nom', name: 'Nom', field: 'nom'},
      { id: 'prenom', name: 'Prénom', field: 'prenom'},
      
    ];

    this.gridOptions = {
      enableAutoResize: true,
      enableSorting: true
    };

    // fill the dataset with your data
    this.dataset = [
      {
        id:'1',
        nom : "Papa",
        prenom : "Papa"
      },
      {
        id:'2',
        nom : "Maman",
        prenom : "Maman"
      },
  ];
  }




}
