package com.example.service;

import com.example.repository.ProprietarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProprietarioService {

    @Autowired
    private ProprietarioRepository p_repo;

}
