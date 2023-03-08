package com.example.cool.Controllers;

import com.example.cool.Services.DishsServices;
import com.example.cool.entities.Dishs;
import com.example.cool.entities.Orders;
import com.example.cool.entities.User;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("dishs")
@AllArgsConstructor
public class DishsController {
    private DishsServices dishsServices;

    @PostMapping("/add")
    Dishs addDishsAndAffecterOrders(@RequestBody Dishs dishs){
        return dishsServices.addDishs(dishs);
    }
    @PutMapping("/update/{id}")
    Dishs updateDishs(@RequestBody Dishs dishs,@PathVariable("id")Long idDishs){
        return dishsServices.updateDishs(dishs,idDishs);
    }
    @DeleteMapping("/delete/{id}")
    void deleteDishs(@PathVariable("id") Long idDishs){dishsServices.removeDishs(idDishs);}
    @GetMapping("/get/{id}")
    Dishs retrieveDishsById(@PathVariable("id")Long idDishs){return dishsServices.retrieveDish(idDishs);}
    @GetMapping("/getAll")
    List<Dishs> retrieveAllDishs(){return  dishsServices.retrieveAllDishs();}
    @GetMapping("/getKadehCalorie/{id}")
    Integer Calorie(@PathVariable("id")Long idUser){return  dishsServices.normCalor(idUser);}
    @GetMapping("/getNbCalorieParPlat/{id}")
    String NbCalorieParPlat(@PathVariable("id")Long idUser){return dishsServices.CalculCaloriePlat(idUser);}




}
