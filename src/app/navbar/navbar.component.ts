import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
import{AuthService} from 'src/app/services/auth.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
isLogin : boolean = false;
sitelanguage :any='English';
siteLocale :string='';
LanguageList =[
{code :'en' ,label :'English'},
{code :'fr' ,label :'française'},
{code :'es' ,label :'española'},

];
constructor(private loginService:AuthService,private router : Router){}
ngOnInit():void {

  this.siteLocale=window.location.pathname.split('/')[1];
   
  this.sitelanguage =this.LanguageList.find(f=>f.code===this.siteLocale)?.label;
  
 
 
    
   
  
  
  this.loginService.userData.subscribe(() =>{
    if(this.loginService.userData.getValue()!=null){
      this.isLogin = true;
    }else{
      this.isLogin = false; 
    }
  })
}
logout(){
  this.loginService.Logout();
}
}
