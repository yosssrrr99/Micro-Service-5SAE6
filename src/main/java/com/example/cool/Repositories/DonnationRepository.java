package com.example.cool.Repositories;

import com.example.cool.entities.Donnation;

import com.example.cool.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface DonnationRepository extends JpaRepository<Donnation,Long> {

    @Query("select d from Donnation d order by d.isCreatedAt")
    List<Donnation> listaParDate();
}
