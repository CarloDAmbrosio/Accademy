package com.example.Ospedale.service;

import com.example.Ospedale.entity.Medico;
import com.example.Ospedale.entity.Reparto;
import com.example.Ospedale.repository.MedicoRepository;
import com.example.Ospedale.repository.RepartoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RepartoService {

    @Autowired
    private RepartoRepository repo;

    @Autowired
    private MedicoRepository repoM;

    public List<Reparto> findAll(){
        return repo.findAll();
    }

    public Reparto addReparto(Reparto r){
        return repo.save(r);
    }

    public void eliminaReparto(Integer id){
        repo.deleteById(id);
    }

    public List<Object> repartoByIdMedico(Integer id){
        return repo.repartoByIdMedico(id);
    }

    public Reparto associaMedico(Integer idMedico, Integer idReparto){
        Medico m = repoM.findById(idMedico).orElse(null);
        Reparto r = repo.findById(idReparto).orElse(null);
        r.setIdMedico(m);
        return repo.save(r);
    }

}
