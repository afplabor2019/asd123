import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantsService {
  readonly baseAppUrl: string = 'http://localhost:3000/api';
  readonly publicKey: string = '2033792262';
}
