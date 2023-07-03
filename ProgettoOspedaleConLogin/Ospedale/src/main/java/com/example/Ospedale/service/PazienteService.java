package com.example.Ospedale.service;

import com.example.Ospedale.entity.Paziente;
import com.example.Ospedale.repository.PazienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

@Service
public class PazienteService {

    @Autowired
    private PazienteRepository repo;

    public List<Object> findAll(Integer id){
        return repo.datiPaziente(id);
    }

    public Paziente add(Paziente p){
        return repo.save(p);
    }

    public void delete(Integer id){
         repo.deleteById(id);
    }

    public List<Object> esamePaziente(Integer id){
        return repo.visitaPaziente(id);
    }

    public void uploadPdf(Integer pazienteId, MultipartFile file) throws IOException {
        Optional<Paziente> pazienteOptional = repo.findById(pazienteId);
        if (pazienteOptional.isPresent()) {
            Paziente paziente = pazienteOptional.get();
            paziente.setFile(file.getBytes());
            repo.save(paziente);
        } else {
            throw new IllegalArgumentException("Paziente non trovato");
        }
    }

    public byte[] downloadPdf(Integer pazienteId) {
        Optional<Paziente> pazienteOptional = repo.findById(pazienteId);
        if (pazienteOptional.isPresent()) {
            Paziente paziente = pazienteOptional.get();
            return paziente.getFile();
        }
        throw new NoSuchElementException("Paziente not found with ID: " + pazienteId);
    }




}
