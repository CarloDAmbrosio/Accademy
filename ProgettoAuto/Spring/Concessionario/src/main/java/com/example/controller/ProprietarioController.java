package com.example.controller;

import com.example.repository.ProprietarioRepository;
import com.example.service.ProprietarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class ProprietarioController {

    @Autowired
    private ProprietarioService serv;

}
