package com.example.Ospedale.entity;

import javax.persistence.*;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
@Entity
@Table(name = "medico")
public class Medico {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Integer id;

    @Column(name = "cognome", nullable = false, length = 50)
    private String cognome;

    @Column(name = "data_n", nullable = false)
    private LocalDate dataN;

    @Column(name = "luogo_n", nullable = false, length = 50)
    private String luogoN;

    @Column(name = "nome", nullable = false, length = 50)
    private String nome;

}