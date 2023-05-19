package com.example.service;

import com.example.repository.MotoreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MotoreService {

    @Autowired
    private MotoreRepository mot_repo;

}
