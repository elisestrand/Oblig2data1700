package com.example.oblig2data1700;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import  java.util.List;

@RestController
public class Controller {

    private final List<Bestillinger> alleBestillinger = new ArrayList<>();

    @PostMapping("/lagre")
    public void lagreBestillinger(Bestillinger bestillinger){
        alleBestillinger.add(bestillinger);
    }

    @GetMapping("/hentData")
    public List<Bestillinger> hentData(){
        return alleBestillinger;
    }

    @GetMapping("/slett")
    public void slett(){
        alleBestillinger.clear();
    }

}
