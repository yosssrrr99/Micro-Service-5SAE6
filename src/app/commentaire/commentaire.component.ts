import { Component, OnInit } from '@angular/core';
import { CommentaireService } from '../commentaire.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-commentaire',
  templateUrl: './commentaire.component.html',
  styleUrls: ['./commentaire.component.css']
})
export class CommentaireComponent implements OnInit {
  Commentaire:any;
  commentaireDetails:any;
 CommentaireToUpdate:any;
 selectedSujetId:any;
  constructor(private commentaireService: CommentaireService, private route: ActivatedRoute) {
   this.route.params.subscribe((params) => {
  if (params['id']) {
    this.selectedSujetId = params['id'];
    console.log(this.selectedSujetId);
  }

});


   }

  ngOnInit(): void {
    this.getCommentairDetails();
    this.Commentaire= {
      _id: null,
      content: null
     }
     this.CommentaireToUpdate={
      _id: null,
      content: null
     }
  }
  
  addComment() {
    this.commentaireService.addComment(this.Commentaire,this.selectedSujetId).subscribe(
      (response) => {
        // Le commentaire a été ajouté avec succès
        console.log('Commentaire ajouté :', response);
        
      },
      (error) => {
        console.error('Erreur lors de l\'ajout du commentaire :', error);
      }
    );
  }
  getCommentairDetails() {
    console.log(this.selectedSujetId);
    this.commentaireService.getCommentaireById(this.selectedSujetId).subscribe(
      (resp) => {
        console.log(resp);
        this.commentaireDetails = resp;
      },
      (err) => {
        console.log(err);
      }
    );
  }
  edit(commentaire: any){
    
    this.CommentaireToUpdate = commentaire;
  
    // Copier les valeurs de sujetToUpdate vers Sujet
    this.Commentaire._id=this.CommentaireToUpdate._id;
    this.Commentaire.content = this.CommentaireToUpdate.content;
   
    
  }
  addOrUpdatecommentaire() {
    if (this.Commentaire._id === null) {
      // Ajout d'un nouveau sujet
      this.commentaireService.addComment(this.Commentaire,this.selectedSujetId).subscribe(
        (resp) => {
          this.getCommentairDetails();
          console.log(resp);
          // Réinitialiser le formulaire
          this.Commentaire = {
            _id: null,
            content: null
          };
        },
        (err) => {
          console.log(err);
        }
      );
    } else {
      // Mise à jour d'un sujet existant
      this.commentaireService.updateCommentaire(this.Commentaire._id,this.Commentaire).subscribe(
        (resp) => {
          this.getCommentairDetails();
          console.log(resp);
          // Réinitialiser le formulaire
          this.Commentaire = {
            _id: null,
            content: null
          };
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }


  deleteCommentaire(id:number) {
  this.commentaireService.deleteCommentaire(id).subscribe(
    (resp) => {
      console.log(resp);
      this.getCommentairDetails();
    },
    (err) => {
      console.log(err);
    }
  );
}

}
