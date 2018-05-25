import { Component, OnInit } from '@angular/core';



declare var jquery: any;
declare var $: any;
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    $('#cart').on('click', function() {
      $('.shopping-cart').fadeToggle( 'fast');
    });
  }

}
