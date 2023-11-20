import {Component, OnInit} from '@angular/core';
import {AuthentificationService} from "../authentification.service";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  loggedIn: boolean = false

  constructor(private authService : AuthentificationService,private router : Router,private toastr: ToastrService) {

  }

  ngOnInit(): void {
    this.authService.user$.subscribe((user) => {
      this.loggedIn = !!user
    });
  }


  visibility = false;
  show() {
    this.visibility=!this.visibility;
  }

  logout() {
    if (this.authService.logout()) {
      this.toastr.success('Logged Out !', 'Logout');
      this.router.navigate(['cv'])
    } else {
      alert("An error has occurred. Please try again !")
    }
  }



}
