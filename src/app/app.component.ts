import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { AccountsService } from './accounts.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AccountComponent, NewAccountComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  accountsService = inject(AccountsService);

  accounts: { name: string; status: string }[] = [];

  constructor() {}

  ngOnInit(): void {
    this.accounts = this.accountsService.accounts;
  }
}
