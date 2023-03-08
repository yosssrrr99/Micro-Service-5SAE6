package com.example.cool.Repositories;

import com.example.cool.entities.*;
import org.hibernate.criterion.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;
@Repository
public interface OrdersRepository extends JpaRepository<Orders,Long>, JpaSpecificationExecutor<Orders> {

    @Query("select sum(o.NbPlace) from Orders o JOIN o.tables  t   where  t.idTable=:idTable  ")
    int NbreTotPlaceByTable(Long idTable);

    @Query("select case when   sum(o.NbPlace) >0 then true else false end from Orders o JOIN o.tables  t   where  t.idTable=:idTable  ")
    boolean ishavePlaceByTable(Long idTable);

    List<Orders> findOrdersByStatus(TypeRes ts);

    @Override
    List<Orders> findAll();
    @Query("select count(o.idOrders) from Orders o JOIN o.dishs  d   where  d.idDish=:IdDish  ")
    int Commande(Long IdDish);

    @Query("select count(o.idOrders) from Orders o where o.DateOrder=:date")
    int NBCommande(Date date);


}
