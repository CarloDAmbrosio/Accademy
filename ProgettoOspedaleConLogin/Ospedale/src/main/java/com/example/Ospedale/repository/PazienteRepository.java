package com.example.Ospedale.repository;

import com.example.Ospedale.entity.Paziente;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface PazienteRepository extends JpaRepository<Paziente, Integer> {

    @Query(value="select  paziente.nome,paziente.cognome, paziente.data_ricovero,visita.nome as nomeVisita, esame_laboratorio.tipo from paziente LEFT join visita_paziente on paziente.id=visita_paziente.id_paziente LEFT JOIN visita ON visita_paziente.id_visita=visita.id LEFT JOIN esame_paziente on paziente.id=esame_paziente.id_paziente LEFT JOIN esame_laboratorio ON esame_paziente.id_esame=esame_laboratorio.id WHERE paziente.id=:id",nativeQuery = true)
    public List<Object>  visitaPaziente(Integer id);

    @Query(value="select paziente.data_n,paziente.nome,paziente.cognome, paziente.cod_fis, paziente.data_ricovero,paziente.id  from paziente LEFT join visita_paziente on paziente.id=visita_paziente.id_paziente LEFT JOIN visita ON visita_paziente.id_visita=visita.id LEFT JOIN esame_paziente on paziente.id=esame_paziente.id_paziente LEFT JOIN esame_laboratorio ON esame_paziente.id_esame=esame_laboratorio.id LEFT JOIN users on paziente.id_user=users.id  WHERE paziente.id_user=:id",nativeQuery = true)
    public List<Object> datiPaziente(Integer id);

}