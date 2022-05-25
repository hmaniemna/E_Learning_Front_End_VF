import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
import { Admin } from 'src/app/classes/admin';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-manage-admin-account',
  templateUrl: './manage-admin-account.component.html',
  styleUrls: ['./manage-admin-account.component.scss']
})
export class ManageAdminAccountComponent implements OnInit {
  admins!:Admin[];

 


  constructor(private router:Router,
    private route:ActivatedRoute,
    private adminService:AdminService) { this.getAdminInf()}

  ngOnInit(): void {
  }

  //show the table of admin info
  getAdminInf(){
    return this.adminService.getAdminTable().subscribe(data =>{
      this.admins=data;
    });
  }

  //a btn when clicked takes to the space where is the form
  updateAdminAccount(id: number){
    this.router.navigate(["update-account",id]);
   }

}
