package com.example.Ospedale.controller;

import com.example.Ospedale.entity.EsamePaziente;
import com.example.Ospedale.entity.Visita;
import com.example.Ospedale.repository.EsamePazienteRepository;
import com.example.Ospedale.service.VisitaService;
import org.hibernate.engine.jdbc.spi.SqlExceptionHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;
@CrossOrigin
@RestController
public class VisitaController {

    @Autowired
    private VisitaService serv;

    @Autowired
    private EsamePazienteRepository repo;

    @GetMapping("/getVisita")
    public List<Visita> findAll(){
        return serv.findAll();
    }

    @PostMapping("/addVisita")
    public String addVisita(@RequestBody Visita v){
        serv.addVisita(v);
        return "Visita Aggiunta";
    }
    @GetMapping("/filtraByData")
    public List<Object> filtraByData(
            @RequestParam("start_date") LocalDate startDate,
            @RequestParam("end_date")  LocalDate endDate,
            @RequestParam("description") String description
    ) {

        return repo.filtraByData(startDate, endDate, description);
    }

    {


    }


}
