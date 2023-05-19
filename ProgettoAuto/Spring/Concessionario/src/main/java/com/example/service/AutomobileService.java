package com.example.service;

import com.example.entity.Automobile;
import com.example.repository.AutomobileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AutomobileService {

    @Autowired
    private AutomobileRepository repo;

    public List<Automobile> findAll(){
        return repo.findAll();
    }

    public List<Automobile> autoByPrezzo(double prezzo){
        return repo.autoByPrezzo(prezzo);
    }

    public Automobile immatricolaAuto(Long id, Integer annoImmatricolazione){
        Optional<Automobile> autoEsiste = repo.findById(id);
        if(autoEsiste.isPresent()){
            Automobile auto = autoEsiste.get();
            auto.setAnnoImmatricolazione(annoImmatricolazione);
            return repo.save(auto);
        } else {
            throw new IllegalArgumentException("Auto con id " +id+ "non trovata");
        }

    }

}
