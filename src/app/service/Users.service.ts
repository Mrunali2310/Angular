import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from 'rxjs';
import { product } from "../product.model";

@Injectable({providedIn:"root"})

export class Userservice{
//     createUser: any;
//   createProduct: any;
//   Updateproduct: any;
//   onUserCreate: any;
//   UpdateUser: any;
    constructor(private http: HttpClient){

    }
    onAddUser(products:{Name:string,Technology:string}){
        console.log(products)
   const headers = new HttpHeaders({'myHeader': 'project'});
   this.http.post<{name:string}>('https://angularbyproject-c41b6-default-rtdb.firebaseio.com/product.json',
   products,{headers:headers}).subscribe
   ((res)=>{
     console.log(res);
   


    });

    }
    fetchUser(){
       return this.http.get<{[key:string]:product}>('https://angularbyproject-c41b6-default-rtdb.firebaseio.com/product.json')
        .pipe(map((res)=>{
          const products =[];
          for(const key in res){
            if(res.hasOwnProperty(key)){
              products.push({...res[key],id:key})
            }
            
      
          }
          return products;
      
        }))
       
    }
    deleteUser(id:string){
        this.http.delete('https://angularbyproject-c41b6-default-rtdb.firebaseio.com/product/'+id+'.json')
        .subscribe();

    }
    deleteAllUser(){
        this.http.delete('https://angularbyproject-c41b6-default-rtdb.firebaseio.com/product/.json')
       .subscribe();

    }
    Updateuser(id:string,value:product){
        this.http.put('https://angularbyproject-c41b6-default-rtdb.firebaseio.com/product/'+id+'.json',value)
       .subscribe();
    }

}