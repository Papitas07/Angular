import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  User = {
    name : 'Snape',
    firstName : 'Severus',
    age : 40,
    quote : '',
    photo : 'https://akns-images.eonline.com/eol_images/Entire_Site/2015117/rs_560x415-151207111821-560-Alan-Rickman-Harry-Potter.jm.120715.jpg?fit=inside|900:auto&output-quality=90',
    hide : true,
  };
  constructor() { }

  ngOnInit() {
  }


}
