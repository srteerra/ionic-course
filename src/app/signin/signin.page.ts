import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

import {
  FormGroup,
  Validators,
  FormControl,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {
  formLogin: FormGroup;
  constructor(
    public fb: FormBuilder,
    public router: Router,
    public alertController: AlertController
  ) {
    this.formLogin = this.fb.group({
      name: new FormControl('', Validators.required),
      pass: new FormControl('', Validators.required),
    });
  }

  ngOnInit() {}

  async log() {
    const userValues = this.formLogin.value;

    const usuario = JSON.parse(localStorage.getItem('user'));

    if (
      usuario.userName === userValues.name &&
      usuario.pass === userValues.pass
    ) {
      this.router.navigate(['/dashboard', userValues.name]);
    } else {
      const alert = await this.alertController.create({
        header: 'Oh no!',
        message: 'Incorrect credentials',
        buttons: ['OK'],
      });

      await alert.present();
    }
  }
}
