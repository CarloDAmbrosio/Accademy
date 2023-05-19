package com.example.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Riparazione {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String tipo;
    private double spesa;
    private int livGravita;

    public Riparazione(){};

    public Riparazione(int id, String tipo, double spesa, int livGravita) {
        this.id = id;
        this.tipo = tipo;
        this.spesa = spesa;
        this.livGravita = livGravita;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTipo() {
        return tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }

    public double getSpesa() {
        return spesa;
    }

    public void setSpesa(double spesa) {
        this.spesa = spesa;
    }

    public int getLivGravita() {
        return livGravita;
    }

    public void setLivGravita(int livGravita) {
        this.livGravita = livGravita;
    }
}
