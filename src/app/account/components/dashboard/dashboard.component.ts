import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../../../service.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(private fb: FormBuilder, private srv: ServiceService) {}

  isVisible = false;
  isVisible2 = false;

  validateForm!: FormGroup;

  avaiableAmount = 0;

  ottPlatforms = [];

  ngOnInit(): void {
    this.ottPlatforms = this.srv.getPlatformData();
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      datePicker: [null, [Validators.required]],
      platform: [null, [Validators.required]],
      plan: [null, [Validators.required]]
    });
  }

  showModal(): void {
    this.isVisible = true;
  }

  showModal2(): void {
    this.isVisible2 = true;
  }

  handleOk2(): void {
    this.avaiableAmount = 2000;
    this.isVisible2 = false;
  }

  handleCancel2(): void {
    this.isVisible2 = false;
  }

  handleOk(): void {
    this.srv.setPlatformData();
    this.ottPlatforms = this.srv.getPlatformData();
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }
}
