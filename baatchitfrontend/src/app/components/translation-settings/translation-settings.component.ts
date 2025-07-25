import { Component, OnInit } from '@angular/core';
import { TranslationService } from '../../services/services/translation.service';
import { TranslationSettingsDto } from '../../services/models/translation-settings-dto';
import { KeycloakService } from '../../utils/keycloak/keycloak.service'; 
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  
  standalone: true,
  imports: [CommonModule, FormsModule], 
  selector: 'app-translation-settings',
  templateUrl: './translation-settings.component.html',
  styleUrls: ['./translation-settings.component.scss']
})
export class TranslationSettingsComponent implements OnInit {
  settings: TranslationSettingsDto = {
    email: '',
    enabled: false,
    preferredLanguage: null
  };

  languages = ['ENGLISH', 'HINDI', 'FRENCH', 'GERMAN', 'SPANISH']; 
  success = false;

  constructor(
    private translationService: TranslationService,
    private keycloakService: KeycloakService
  ) {}

  ngOnInit(): void {
    const email = this.keycloakService.getEmail(); // or however you get the user
    this.settings.email = email;
    this.translationService.getSettings(email).subscribe((data) => {
      this.settings = data;
    });
  }

  save(): void {
    this.translationService.saveSettings(this.settings).subscribe(() => {
      this.success = true;
      console.log(this.settings);
      setTimeout(() => (this.success = false), 2000);
    });
  }
}
