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
    const name = this.route.snapshot.paramMap.get('name');
    this.bandiereService.getAll(name).subscribe(dettagli => {
       this.dettagli = dettagli;
   });
  }
}
