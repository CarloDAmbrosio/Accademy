package com.example.service;

import com.example.repository.CarrozzeriaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CarrozzeriaService {

    @Autowired
    private CarrozzeriaRepository carro_repo;

}
