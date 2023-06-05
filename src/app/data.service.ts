import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  
//   url = 'http://localhost:3000/post';
  
//   constructor(private http: HttpClient){}
  
// getuserbyid(userid:string){
//   return this.http.get<any>(this.url+"/"+userid);

// }

//   users(){
//     return this.http.get(this.url);
//   }
//   Saveuser(data:any){
//     return this.http.post(this.url,data)
//   }
//    deleteuser(userId:any){
//     const url ='http://localhost:3000/post/' +userId;
//     return this.http.delete(url);
//    }
  
//    updateUser(userId:any,updateBody:any)
//    {
//     const url =' http://localhost:3000/post/' +userId;
//     return this.http.put(url,updateBody);

//    }
//   // updateuser(user:any):Observable<number>{
  //   let httpheader=new HttpHeaders()
  //   .set('content-type','application/json');
  //   let options={
  //     headers:httpheader
  //   };
  //   return this.http.put<number>(this.url+"/"+user.id,user,options);
  // }
   

 
}
