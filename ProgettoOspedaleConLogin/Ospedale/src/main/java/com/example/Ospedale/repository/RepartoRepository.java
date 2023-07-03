package com.example.Ospedale.repository;

import com.example.Ospedale.entity.Reparto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface RepartoRepository extends JpaRepository<Reparto, Integer> {

    @Query(value="SELECT reparto.*, medico.nome as nomeMedico, medico.cognome FROM reparto INNER JOIN medico ON reparto.id_medico = medico.id WHERE medico.id =:id", nativeQuery = true)
    public List<Object> repartoByIdMedico(Integer id);

}