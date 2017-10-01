import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isAuthenticated=false;
  constructor(private router: Router, private authService:AuthService) {
    this.authService.isAuthenticated().subscribe(
      authStatus=> this.isAuthenticated=authStatus)
  }
onLogout()
{
  this.authService.logout();
  this.isAuthenticated=false;
}
  ngOnInit() {
  }
  onNavigate(s: String) {
    this.router.navigate([s]);
  }
}
