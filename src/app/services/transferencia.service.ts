import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transferencia } from 'src/models/transferencias.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {
  private Listatransferencia: any[];
  private url = 'http://localhost:3000/transferencias'
  constructor(private httpClient: HttpClient) {
    this.Listatransferencia = [];
  }

  get transferencias() {
    return this.Listatransferencia;
  }

  adicionar(transferencia: Transferencia): Observable<Transferencia>{
    this.hidratar(transferencia);
    return this.httpClient.post<Transferencia>(this.url, transferencia)
  }

  private hidratar(transferencia: any) {
    transferencia.data = new Date();

  }

  todas(): Observable<Transferencia[]> {
    return this.httpClient.get<Transferencia[]>(this.url);
  }
}
