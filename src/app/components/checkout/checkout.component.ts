import { Component, OnInit } from '@angular/core';
import { RoktContextProviderService } from '../rokt-context-provider.service';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  constructor(private rokt: RoktContextProviderService) {}

  ngOnInit(): void {
    this.rokt.triggerPageChange('');
  }
}
