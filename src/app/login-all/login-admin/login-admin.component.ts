import { Component, OnInit } from '@angular/core';
import {Admin} from "../../classes/admin";
import { AdminService } from 'src/app/services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.scss']
})
export class LoginAdminComponent implements OnInit {

  admin: Admin = new Admin;

  constructor(private router: Router,
    private adminService: AdminService ) { }

  ngOnInit(): void {
  }

  loginAdmin(){
    console.log(this.admin);
    this.adminService.adminLogin(this.admin.code,this.admin.password).subscribe(data=> {
      alert("Login operation successful!");
      this.goToAdminSpace();
    },
    error => alert("Error, Please retry!"));
  }


  goToAdminSpace(){
    this.router.navigate(['/admin-space']);
  }

}