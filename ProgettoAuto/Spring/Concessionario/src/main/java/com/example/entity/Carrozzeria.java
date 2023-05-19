package com.example.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Carrozzeria {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private int numTelaio;
    private String colore;

    public Carrozzeria(){};

    public Carrozzeria(int id, int numTelaio, String colore) {
        this.id = id;
        this.numTelaio = numTelaio;
        this.colore = colore;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getNumTelaio() {
        return numTelaio;
    }

    public void setNumTelaio(int numTelaio) {
        this.numTelaio = numTelaio;
    }

    public String getColore() {
        return colore;
    }

    public void setColore(String colore) {
        this.colore = colore;
    }
}
