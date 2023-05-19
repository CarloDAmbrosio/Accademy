package com.example.repository;

import com.example.entity.Automobile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface AutomobileRepository extends JpaRepository<Automobile,Long> {

    @Query(value = "select automobile.* from automobile where automobile.prezzo<:prezzo AND automobile.usata=1;",nativeQuery = true)
    public List<Automobile> autoByPrezzo(double prezzo);




}
