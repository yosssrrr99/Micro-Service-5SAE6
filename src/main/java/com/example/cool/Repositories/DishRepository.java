package com.example.cool.Repositories;

import com.example.cool.entities.Dishs;
import com.example.cool.entities.Orders;
import com.example.cool.entities.TypeDish;
import com.example.cool.entities.TypeRes;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface DishRepository extends JpaRepository<Dishs,Long> {
    @Query("select d from Dishs  d JOIN d.orders o   where  (o.idUser=:idUser)")
    List<Dishs> getAllDishsByClient(int idUser);


}
