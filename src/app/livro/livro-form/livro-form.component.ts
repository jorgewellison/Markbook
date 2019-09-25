import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import { LivroService } from '../livro.service';

@Component({
  selector: 'app-livro-form',
  templateUrl: './livro-form.component.html',
  styleUrls: ['./livro-form.component.css']
})
export class LivroFormComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: LivroService,
    private route: ActivatedRoute,
    // private router: Router,
    private location: Location,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: any) => {
        const id = params['id'];
        const livro = this.service.loadByID(id);
        livro.subscribe(livro => {
          this.updateForm(livro);
        });
      }
    )

    this.form = this.formBuilder.group({
      id: [null],
      nome: [null],
      autor: [null],
      src: [null],
    });
  }

  onSubmit() {
    if(this.form.value.id) {
      //update
      this.service.update(this.form.value).subscribe(sucesso => {
        alert('livro atualizado com sucesso!');
      });
    } else {
      //create
      this.service.create(this.form.value).subscribe(sucesso => {
        alert('livro criado com sucesso!');
        this.location.back();
      });
    }    
  }

  // gotoLivroList() {
  //   this.router.navigate(['/livros']);
  // }

  onCancel() {
    this.form.reset();
    this.location.back();
  }

  updateForm(curso) {
    this.form.patchValue({
      id: curso.id,
      nome: curso.nome,
    });
  }
}
