import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from "@angular/forms";
import {ApiService} from "./api.service";
import {Pessoa} from "./Pessoa";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
    // formCliente: FormGroup = this.fb.group({
    //     name: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(50)])],
    //     email: ['', Validators.compose([Validators.required, Validators.email])],
    // });


    usuario: any ={
        nome:null,
        email:null,
        senha: null,
        confirmaSenha: null
    }
    // @ts-ignore
    formCliente: FormGroup;

    // @ts-ignore
    pessoa: Pessoa[];

    constructor(private sevice: ApiService, private fb: FormBuilder) { }
  ngOnInit(): void {
        this.formCliente = this.usuario.group({
            nome :[null,[Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
            email :[null],
            senha :[null,[Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
            confirmaSenha :[null,[Validators.required, Validators.minLength(6), Validators.maxLength(50)]]
        });
  }


    onSubmit(f: NgForm) {
        console.log(this.usuario)


        if(this.usuario != null){
            console.log("submi....")
            this.sevice.create(this.usuario).subscribe(
                success => console.log('sucesso'),
                error => console.error(error),
                () => console.log('request completo')
            );
        }
    }
}
