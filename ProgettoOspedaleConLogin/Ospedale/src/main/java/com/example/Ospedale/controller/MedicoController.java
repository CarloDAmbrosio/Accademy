package com.example.Ospedale.controller;

import com.example.Ospedale.entity.Medico;
import com.example.Ospedale.service.MedicoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api/test")
public class MedicoController {

    @Autowired
    private MedicoService serv;

    @GetMapping("/getMedici")
    @PreAuthorize("hasRole('PAZIENTE') OR hasRole('OPERATORE')")
    public List<Medico> allMedici(){
        return serv.findAll();
    }

    @PostMapping("/addMedico")
    @PreAuthorize("hasRole('OPERATORE')")
    public Medico addMedico(@RequestBody Medico medico){
        return serv.add(medico);
    }

    @DeleteMapping("/deleteMedico/{id}")
    @PreAuthorize("hasRole('OPERATORE')")
    public void elimina(@PathVariable Integer id){
         serv.elimina(id);

    }

    @PutMapping("/updateMedico/{id}")
    public String update(@PathVariable Integer id, @RequestBody Medico medico){
        serv.update(id,medico);
        return "Medico Aggiornato";
    }



}
