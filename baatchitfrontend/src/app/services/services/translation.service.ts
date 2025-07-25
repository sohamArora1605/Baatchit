import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslationSettingsDto } from '../models/translation-settings-dto';
@Injectable({ providedIn: 'root' })
export class TranslationService {
  private baseUrl = 'http://localhost:9999/api/v1/translation-settings';

  constructor(private http: HttpClient) {}

  getSettings(email: string) {
    return this.http.get<TranslationSettingsDto>(`${this.baseUrl}?email=${email}`);
  }

  saveSettings(dto: TranslationSettingsDto) {
    return this.http.post<void>(`${this.baseUrl}/save`, dto);
  }
}
