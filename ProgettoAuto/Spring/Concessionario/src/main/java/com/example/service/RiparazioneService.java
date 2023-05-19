package com.example.service;

import com.example.entity.Riparazione;
import com.example.repository.RiparazioneRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RiparazioneService {

    @Autowired
    private RiparazioneRepository rip_repo;

    public List<Riparazione> findAll(){
        return rip_repo.findAll();
    }

    public List<Object> riparazioneAutoUsate(){
        return rip_repo.riparazioneAutoUsate();
    }

    public Riparazione addRiparazione(Riparazione riparazione){
      return rip_repo.save(riparazione);
    }

}
