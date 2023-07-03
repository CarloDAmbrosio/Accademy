package com.example.Ospedale.controller;

import com.example.Ospedale.entity.EsameLaboratorio;
import com.example.Ospedale.service.EsameLaboratorioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin
@RestController
public class EsameLaboratorioController {

    @Autowired
    private EsameLaboratorioService serv;


    @GetMapping("/getEsami")
    public List<EsameLaboratorio> findAll(){
        return serv.findAll();
    }


}
