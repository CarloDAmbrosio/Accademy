package com.example.controller;

import com.example.service.RuotaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class RuotaController {

    @Autowired
    private RuotaService serv;

}
