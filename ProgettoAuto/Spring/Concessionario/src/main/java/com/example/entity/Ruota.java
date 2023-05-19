package com.example.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Ruota {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private double larghezza;

    public Ruota(){};

    public Ruota(int id, double larghezza) {
        this.id = id;
        this.larghezza = larghezza;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public double getLarghezza() {
        return larghezza;
    }

    public void setLarghezza(double larghezza) {
        this.larghezza = larghezza;
    }
}
