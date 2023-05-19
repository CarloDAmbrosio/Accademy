package com.example.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;

import javax.swing.text.html.Option;
import java.util.HashSet;
import java.util.Set;

@Entity
public class Automobile {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id_auto")
    private Long id_auto;
    private String marca;
    private String modello;
    private String targa;
    private double prezzo;
    private boolean usata;
    private Integer annoImmatricolazione;
    private int kmPercorsi;
    private int anniGaranzia;
    private String dataAcquista;
    private String foto;
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    @ManyToOne
    @JoinColumn(name="id_proprietario", nullable = false)
    private Proprietario proprietario;
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    @OneToOne
    @JoinColumn(name="id_motorere")
    private Motore motore;
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    @OneToOne
    @JoinColumn(name = "id_carrozzeria")
    private Carrozzeria carrozzeria;

    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    @OneToOne
    @JoinColumn(name="id_ruota")
    private Ruota ruota;
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    @ManyToMany
    @JoinTable(
            name="optional_auto",
            joinColumns = @JoinColumn(name = "id_auto"),
            inverseJoinColumns = @JoinColumn(name="id_optional")
    ) private Set<Optional> optional = new HashSet<>();
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    @ManyToMany
    @JoinTable(
            name="riparazione_auto",
            joinColumns = @JoinColumn(name="id_auto"),
            inverseJoinColumns = @JoinColumn(name="id_riparazione")
    )   private Set<Riparazione> riparazione = new HashSet<>();

    public Automobile(){}

    public Automobile(Long id_auto, String marca, String modello, String targa, double prezzo, boolean usata, int annoImmatricolazione, int kmPercorsi, int anniGaranzia) {
        this.id_auto = id_auto;
        this.marca = marca;
        this.modello = modello;
        this.targa = targa;
        this.prezzo = prezzo;
        this.usata = usata;
        this.annoImmatricolazione = annoImmatricolazione;
        this.kmPercorsi = kmPercorsi;
        this.anniGaranzia=anniGaranzia;
    }

    public Long getId_auto() {
        return id_auto;
    }

    public void setId_auto(Long id_auto) {
        this.id_auto = id_auto;
    }

    public String getFoto() {
        return foto;
    }

    public void setFoto(String foto) {
        this.foto = foto;
    }

    public String getMarca() {
        return marca;
    }

    public void setMarca(String marca) {
        this.marca = marca;
    }

    public String getModello() {
        return modello;
    }

    public void setModello(String modello) {
        this.modello = modello;
    }

    public String getTarga() {
        return targa;
    }

    public void setTarga(String targa) {
        this.targa = targa;
    }

    public double getPrezzo() {
        return prezzo;
    }

    public void setPrezzo(double prezzo) {
        this.prezzo = prezzo;
    }

    public int getAnniGaranzia() {
        return anniGaranzia;
    }

    public void setAnniGaranzia(int anniGaranzia) {
        this.anniGaranzia = anniGaranzia;
    }

    public boolean isUsata() {
        return usata;
    }

    public void setUsata(boolean usata) {
        this.usata = usata;
    }

    public Integer getAnnoImmatricolazione() {
        return annoImmatricolazione;
    }

    public void setAnnoImmatricolazione(Integer annoImmatricolazione) {
        this.annoImmatricolazione = annoImmatricolazione;
    }

    public int getKmPercorsi() {
        return kmPercorsi;
    }

    public void setKmPercorsi(int kmPercorsi) {
        this.kmPercorsi = kmPercorsi;
    }

    public Proprietario getProprietario() {
        return proprietario;
    }

    public void setProprietario(Proprietario proprietario) {
        this.proprietario = proprietario;
    }

    public Motore getMotore() {
        return motore;
    }

    public void setMotore(Motore motore) {
        this.motore = motore;
    }

    public Carrozzeria getCarrozzeria() {
        return carrozzeria;
    }

    public void setCarrozzeria(Carrozzeria carrozzeria) {
        this.carrozzeria = carrozzeria;
    }

    public Ruota getRuota() {
        return ruota;
    }

    public void setRuota(Ruota ruota) {
        this.ruota = ruota;
    }

    public Set<Optional> getOptional() {
        return optional;
    }

    public void setOptional(Set<Optional> optional) {
        this.optional = optional;
    }

    public Set<Riparazione> getRiparazione() {
        return riparazione;
    }

    public void setRiparazione(Set<Riparazione> riparazione) {
        this.riparazione = riparazione;
    }

    public String getDataAcquista() {
        return dataAcquista;
    }

    public void setDataAcquista(String dataAcquista) {
        this.dataAcquista = dataAcquista;
    }
}
