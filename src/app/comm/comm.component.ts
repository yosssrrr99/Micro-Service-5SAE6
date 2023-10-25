import { Component, OnInit } from '@angular/core';
import { CommentaireService } from '../commentaire.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comm',
  templateUrl: './comm.component.html',
  styleUrls: ['./comm.component.css']
})
export class CommComponent implements OnInit {

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

}
