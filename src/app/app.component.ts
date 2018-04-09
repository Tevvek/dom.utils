import { Component, AfterViewInit } from '@angular/core';
//import { DOMUtils } from '~domUtils';
import { DOMUtils } from './dom-utils/dom-utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'app';

  ngAfterViewInit() {
    var vm = this;
    vm.load('social-icons');
  }

  load = (type) => {
    if(type === 'social-icons')
      this.loadSocialIcons();
  }

  loadSocialIcons = () => {
    let twitter = document.getElementById('twitter');
    let facebook = document.getElementById('facebook');
    let pinterest = document.getElementById('pinterest');
    let googleplus = document.getElementById('googleplus');
    
    DOMUtils.create('social-icon').social('twitter').set(twitter);
    DOMUtils.create('social-icon').social('facebook').set(facebook);
    DOMUtils.create('social-icon').social('pinterest').set(pinterest);
    DOMUtils.create('social-icon').social('googleplus').set(googleplus);
  }

}
