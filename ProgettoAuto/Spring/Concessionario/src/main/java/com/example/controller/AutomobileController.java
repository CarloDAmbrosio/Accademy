package com.example.controller;

import com.example.entity.Automobile;
import com.example.service.AutomobileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class AutomobileController {

    @Autowired
    private AutomobileService serv;

    @GetMapping("/allAuto")
    public List<Automobile> allAuto(){
        return serv.findAll();
    }
    @GetMapping("/getAutoByPrezzo/{prezzo}")
    public List<Automobile> autoByPrezzo(@PathVariable double prezzo){
    return serv.autoByPrezzo(prezzo);
    }

    @PutMapping("/immatricola/{id}/{annoImmatricolazione}")
    public Automobile immatricolaAuto(@PathVariable Long id , @PathVariable Integer annoImmatricolazione){
        Automobile auto = serv.immatricolaAuto(id,annoImmatricolazione);
        return auto;
    }


}
