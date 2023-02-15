package com.example.cool.Repositories;

import com.example.cool.entities.Dishs;
import com.example.cool.entities.Orders;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DishRepository extends JpaRepository<Dishs,Long> {
}
