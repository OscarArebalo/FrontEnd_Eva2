// File: src/app/service/api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = environment.apiUrl.replace(/\/+$/, '');

  constructor(private http: HttpClient) {}

  private buildUrl(path: string): string {
    const cleanPath = path.replace(/^\/+/, '');
    return `${this.baseUrl}/${cleanPath}`;
  }

  private buildHeaders(extra?: { [key: string]: string }): HttpHeaders {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    if (extra) {
      Object.keys(extra).forEach(k => {
        headers = headers.set(k, extra[k]);
      });
    }
    return headers;
  }

  // genéricos
  get<T>(path: string, params?: { [key: string]: any }, extraHeaders?: { [key: string]: string }): Observable<T> {
    const url = this.buildUrl(path);
    const httpParams = new HttpParams({ fromObject: params || {} });
    const headers = this.buildHeaders(extraHeaders);
    return this.http.get<T>(url, { params: httpParams, headers });
  }

  post<T>(path: string, body: any, extraHeaders?: { [key: string]: string }): Observable<T> {
    const url = this.buildUrl(path);
    const headers = this.buildHeaders(extraHeaders);
    return this.http.post<T>(url, body, { headers });
  }

  put<T>(path: string, body: any, extraHeaders?: { [key: string]: string }): Observable<T> {
    const url = this.buildUrl(path);
    const headers = this.buildHeaders(extraHeaders);
    return this.http.put<T>(url, body, { headers });
  }

  delete<T>(path: string, params?: { [key: string]: any }, extraHeaders?: { [key: string]: string }): Observable<T> {
    const url = this.buildUrl(path);
    const httpParams = new HttpParams({ fromObject: params || {} });
    const headers = this.buildHeaders(extraHeaders);
    return this.http.delete<T>(url, { params: httpParams, headers });
  }

  withAuthHeader(token: string): { Authorization: string } {
    return { Authorization: `Bearer ${token}` };
  }

  // --- Clientes ---
  createCliente(data: any): Observable<any> {
    return this.post('clientes', data);
  }
  getCliente(id: string): Observable<any> {
    return this.get(`clientes/${id}`);
  }
  listClientes(skip = 0, limit = 100): Observable<any> {
    return this.get('clientes', { skip, limit });
  }
  updateCliente(id: string, data: any): Observable<any> {
    return this.put(`clientes/${id}`, data);
  }
  deleteCliente(id: string): Observable<any> {
    return this.delete(`clientes/${id}`);
  }

  // --- Medidores ---
  createMedidor(data: any): Observable<any> {
    return this.post('medidores', data);
  }
  getMedidor(id: string): Observable<any> {
    return this.get(`medidores/${id}`);
  }
  listMedidores(skip = 0, limit = 100): Observable<any> {
    return this.get('medidores', { skip, limit });
  }
  updateMedidor(id: string, data: any): Observable<any> {
    return this.put(`medidores/${id}`, data);
  }
  deleteMedidor(id: string): Observable<any> {
    return this.delete(`medidores/${id}`);
  }

  // --- Lecturas ---
  createLectura(data: any): Observable<any> {
    return this.post('lecturas', data);
  }
  getLectura(id: number): Observable<any> {
    return this.get(`lecturas/${id}`);
  }
  listLecturasByMedidor(id_medidor: string, anio?: number, mes?: number): Observable<any> {
    const params: any = { id_medidor };
    if (anio !== undefined) params.anio = anio;
    if (mes !== undefined) params.mes = mes;
    return this.get('lecturas', params);
  }
  deleteLectura(id: number): Observable<any> {
    return this.delete(`lecturas/${id}`);
  }

  // --- Boletas ---
  generateBoleta(id_cliente: string, anio: number, mes: number): Observable<any> {
    // asume endpoint POST /boletas/generate con body { id_cliente, anio, mes }
    return this.post('boletas/generate', { id_cliente, anio, mes });
  }
  getBoletaByClientMonth(id_cliente: string, anio: number, mes: number): Observable<any> {
    // asume endpoint GET /boletas with params
    return this.get('boletas', { id_cliente, anio, mes });
  }
  listBoletasByCliente(id_cliente: string, skip = 0, limit = 100): Observable<any> {
    return this.get('boletas', { id_cliente, skip, limit });
  }
  deleteBoleta(id: string): Observable<any> {
    return this.delete(`boletas/${id}`);
  }
}
