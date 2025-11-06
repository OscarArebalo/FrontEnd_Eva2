import { Component } from '@angular/core';
import {Footer} from '../../component/footer/footer';
import {Header} from '../../component/header/header';
import {Sidebar} from '../../component/sidebar/sidebar';
@Component({
  selector: 'app-dashboard',
  imports: [Footer, Header, Sidebar],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {

}
