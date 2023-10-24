import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housinglocation';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgxSimpleTextEditorModule, EditorConfig, UNDO_BUTTON,
  REDO_BUTTON,
  REMOVE_FORMAT_BUTTON,
  SEPARATOR,
  BOLD_BUTTON,
  ITALIC_BUTTON,
  UNDERLINE_BUTTON,
  STRIKE_THROUGH_BUTTON,
  JUSTIFY_LEFT_BUTTON,
  JUSTIFY_CENTER_BUTTON,
  JUSTIFY_RIGHT_BUTTON,
  JUSTIFY_FULL_BUTTON,
  ORDERED_LIST_BUTTON,
  UNORDERED_LIST_BUTTON,
  INDENT_BUTTON,
  OUTDENT_BUTTON,
  SUBSCRIPT_BUTTON,
  SUPERSCRIPT_BUTTON,
  FONT_SIZE_SELECT,
  UNLINK_BUTTON
  } from 'ngx-simple-text-editor';


@Component({
  selector: 'app-details',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgxSimpleTextEditorModule
  ],
  template: `
  <article>
    <img class="listing-photo" [src]="housingLocation?.photo"
      alt="Exterior photo of {{housingLocation?.name}}"/>
    <section class="listing-description">
      <h2 class="listing-heading">{{housingLocation?.name}}</h2>
      <p class="listing-location">{{housingLocation?.city}}, {{housingLocation?.state}}</p>
    </section>
    <section class="listing-features">
      <h2 class="section-heading">Sobre o imovel</h2>
      <ul>
        <li>Unidades Disponível: {{housingLocation?.availableUnits}}</li>
        <li>Wi-fi: {{housingLocation?.wifi}}</li>
        <li>Salão de Festas: {{housingLocation?.laundry}}</li>
      </ul>
    </section>
    <section class="listing-apply">
      <h2 class="section-heading">Apply now to live here</h2>
      <form [formGroup]="applyForm" (submit)="submitApplication()">
        <label for="first-name">First Name</label>
        <input id="first-name" type="text" formControlName="firstName">

        <label for="last-name">Nome</label>
        <input id="last-name" type="text" formControlName="lastName">      
        <label for="last-name">Decrição</label>
        <st-editor [config]="config"></st-editor>
        <label for="email">E-mail</label>
        <input id="email" type="email" formControlName="email">
        <button type="submit" class="primary">Alugar</button>
      </form>
    </section>
  </article>
`,
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {

  route: ActivatedRoute = inject(ActivatedRoute);
  housingService = inject(HousingService);
  housingLocation: HousingLocation | undefined;

  content = '';
  config: EditorConfig = {
    placeholder: 'Escreva uma descrição...',
    buttons: [
      UNDO_BUTTON,
      REDO_BUTTON,
      REMOVE_FORMAT_BUTTON,
      SEPARATOR,
      SEPARATOR, 
      BOLD_BUTTON, 
      ITALIC_BUTTON,
      UNDERLINE_BUTTON,
      STRIKE_THROUGH_BUTTON,
      JUSTIFY_LEFT_BUTTON,
      JUSTIFY_CENTER_BUTTON,
      JUSTIFY_RIGHT_BUTTON,
      JUSTIFY_FULL_BUTTON,
      ORDERED_LIST_BUTTON,
      UNORDERED_LIST_BUTTON,
      INDENT_BUTTON,
      OUTDENT_BUTTON,
      SUBSCRIPT_BUTTON,
      SUPERSCRIPT_BUTTON,
      FONT_SIZE_SELECT,
      UNLINK_BUTTON,
    ],
  };
  constructor() {
    const housingLocationId = parseInt(this.route.snapshot.params['id'], 10);
    this.housingService.getHousingLocationById(housingLocationId).then(housingLocation => {
      this.housingLocation = housingLocation;
    });
  }
  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('')
  });
  submitApplication() {
    this.housingService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? ''
    );
  }

}


