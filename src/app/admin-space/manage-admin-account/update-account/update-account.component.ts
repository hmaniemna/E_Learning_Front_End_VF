import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
import { Admin } from 'src/app/classes/admin';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-update-account',
  templateUrl: './update-account.component.html',
  styleUrls: ['./update-account.component.scss']
})
export class UpdateAccountComponent implements OnInit {

  id!:number;
  admin:Admin = new Admin();

  //for the validation
  createAdmin= new FormGroup({
    code: new FormControl('',[Validators.required,Validators.minLength(3)]),
    password: new FormControl('',[Validators.required,Validators.minLength(3)]),
  })


  constructor(private router:Router,
    private route:ActivatedRoute,
    private adminService:AdminService) { }

  ngOnInit(): void {

    //to fill the form with the admin data by the getAdminById
    this.id=this.route.snapshot.params['id'];
    this.adminService.getAdminById(this.id).subscribe(data =>{
      this.admin=data;
    },
    error=> console.log(error));
  }

    //for the validation to get the values from all fields 
    get code(){return this.createAdmin.get('code')}
    get password(){return this.createAdmin.get('password')}
  
    onSubmit(){
      this.adminService.updateAdmin(this.id,this.admin).subscribe(data =>{ 
        this.goToAdminTable();
      },
      error => console.log(error));
      
    }
    
    goToAdminTable(){
      this.router.navigate(['/manage-admin-account']);
    }

}