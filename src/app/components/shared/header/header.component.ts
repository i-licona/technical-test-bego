import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input()
  public title:string;
  @Input()
  public url:string;

  /**
   *
   */
  constructor(
    private router:Router
  ) {
  }

  public reditectTo(){
    console.log( `['/${this.url}']`);
    this.router.navigate(['/', this.url]);
  }
}
