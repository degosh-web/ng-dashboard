import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from '../../services/user'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [UserService]
})

export class DashboardComponent implements OnInit {
  users!: User[];
  discordId!: string;
	username!: string;
	email!: string;
	avatar!: string;
	discriminator!: string;

  // dependency injection aka inject a service insice a component
  constructor(private UserService: UserService) { }

  ngOnInit(): void {
    this.UserService.getUsers()
      .subscribe( users => this.users = users)
  }



}
