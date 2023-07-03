package com.example.Ospedale.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDate;

@Getter
@Setter
@Entity
@Table(name = "paziente")
public class Paziente {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Integer id;

    @Column(name = "cod_fis", nullable = false, length = 16)
    private String codFis;

    @Column(name = "cognome", nullable = false, length = 50)
    private String cognome;

    @Column(name = "data_n", nullable = false)
    private LocalDate dataN;

    @Column(name = "data_ricovero", nullable = false)
    private LocalDate dataRicovero;

    @Column(name = "luogo_n", nullable = false, length = 50)
    private String luogoN;

    @Column(name = "nome", nullable = false, length = 50)
    private String nome;

    @Column(name = "sesso", nullable = false, length = 1)
    private String sesso;

    @Column(name = "file", columnDefinition = "LONGBLOB")
    private byte[] file;

    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_reparto")
    private Reparto idReparto;

    @OneToOne
    @JoinColumn(name="id_user")
    private UserEntity userEntity;

}