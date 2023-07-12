import { ChangeDetectorRef, Component } from '@angular/core';
import { ServizioService } from '../services/servizio.service';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpResponse } from '@angular/common/http';
import { TokenStorageService } from '../services/token-storage-service.service';

@Component({
  selector: 'app-pazienti',
  templateUrl: './pazienti.component.html',
  styleUrls: ['./pazienti.component.css']
})
export class PazientiComponent {
  constructor(private rest: ServizioService, private sanitizer: DomSanitizer, private tokenService:TokenStorageService) { }
  paziente: any;
  esamiSostenuti!: any;
  mostraVisite: boolean = false;
  mostraTutto: boolean = true;
  selectedFile!: File;
  fileUrl: any;
  dataInizio: any;
  datafine: any;
  visita: any;
  data: boolean = false;
  ngOnInit() {
    const user = this.tokenService.getUser().id;
    console.log(user);
    const onSuccess = (response: any) => this.paziente = response;
    return this.rest.getDettagliPaziente(user).subscribe(onSuccess);
  }

  esamiPaziente(id: any) {
    console.log(id);
    return this.rest.esamiPaziente(id).subscribe((response: any) => {
      this.mostraVisite = true;
      this.mostraTutto = false;
      this.esamiSostenuti = response;
      console.log(this.esamiSostenuti);
    })
  }


  pazienteId: any;
  fileSelezionato(event: any, id: any) {
    console.log(id);
    this.selectedFile = event.target.files[0];
    this.uploadPdf(id);
  }

  uploadPdf(pazienteId: number) {
    this.rest.uploadPdf(pazienteId, this.selectedFile).subscribe(
      () => {
        console.log('File PDF caricato con successo');
      },
      error => {
        console.error('Errore durante il caricamento del file PDF', error);
      }
    );
  }

  downloadPdf(id: any): void {
    this.rest.downloadPdf(id)
      .subscribe(response => {
        this.savePdf(response);
      }, error => {
        console.error('Error downloading PDF:', error);
      });
  }

  private savePdf(response: HttpResponse<Blob>): void {
    const filename = 'cartellaClinica.pdf';
    const blobPart: BlobPart = response.body as any;

    if (blobPart !== null) {
      const blob = new Blob([blobPart], { type: 'application/pdf' });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = filename;
      link.click();
      window.URL.revokeObjectURL(url);
    } else {
      console.error('PDF not found.');
    }
  }
  filtra: any;
  Cerca() {
    this.rest.filtra(this.dataInizio, this.datafine, this.visita).subscribe((response: any) => {
      this.mostraTutto = false;
      this.data = true;
      this.filtra = response;
    });
  }


}
