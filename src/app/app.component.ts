import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { ToolbarNav } from './nav-bar/nav-bar.component';
import { NgxSimpleTextEditorModule } from 'ngx-simple-text-editor';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HomeComponent,
    RouterModule,
    ToolbarNav,
    NgxSimpleTextEditorModule
  ],
  template: `
  <main>
    <a [routerLink]="['/']">
      <header class="brand-name">
        <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true">
      </header>
    </a>
    
  <!-- Carrega o novo menu, ao clicar não vai para página de detalhes
  <toolbar-nav></toolbar-nav>
  <app-home></app-home> 
  -->
    <section class="content">
      <router-outlet></router-outlet>
    </section>
  </main>
`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'homes';
}
