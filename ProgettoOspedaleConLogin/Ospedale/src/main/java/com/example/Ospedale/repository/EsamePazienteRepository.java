package com.example.Ospedale.repository;

import com.example.Ospedale.entity.EsamePaziente;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDate;
import java.util.List;

public interface EsamePazienteRepository extends JpaRepository<EsamePaziente, Integer> {

    @Query(value="SELECT CONCAT(p.nome, ' ', p.cognome) AS nome_completo, ep.data, ep.esito FROM paziente p JOIN esame_paziente ep ON p.id = ep.id_paziente  JOIN esame_laboratorio el ON el.id = ep.id_esame JOIN visita_paziente vp ON p.id = vp.id_paziente  JOIN visita v ON v.id = vp.id_visita  WHERE ep.data BETWEEN :start_date AND :end_date  AND  el.tipo = :description",nativeQuery = true)
    public List<Object> filtraByData(@Param("start_date") LocalDate start_date,  @Param("end_date") LocalDate end_date, @Param("description") String description);

}