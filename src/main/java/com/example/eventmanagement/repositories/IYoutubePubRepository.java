package com.example.eventmanagement.repositories;

import com.example.eventmanagement.entities.ReservationEvent;
import com.example.eventmanagement.entities.YoutubePub;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IYoutubePubRepository extends JpaRepository<YoutubePub, Long> {
    @Query(value = "SELECT * FROM youtube ORDER BY RAND () LIMIT 1", nativeQuery=true)
        YoutubePub findRandom();
}
