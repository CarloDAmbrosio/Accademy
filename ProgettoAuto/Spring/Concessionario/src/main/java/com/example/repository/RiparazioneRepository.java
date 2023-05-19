package com.example.repository;

import com.example.entity.Riparazione;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface RiparazioneRepository extends JpaRepository<Riparazione,Integer> {

    @Query(value="SELECT riparazione.*, automobile.modello FROM riparazione_auto INNER JOIN automobile ON riparazione_auto.id_auto = automobile.id_auto INNER JOIN riparazione ON riparazione_auto.id_riparazione = riparazione.id WHERE automobile.usata = 1",nativeQuery = true)
    public List<Object> riparazioneAutoUsate();

}
