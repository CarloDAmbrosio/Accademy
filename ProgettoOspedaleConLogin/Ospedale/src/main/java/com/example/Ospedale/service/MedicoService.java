package com.example.Ospedale.service;

import com.example.Ospedale.entity.Medico;
import com.example.Ospedale.repository.MedicoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MedicoService {

    @Autowired
    private MedicoRepository repo;

    public List<Medico> findAll(){
        return repo.findAll();
    }

    public Medico add(Medico medico){
        return repo.save(medico);
    }

    public void elimina(Integer id){
        repo.deleteById(id);
    }

    public Medico update(Integer id, Medico medicoNuovo) {
        Optional<Medico> medicoEsistente = repo.findById(id);
        if (medicoEsistente.isPresent()) {
            Medico medicoAggiornato = medicoEsistente.get();
            medicoAggiornato.setCognome(medicoNuovo.getCognome());
            medicoAggiornato.setNome(medicoNuovo.getNome());
            medicoAggiornato.setDataN(medicoNuovo.getDataN());
            medicoAggiornato.setLuogoN(medicoNuovo.getLuogoN());
            return repo.save(medicoAggiornato);
        } else {
            return null;
        }
    }


}
