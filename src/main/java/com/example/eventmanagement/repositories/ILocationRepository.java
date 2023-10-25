package com.example.eventmanagement.repositories;

import com.example.eventmanagement.entities.Location;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ILocationRepository extends CrudRepository<Location, Long> {
}
