package com.example.entity;

import jakarta.persistence.*;

@Entity
public class Motore {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int cod_motore;
    private String carburante;
    private int cilindrata;



    public Motore(){};

    public Motore(int cod_motore, String carburante, int cilindrata) {
        this.cod_motore = cod_motore;
        this.carburante = carburante;
        this.cilindrata = cilindrata;
    }
}
