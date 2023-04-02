import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BandiereService } from '../services/bandiere.service';

@Component({
  selector: 'app-dettagli',
  templateUrl: './dettagli.component.html',
  styleUrls: ['./dettagli.component.css']
})
export class DettagliComponent implements OnInit {
  dettagli:any

  constructor(private route: ActivatedRoute, private bandiereService: BandiereService) {

   }

  ngOnInit() {
    const nome_caso1 = this.route.snapshot.paramMap.get('nome_caso2');
    this.bandiereService.getAll(nome_caso1).subscribe(dettagli => {
       this.dettagli = dettagli;
   });
  }
}
