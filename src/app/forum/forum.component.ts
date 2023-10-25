import { Component, OnInit } from '@angular/core';
import { SujetService } from '../sujet.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {
  Sujet:any;
  sujetDetails:any;
  sujetToUpdate:any;
  selectedSujetId: any;
  constructor(private sujetService:SujetService) { 
   
    this.getSujetDetails();
  }

  ngOnInit(): void {
    this.Sujet= {
      _id: null,
      title: null,
      about: null,
      description: null,
      tags: null
     }
     this.sujetToUpdate={
      _id: null,
      title: null,
      about: null,
      description: null,
      tags: null
     }
  }
  getSujetDetails() {
    this.sujetService.getAllSujet().subscribe(
      (resp) => {
        console.log(resp);
        this.sujetDetails = resp;
      },
      (err) => {
        console.log(err);
      }
    );
  }
  addSujet() {
    this.sujetService.createSujet(this.Sujet).subscribe(
      (resp) => {
        console.log(resp);
        
       
     
      },
      (err) => {
        console.log(err);
        
      }
    );
  }
  edit(sujet: any){
    
    this.sujetToUpdate = sujet;
  
    // Copier les valeurs de sujetToUpdate vers Sujet
    this.Sujet._id=this.sujetToUpdate._id;
    this.Sujet.title = this.sujetToUpdate.title;
    this.Sujet.about = this.sujetToUpdate.about;
    this.Sujet.description = this.sujetToUpdate.description;
    this.Sujet.tags = this.sujetToUpdate.tags;
    this.selectedSujetId=this.Sujet._id
    
  }
  
 
  updateSujet(){
  this.sujetService.updateSujet(this.sujetToUpdate._id,this.sujetToUpdate).subscribe(
    (resp) => {
      console.log(resp);
    
    },
    (err) => {
      console.log(err);
    }
  );
}
addOrUpdateSujet() {
  if (this.Sujet._id === null) {
    // Ajout d'un nouveau sujet
    this.sujetService.createSujet(this.Sujet).subscribe(
      (resp) => {
        this.getSujetDetails();
        console.log(resp);
        // Réinitialiser le formulaire
        this.Sujet = {
          _id: null,
          title: null,
          about: null,
          description: null,
          tags: null
        };
      },
      (err) => {
        console.log(err);
      }
    );
  } else {
    // Mise à jour d'un sujet existant
    this.sujetService.updateSujet(this.Sujet._id,this.Sujet).subscribe(
      (resp) => {
        this.getSujetDetails();
        console.log(resp);
        // Réinitialiser le formulaire
        this.Sujet = {
          _id: null,
          title: null,
          about: null,
          description: null,
          tags: null
        };
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
deleteSujet(id:number) {
  this.sujetService.deleteDish(id).subscribe(
    (resp) => {
      console.log(resp);
      this.getSujetDetails();
    },
    (err) => {
      console.log(err);
    }
  );
}


  




}
