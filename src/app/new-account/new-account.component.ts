import { Component, Output, EventEmitter, inject, OnInit } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-new-account',
  imports: [],
  templateUrl: './new-account.component.html',
  styleUrl: './new-account.component.css',
})
export class NewAccountComponent implements OnInit {
  accountService = inject(AccountsService);
  para: string = '';
  // logService = inject(LoggingService);

  constructor() {}

  ngOnInit(): void {
    this.accountService.statusUpdated.subscribe(
      (data: string) => (this.para = data)
    );
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccount(accountName, accountStatus);
    // this.logService.logStatusChange(accountStatus);
  }
}
