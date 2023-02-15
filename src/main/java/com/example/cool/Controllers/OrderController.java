package com.example.cool.Controllers;


import com.example.cool.Services.OrdersServices;
import com.example.cool.entities.Orders;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("orders")
@AllArgsConstructor
public class OrderController {
    private OrdersServices ordersServices;
    @PostMapping("/add/{id}")
    Orders addOrdersAndAffecterTable(@RequestBody Orders orders,@PathVariable("id")Long idTable){
        return ordersServices.addOrders(orders,idTable);
    }
    @PutMapping("/update/{id}")
    Orders updateOrdersAndAffecterTable(@RequestBody Orders orders,@PathVariable("id")Long idOrders){
        return ordersServices.updateOrders(orders,idOrders);
    }
    @DeleteMapping("/delete/{id}")
    void deleteOrders(@PathVariable("id") Long idOrders){ordersServices.removeOrder(idOrders);}
    @GetMapping("/get/{id}")
    Orders retrieveOrderById(@PathVariable("id")Long idOrders){return ordersServices.retrieveOrder(idOrders) ;}
    @GetMapping("/getAll")
    List<Orders> retrieveAllOrders(){return  ordersServices.retrieveAllOrders();}


}

