import { Component } from '@angular/core';
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'tp1';
  constructor(private toastr: ToastrService) {}

  showSuccessToast() {
    this.toastr.success('Success message', 'Success', {
      toastClass: 'toast-success',
    });
  }

  showErrorToast() {
    this.toastr.error('Error message', 'Error', {
      toastClass: 'toast-error',
    });
  }

}
