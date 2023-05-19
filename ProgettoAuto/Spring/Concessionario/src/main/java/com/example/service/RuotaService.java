package com.example.service;

import com.example.repository.RuotaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RuotaService {

    @Autowired
    private RuotaRepository ruota_repo;

}
