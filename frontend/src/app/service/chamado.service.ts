import { ChamadoInc } from './../views/chamados/ChamadoInc.model';
import { ChamadoSla } from '../views/chamados/Chamadosla.model';
import { ChamadoRitm } from '../views/chamados/Chamadoritm.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';


@Injectable({
  providedIn: 'root'
})
export class ChamadoService {

    baseURLINC = "http://localhost:3000/chamadoinc"
    baseURLSLA = "http://localhost:3000/chamadosla"
    baseURLRITM = "http://localhost:3000/chamadoritm"
        

  constructor(private _snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void {
    this._snackBar.open(msg, '',{
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"

    })
  }


  // Criando
  createChamadoInc (chamadosinc: ChamadoInc): Observable<ChamadoInc>{
    return this.http.post<ChamadoInc>(this.baseURLINC, chamadosinc)
  }

  createChamadoSla (chamadossla: ChamadoSla): Observable<ChamadoSla>{
    return this.http.post<ChamadoSla>(this.baseURLSLA, chamadossla)
  }

  createChamadoRitm (chamadosritm: ChamadoRitm): Observable<ChamadoRitm>{
    return this.http.post<ChamadoRitm>(this.baseURLRITM, chamadosritm)
  }


  //Lendo
  readinc(): Observable<ChamadoInc[]> {
    return this.http.get<ChamadoInc[]>(this.baseURLINC)
  }

  readsla(): Observable<ChamadoSla[]> {
    return this.http.get<ChamadoSla[]>(this.baseURLSLA)
  }

  readritm(): Observable<ChamadoRitm[]> {
    return this.http.get<ChamadoRitm[]>(this.baseURLRITM)
  }

  //update
  
  readByIdInc(id: string): Observable<ChamadoInc> {
    const url = `${this.baseURLINC}/${id}`
    return this.http.get<ChamadoInc>(url)
  }

  updateInc(chamadoinc: ChamadoInc): Observable<ChamadoInc>{
    const url = `${this.baseURLINC}/${chamadoinc.id}`
    return this.http.put<ChamadoInc>(url, chamadoinc)   
  }

  readByIdSla(id: string): Observable<ChamadoSla> {
    const url = `${this.baseURLSLA}/${id}`
    return this.http.get<ChamadoSla>(url)
  }

  updateSla(chamadosla: ChamadoSla): Observable<ChamadoSla>{
    const url = `${this.baseURLSLA}/${chamadosla.id}`
    return this.http.put<ChamadoSla>(url, chamadosla)   
  }

  readByIdRitm(id: string): Observable<ChamadoRitm> {
    const url = `${this.baseURLRITM}/${id}`
    return this.http.get<ChamadoRitm>(url)
  }

  updateRitm(chamadoritm: ChamadoRitm): Observable<ChamadoRitm>{
    const url = `${this.baseURLRITM}/${chamadoritm.id}`
    return this.http.put<ChamadoRitm>(url, chamadoritm)   
  }

// Delete
deleteInc(chamadoinc: ChamadoInc): Observable<ChamadoInc>{
  const url = `${this.baseURLINC}/${chamadoinc.id}`
  return this.http.delete<ChamadoInc>(url)
}

  

}
