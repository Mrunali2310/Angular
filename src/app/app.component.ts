import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, } from '@angular/forms';
import { FormControl,FormGroup,Validators,FormBuilder } from '@angular/forms';

import { DataService } from './data.service';
import { product } from './product.model';

import { Userservice } from './service/Users.service';


@Component({
  selector: 'app-root',
  //.....................................Template....................................//
  //template: '<h1>Template Example</h1><hr><div>This is template inside component file</div>',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{

 
  
 
 
  //.........................................*ngswitch.............................//
   weekDay : string ="Monday"
   
   
  
  //.........................................Interpolation,,/Property binding...........................//
  title = 'Angular';
  c=7;
  d='shyam';
  DataService: any;
  // getData: any;
  home: any;
  activeindex: any;
 
  // a=45;
  // b=68;

  //..........................................Event binding...............................//
  getVal()
  {
    alert("Evidieant")
    
  }

  //...........................................Two way binding.................................//
  name:any[] | undefined;


  //.............................NgIf..................................//
  show : boolean =true;

  //......................................*ngFor...........................................//
  public employee:any =[
    {id:1,name:'Mrunali',salary:30000,gender:'female'},
    {id:2,name:'Gaytri',salary:35000,gender:'female'},
    {id:3,name:'Manasi',salary:40000,gender:'female'},
    ]
  
//.....................................Data binding........................................//
 
  //...................................Pipes.....................................//
  user="Atos"
 
  
  Amount=2000.122;
  currentdate=new Date();
  percentageData=0.438;
  index="Welcome to Atos";
  Dob=23/10/2000;

  
  //-------------------------------template reference variable-------------//

  // getData(item:any)//template ref variable
    loginUser(item:any)//template driven form
  {
  // console.warn(item);//template ref variable
  
  
  
    
   
   }

// ------------------------------EX of Reactive-------------------------//
//    form = new FormGroup({
//     firstname: new FormControl('', [Validators.required, Validators.minLength(4)]),
//     lastname: new FormControl('', [Validators.required, Validators.minLength(4)]),
//     email: new FormControl('', [Validators.required, Validators.email]),
//     city: new FormControl('', [Validators.required, Validators.minLength(3)]),
//     address: new FormControl('', [Validators.required, Validators.minLength(10)]),
    
//   });
  
//   get Details() {
//     return this.form.controls;
//   }
  
//   submit() {
//     console.log(this.form.value);
//   }
  

  


//--------------Get HttpClient----------//
  // usersList : any;
  // datasaved = false;
  // usersForm: any;
  // allusers:any;
 
  
  
  ngOnInit(): void{
    this.OnfetchUser();
   
  }  
 @ViewChild('userForm') userForm!: NgForm;
  
  constructor( private UserService: Userservice){

  }
  onFetch(){
    this.OnfetchUser();
  }
  allUsers:product [] =[];
  editMode:boolean = false;
  isFetching:boolean=false;
  currentUserId:string;
 @ViewChild('usersForm') Form: NgForm;


onUserCreate(products:{Name:string,Technology:string}){
  if(!this.editMode)
  this.UserService.onAddUser(products);
  else
  this.UserService.Updateuser(this.currentUserId,products);
   
 }

 private OnfetchUser(){
  this.isFetching=true;
  this.UserService.fetchUser().subscribe((products)=>{
    this.allUsers = products
    this.isFetching=false;
    
  })

 }
 onDeleteUser(id:string){
 this.UserService.deleteUser(id);
}
 

onDeleteAllUser(){
this.UserService.deleteAllUser();
}
 OnEditClicked(id:string){
  
  this.currentUserId =id;
   let currentUser= this.allUsers.find((U)=>{return U.id === id});
   console.log(this.Form);
   this.Form.setValue({
    Name:currentUser.Name,
    Technology:currentUser.Technology
  
   });
   this.editMode =true;
   
 }

}
 