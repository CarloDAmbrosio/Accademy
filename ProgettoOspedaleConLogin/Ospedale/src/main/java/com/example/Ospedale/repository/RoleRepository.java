package com.example.Ospedale.repository;

import com.example.Ospedale.entity.ERole;
import com.example.Ospedale.entity.RoleEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface RoleRepository extends JpaRepository<RoleEntity,Long> {
    Optional<RoleEntity> findByName(ERole name);
}
