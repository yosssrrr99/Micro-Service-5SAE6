package com.example.cool.Repositories;

import com.example.cool.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface UserRepository extends JpaRepository<User,Long> {

    @Query("select u from User u order by u.isCreatedAt")
    List<User> listaParDate();
}
