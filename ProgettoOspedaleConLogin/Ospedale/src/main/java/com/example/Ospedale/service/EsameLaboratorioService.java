package com.example.Ospedale.service;

import com.example.Ospedale.entity.EsameLaboratorio;
import com.example.Ospedale.repository.EsameLaboratorioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EsameLaboratorioService {

    @Autowired
    private EsameLaboratorioRepository repo;

    public List<EsameLaboratorio> findAll(){
        return repo.findAll();
    }



}
