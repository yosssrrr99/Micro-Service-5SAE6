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
    @PostMapping("/add/{id}/{id2}")
    String addOrdersAndAffecterTable(@RequestBody Orders orders,@PathVariable("id")Long idTable,@PathVariable("id2")Long idDishs){
        return ordersServices.addOrdersAndAssignDishs(orders,idTable,idDishs);
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

    @GetMapping("/pref/{ch}")
    public String FavoriteMenu(@PathVariable("ch") String prefere){
        return ordersServices.FavoriteMenu(prefere);
    }
    @GetMapping("/All/{ch}")
    public String Allergie(@PathVariable("ch") String allergie){
        return ordersServices.AllergierIngredient(allergie);
    }
    @GetMapping("/Annulation")
    public Integer Annulation(){return ordersServices.Annulation();}
    @GetMapping("/Commande")
    public String Commande(){return ordersServices.MenuLePlusCommander();}
    @GetMapping("/NbCommande")
    public int NbCommande(){return ordersServices.NbreDeCommandeParJour();}
    @GetMapping("/SetJeton/{id}/{balance}/{montant}")
    public int buyjeton(@PathVariable("id") Long idUser,@PathVariable("balance") float Ubalance,@PathVariable("montant") float montant){
        return ordersServices.buyjeton(idUser,Ubalance,montant);
    }


}

