package com.example.eventmanagement.repositories;


        import com.example.eventmanagement.entities.Event;
        import com.example.eventmanagement.entities.TypeCompte;
        import com.example.eventmanagement.entities.User;
        import org.springframework.data.jpa.repository.JpaRepository;

        import org.springframework.data.jpa.repository.Query;
        import org.springframework.data.repository.query.Param;
        import org.springframework.stereotype.Repository;

@Repository
public interface userRepository extends JpaRepository <User,Long> {

        /*@Query("select count (user) from  User user   where  (user.typecompte = :typeCompte) ")
        int countUserByTypeCount(@Param("typeCompte") TypeCompte typeCompte    );

        @Query("select count (user) from  User user   where  (user.typecompte = :event) ")
        int countUserByEvent(@Param("typeCompte") Event event    );*/
}