package com.example.controller;

import com.example.entity.Riparazione;
import com.example.service.RiparazioneService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class RiparazioneController {

    @Autowired
    private RiparazioneService serv;

    @GetMapping("/getRiparazioni")
    public List<Riparazione> findAll(){

        return serv.findAll();
    }

    @GetMapping("/riparazioniAutoUsate")
    public List<Object> riparazioneAutoUsate(){
        return serv.riparazioneAutoUsate();
    }

    @PostMapping("/addRiparazione")
    public ResponseEntity<String> addRiparazione(@RequestBody Riparazione riparazione){
        if(riparazione.getSpesa()<1000 && riparazione.getLivGravita()>=7){
            return ResponseEntity.badRequest().body("La spesa minima per un livello di gravità 7 o superiore è di 1000 euro.");
        }
        Riparazione salvaRiparazione = serv.addRiparazione(riparazione);
        return ResponseEntity.ok("Riparazione aggiunta");
    }

}
