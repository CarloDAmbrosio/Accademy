package com.example.Ospedale.controller;

import com.example.Ospedale.entity.Reparto;
import com.example.Ospedale.service.RepartoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api/test")
public class RepartoController {

    @Autowired
    private RepartoService serv;

    @GetMapping("/allReparti")
    public List<Reparto> findAll(){
       return  serv.findAll();
    }

    @PostMapping("/addReparto")
    public String addReparto(@RequestBody Reparto r){
     serv.addReparto(r);
     return "Reparto Aggiunto";
    }

    @DeleteMapping("/eliminaReparto/{id}")
    public String eliminaReparto(@PathVariable Integer id){
        serv.eliminaReparto(id);
        return "Reparto Eliminato";
    }

    @GetMapping("/repartoByIdMedico/{id}")
    @PreAuthorize("hasRole('OPERATORE')")
    public List<Object> repartoByIdMedico(@PathVariable Integer id){
        return serv.repartoByIdMedico(id);
    }

    @PutMapping("/associaMedico/{idMedico}/{idReparto}")
    @PreAuthorize("hasRole('OPERATORE')")
    public Reparto associaMedico(@PathVariable Integer idMedico, @PathVariable Integer idReparto){
        return serv.associaMedico(idMedico,idReparto);
    }
}
