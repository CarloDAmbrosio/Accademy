package com.example.controller;

import com.example.entity.Optional;
import com.example.service.OptionalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class OptionalController {

    @Autowired
    private OptionalService serv;

    @GetMapping("/getOptionalByIdAuto/{id}")
    public List<Object> findAll(@PathVariable Long id){
        return serv.findByIdAuto(id);
    }

}
