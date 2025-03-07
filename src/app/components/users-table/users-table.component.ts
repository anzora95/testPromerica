import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css']
})
export class UsersTableComponent implements OnInit{

  public listUser: User[] = [];

  constructor(private userService: UserService){};

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
      this.userService.getUserList().subscribe((listUsers: User[]) =>{
        this.listUser= listUsers;
      })
  }

  getFlagUrl(countryCode: string): string {
    return `https://flagsapi.com/${countryCode}/flat/24.png`;
  }
      
  }

