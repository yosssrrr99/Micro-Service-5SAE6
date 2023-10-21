package com.example.cool.Controllers;


import com.example.cool.Repositories.OrdersRepository;
import com.example.cool.Services.OrdersServices;
import com.example.cool.dto.RequiredResponse;
import com.example.cool.dto.User;
import com.example.cool.entities.Orders;

import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.util.List;

@RestController
@RequestMapping("orders")
@AllArgsConstructor
public class OrderController {
    private OrdersServices ordersServices;
    @Autowired
    OrdersRepository ordersRepository;

    @Autowired
    RestTemplate restTemplate;
    @PostMapping("/addor/{id}/{id2}")
    public ResponseEntity<String> addOrder(@RequestBody Orders orders,@PathVariable("id")Long idTable,@PathVariable("id2")Long idDishs){
        // Orders order1=ordersRepository.save(orders);

        Long id= restTemplate.getForObject("http://CLIENTSERVICEE/user/idu/current", Long.class);

        User currentuser=restTemplate.getForObject("http://CLIENTSERVICEE/user/idu/"+id,User.class);
        orders.setIdUser(id);

        String o= ordersServices.addOrdersAndAssignDishs(orders,idTable,idDishs);
        return new ResponseEntity<>(o, HttpStatus.OK);

    }
    @PutMapping("/update/{id}")
    public ResponseEntity<Orders>  updateOrdersAndAffecterTable(@RequestBody Orders orders,@PathVariable("id")Long idOrders){
        Orders o=ordersServices.updateOrders(orders,idOrders);
        return new ResponseEntity<>(o, HttpStatus.OK);
    }
    @DeleteMapping("/delete/{id}")
    void deleteOrders(@PathVariable("id") Long idOrders){ordersServices.removeOrder(idOrders);}
    @GetMapping("/get/{id}")
    public ResponseEntity<Orders>  retrieveOrderById(@PathVariable("id")Long idOrders){Orders o= ordersServices.retrieveOrder(idOrders) ;
    return new ResponseEntity<>(o, HttpStatus.OK);}
    @GetMapping("/getAll")
    public ResponseEntity<List<Orders>>retrieveAllOrders(){
        List<Orders> o= ordersServices.retrieveAllOrders();
        return new ResponseEntity<>(o, HttpStatus.OK);
    }


    @GetMapping("/pref/{ch}") //aandek
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

    //DTO SECTION

    @GetMapping("/id/{id}")
    public ResponseEntity<RequiredResponse>getAllDb(@PathVariable Long id){
        RequiredResponse requiredResponse=new RequiredResponse();
        Orders o= ordersRepository.findById(id).get();
        requiredResponse.setOrderRe(o);
        List <User> listofusers =restTemplate.getForObject("http://CLIENTSERVICEE/user/id/"+id,List.class);
        requiredResponse.setUsers(listofusers);
        return new ResponseEntity<RequiredResponse>(requiredResponse,HttpStatus.OK);
    }

    @GetMapping("/getfavoris")
    public ResponseEntity<String>favoris(Long id){
        String ch="";
        RequiredResponse re=new RequiredResponse();
        id= restTemplate.getForObject("http://CLIENTSERVICEE/user/idu/current", Long.class);
        User ls=restTemplate.getForObject("http://CLIENTSERVICEE/user/idu/"+id, User.class);
        ch= ls.getPreferences();


        User currentuser=restTemplate.getForObject("http://CLIENTSERVICEE/user/idu/"+id,User.class);

        String res = ordersServices.FavoriteMenu(ch);

        return new ResponseEntity<String>(res,HttpStatus.OK);

    }
    @GetMapping("/getallergie")
    public ResponseEntity<String>allerg(Long id){
        String ch="";
        RequiredResponse re=new RequiredResponse();
        id= restTemplate.getForObject("http://CLIENTSERVICEE/user/idu/current", Long.class);

        User ls=restTemplate.getForObject("http://CLIENTSERVICEE/user/idu/"+id, User.class);
        ch= ls.getAllergie();
        String res = ordersServices.AllergierIngredient(ch);

        return new ResponseEntity<String>(res,HttpStatus.OK);

    }





}

