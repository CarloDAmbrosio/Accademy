package com.example.Ospedale.service;

import com.example.Ospedale.entity.Visita;
import com.example.Ospedale.repository.VisitaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VisitaService {

    @Autowired
    private VisitaRepository repo;

    public List<Visita> findAll(){
        return repo.findAll();
    }

    public void addVisita(Visita v){
        repo.save(v);
    }

}
