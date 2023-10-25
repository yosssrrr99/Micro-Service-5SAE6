package com.example.eventmanagement.services;

import com.example.eventmanagement.entities.Location;
import com.example.eventmanagement.repositories.ILocationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LocationServicesmpl {

    @Autowired
    private ILocationRepository locationRepository;

    public Location addLocation (Location location){
        return locationRepository.save(location);
    }
    public Iterable<Location> getLocations(){
        return locationRepository.findAll();
    }

    public Location updateLocation(Location location){
        Location existingLocation = locationRepository.findById(location.getIdSalle()).orElse(null);
        existingLocation.setNumSalle(location.getNumSalle());
        existingLocation.setState(location.getState());
        return locationRepository.save(existingLocation);
    }

    public void deleteLocation(Long id){
         locationRepository.deleteById(id);
    }
}
