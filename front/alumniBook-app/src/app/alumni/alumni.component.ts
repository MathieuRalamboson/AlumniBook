import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, SimpleChange } from '@angular/core';
import { Alumni } from '../alumni';
import { AlumniService } from '../alumni.service';
import { Column, GridOdataService, GridOption } from 'angular-slickgrid';
import { Router } from '@angular/router';
import { query } from '@angular/animations';


@Component({
  selector: 'app-alumni',
  templateUrl: './alumni.component.html',
  styleUrls: ['./alumni.component.scss']
})
export class AlumniComponent implements OnInit {
  columnDefinitions: Column[] = [];
  gridOptions: GridOption = {};
  dataset: any[] = [];

  // Modale
  displayModal: boolean = false;

  // Mode Edition
  modeEdition: boolean = false;

  // Alumni objet
  alumniList = Array<Alumni>();
  selectedAlumni?: Alumni;
  name: any;
  jobTitle:any;
  email:any;
  graduationDate: Date | undefined;
  constructor(
    private alumniService: AlumniService,
    private router: Router) { }

  ngOnInit(): void {
    this.getAllAlumni();
    this.prepareGrid();

    // Charge les données en base
    this.alumniService.getAllAlumni().subscribe(((data: any[]) => this.dataset = data) as any)
  }

  ngOnChanges(changes : SimpleChange): void {
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

  public addAlumni(params:any) {
    this.alumniService.createAlummni(params).subscribe( data => {
      console.log(data);
    },
    (error: HttpErrorResponse) => {
      console.log("Error: addAlumni");
    });
  }
 
  onClickAddAlumni() {
    this.clearForm();
    this.showModal();
  }

  showModal() {
    this.displayModal = true;
    console.log("Modale Ouverte !");
  }

  hideModal() {
    this.displayModal = false;
    // Passage en mode Création
    this.modeEdition = false;
    console.log("Modale Fermer !");
  }

  onClickFermerModal() {
    this.hideModal();
  }

  onClickEnregistrerModal() {
    this.hideModal();
    this.submit();
    console.log("Enregistrement!")
  }

  submit() {
    const newForm: any = {
      name: this.name,
      jobTitle: this.jobTitle,
      email: this.email,
      graduationDate:this.graduationDate,
    }

    // On appel le WS de cration de données
    // avec les données du formulaire
    this.addAlumni(newForm);

  }

  fillForm(alumni:any) {
    this.name = alumni.name;
    this.email = alumni.email;
    this.jobTitle = alumni.jobTitle;
  }

  clearForm() {
    this.name = undefined;
    this.email = undefined;
    this.jobTitle = undefined;
  }

  onSelectedAlumni(alumni:any) : void {
    // Passage en mode Edition
    this.modeEdition = true;

    // On recupère l'objet cliquer
    this.selectedAlumni = alumni;
    console.log(this.selectedAlumni);

    // On rempli la modal pour la modification d'un alumni
    this.fillForm(alumni)
    this.showModal();

  }

  prepareGrid() {
    this.columnDefinitions = [
      { id: 'nom', name: 'Nom', field: 'name'},
      { id: 'jobTitle', name: 'Emploi', field: 'jobTitle'},
      { id: 'email', name: 'Email', field: 'email'},
      
    ];

    this.gridOptions = {
      enableAutoResize: true,
      enableSorting: true,
      forceFitColumns: true,
      alwaysShowVerticalScroll: false,
      contextMenu: { hideExportExcelCommand: true },
    };
  }
}
