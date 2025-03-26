import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-account',
  imports: [],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css',
})
export class AccountComponent {
  @Input() account!: { name: string; status: string };
  @Input() id!: number;
  // @Output() statusChanged = new EventEmitter<{
  //   id: number;
  //   newStatus: string;
  // }>();

  // logService = inject(LoggingService);
  accountService = inject(AccountsService);
  constructor() {}

  onSetTo(status: string) {
    this.accountService.updateStatus(this.id, status);
    this.accountService.statusUpdated.emit(status);
    // this.logService.logStatusChange(status);
  }
}
