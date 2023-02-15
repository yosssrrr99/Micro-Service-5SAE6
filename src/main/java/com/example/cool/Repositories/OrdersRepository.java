package com.example.cool.Repositories;

import com.example.cool.entities.Orders;
import com.example.cool.entities.Tables;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrdersRepository extends JpaRepository<Orders,Long> {
}
