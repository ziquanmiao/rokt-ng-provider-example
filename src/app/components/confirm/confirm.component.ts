import { Component, OnInit } from '@angular/core';

import { RoktContextProviderService } from '../rokt-context-provider.service';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss'],
})
export class ConfirmComponent implements OnInit {
  constructor(private rokt: RoktContextProviderService) {}

  ngOnInit(): void {
    this.rokt.triggerPageChange('');
  }
}
