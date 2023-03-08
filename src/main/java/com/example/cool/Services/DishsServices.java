package com.example.cool.Services;



import com.example.cool.entities.Dishs;
import com.example.cool.entities.TypeDish;

import java.util.List;

public interface DishsServices {
    Dishs addDishs(Dishs dishs);
    Dishs updateDishs(Dishs dishs,Long idDishs);
    void removeDishs (Long idDish);
    Dishs retrieveDish(Long idDish);
    List<Dishs> retrieveAllDishs();
    public int normCalor(Long idUser);
    public String  CalculCaloriePlat(Long idUser);


}
