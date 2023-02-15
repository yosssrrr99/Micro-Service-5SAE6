package com.example.cool.Services;



import com.example.cool.entities.Dishs;

import java.util.List;

public interface DishsServices {
    Dishs addDishs(Dishs dishs, Long idOrders);
    Dishs updateDishs(Dishs dishs,Long idDishs);
    void removeDishs (Long idDish);
    Dishs retrieveDish(Long idDish);
    List<Dishs> retrieveAllDishs();
}
