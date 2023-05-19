package com.example.service;

import com.example.entity.Optional;
import com.example.repository.OptionalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OptionalService {

    @Autowired
    private OptionalRepository op_repo;

    public List<Object> findByIdAuto(Long id){
        return op_repo.findByIdAuto(id);
    }

}
