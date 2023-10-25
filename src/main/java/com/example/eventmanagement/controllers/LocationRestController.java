package com.example.eventmanagement.controllers;

import com.example.eventmanagement.entities.Location;
import com.example.eventmanagement.services.LocationServicesmpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLOutput;

@RestController
public class LocationRestController {
    @Autowired
    private LocationServicesmpl service;
    @PostMapping("/saveLocation")
    public Location addLocation(@RequestBody Location location){
//        Location l = new Location();
//        l.setIdSalle(location.getIdSalle());
//        l.setCapacity(location.getCapacity());
//        l.setState(location.getState());
//        l.setNumSalle(location.getNumSalle());
        System.out.println(location);
        return service.addLocation(location);
    }

    @GetMapping("/getAllLocations")
    public Iterable<Location>getLocations(){
        return service.getLocations();
    }

    @PutMapping("/updateLocation/{id}")
    public Location updateLoction(@PathVariable Long id,  @RequestBody Location location){
        Location newLoc = new Location();
        newLoc.setIdSalle(id);
        newLoc.setCapacity(location.getCapacity());
        newLoc.setNumSalle(location.getNumSalle());
        newLoc.setState(location.getState());
       // System.out.println(newLoc);
        return service.updateLocation(newLoc);
    }
    @DeleteMapping("/deleteLocation/{id}")
    public void deleteLocation(@PathVariable Long id){
         service.deleteLocation(id);
    }
}
