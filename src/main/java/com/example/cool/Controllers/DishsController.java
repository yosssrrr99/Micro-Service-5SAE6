package com.example.cool.Controllers;

import com.example.cool.Repositories.OrdersRepository;
import com.example.cool.Services.DishsServices;
import com.example.cool.dto.RequiredResponse;
import com.example.cool.dto.User;
import com.example.cool.entities.Dishs;
import com.example.cool.entities.Orders;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.util.List;

@RestController
@RequestMapping("dishs")
@AllArgsConstructor
@CrossOrigin(origins = "http://localhost:4200/  ")
public class DishsController {
    @Autowired
    RestTemplate restTemplate;
    @Autowired
    OrdersRepository ordersRepository;
    private DishsServices dishsServices;

    @PostMapping("/add")
    ResponseEntity<Dishs> addDishs(@RequestBody Dishs dishs){

        Dishs d = dishsServices.addDishs(dishs);
        return new ResponseEntity<>(d, HttpStatus.OK);

    }
    @PutMapping("/update/{id}")
    ResponseEntity<Dishs> updateDishs(@RequestBody Dishs dishs,@PathVariable("id")Long idDishs){
         Dishs d=dishsServices.updateDishs(dishs,idDishs);
        return new ResponseEntity<>(d, HttpStatus.OK);
    }
    @DeleteMapping("/delete/{id}")
    void deleteDishs(@PathVariable("id") Long idDishs){dishsServices.removeDishs(idDishs);}
    @GetMapping("/get/{id}")
    ResponseEntity<Dishs> retrieveDishsById(@PathVariable("id")Long idDishs){Dishs d = dishsServices.retrieveDish(idDishs);
        return new ResponseEntity<>(d, HttpStatus.OK);}
    @GetMapping("/getAll")
    ResponseEntity<List<Dishs>>  retrieveAllDishs(){List<Dishs> dd= dishsServices.retrieveAllDishs();
        return new ResponseEntity<>(dd, HttpStatus.OK);}
    @GetMapping("/getKadehCalorie/{id}")
    Integer Calorie(@PathVariable("id")Long idUser){return  dishsServices.normCalor(idUser);}
    @GetMapping("/getNbCalorieParPlat")

    String NbCalorieParPlat(Long idUser){
        Long id= restTemplate.getForObject("http://CLIENTSERVICEE/user/idu/current", Long.class);

        User currentuser=restTemplate.getForObject("http://CLIENTSERVICEE/user/idu/"+id,User.class);
        idUser=id;

        return dishsServices.CalculCaloriePlat(idUser);}





}
