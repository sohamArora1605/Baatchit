/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

export interface MessageResponse {
  content?: string;
  createdAt?: string;
  translatedMessage?: string|null;       // Translated version (if available)
  translationStatus?: 'SUCCESS' | 'FAILED' | 'NOT_APPLICABLE'; 
  id?: number;
  media?: Array<string>;
  receiverId?: string;
  senderId?: string;
  state?: 'SENT' | 'SEEN';
  type?: 'TEXT' | 'IMAGE' | 'VIDEO' | 'AUDIO';
}
