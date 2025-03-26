import { EventEmitter, inject, Injectable } from '@angular/core';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root',
})
export class AccountsService {
  accounts = [
    {
      name: 'Master Account',
      status: 'active',
    },
    {
      name: 'Test Account',
      status: 'inactive',
    },
    {
      name: 'Hidden Account',
      status: 'unknown',
    },
  ];

  logService = inject(LoggingService);

  statusUpdated = new EventEmitter<string>();

  constructor() {}

  addAccount(name: string, status: string) {
    this.accounts.push({ name, status });
    this.logService.logStatusChange(status);
  }

  updateStatus(index: number, newStatus: string) {
    this.accounts[index].status = newStatus;
    this.logService.logStatusChange(newStatus);
  }
}
