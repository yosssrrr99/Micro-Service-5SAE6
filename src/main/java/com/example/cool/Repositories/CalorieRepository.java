package com.example.cool.Repositories;

import com.example.cool.entities.Calorie;

import org.springframework.data.jpa.repository.JpaRepository;

public interface CalorieRepository extends JpaRepository<Calorie,Long> {
}
