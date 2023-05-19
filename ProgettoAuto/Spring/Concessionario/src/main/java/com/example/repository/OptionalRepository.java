package com.example.repository;

import com.example.entity.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface OptionalRepository extends JpaRepository<Optional,Integer> {

    @Query(value="SELECT optional_auto.*, automobile.modello,automobile.marca,automobile.foto, optional.descrizione FROM optional_auto JOIN optional ON optional_auto.id_optional=optional.id JOIN automobile on optional_auto.id_auto=automobile.id_auto  WHERE automobile.id_auto=:id",nativeQuery = true)
    public List<Object> findByIdAuto(Long id);

}
