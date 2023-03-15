package com.example.oblig2data1700;

public class Bestillinger {
    private String film;
    private String antall;
    private String fornavn;
    private String etternavn;
    private String epost;
    private String telefonnr;

    public Bestillinger(){

    }

    public Bestillinger(String film,String antall, String fornavn, String etternavn, String epost, String telefonnr){
        this.film= film;
        this.antall= antall;
        this.fornavn = fornavn;
        this.etternavn= etternavn;
        this.epost= epost;
        this.telefonnr= telefonnr;

    }

    public void setFilm(String film) {
        this.film = film;
    }

    public void setAntall(String antall) {
        this.antall = antall;
    }

    public void setFornavn(String fornavn) {
        this.fornavn = fornavn;
    }

    public void setEtternavn(String etternavn) {
        this.etternavn = etternavn;
    }

    public void setEpost(String epost) {
        this.epost = epost;
    }

    public void setTelefonnr(String telefonnr) {
        this.telefonnr = telefonnr;
    }

    public String getFilm() {
        return film;
    }

    public String getAntall() {
        return antall;
    }

    public String getFornavn() {
        return fornavn;
    }

    public String getEtternavn() {
        return etternavn;
    }

    public String getEpost() {
        return epost;
    }

    public String getTelefonnr() {
        return telefonnr;
    }
}