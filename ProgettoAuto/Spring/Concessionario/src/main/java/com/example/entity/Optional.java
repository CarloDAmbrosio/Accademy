package com.example.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import javax.swing.text.html.Option;

@Entity
public class Optional {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private double prezzo;
    private String descrizione;

    public Optional(){};

    public Optional(int id, double prezzo, String descrizione) {
        this.id = id;
        this.prezzo = prezzo;
        this.descrizione = descrizione;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public double getPrezzo() {
        return prezzo;
    }

    public void setPrezzo(double prezzo) {
        this.prezzo = prezzo;
    }

    public String getDescrizione() {
        return descrizione;
    }

    public void setDescrizione(String descrizione) {
        this.descrizione = descrizione;
    }
}
