package com.example.cool.Services;

import com.example.cool.Repositories.DishRepository;
import com.example.cool.Repositories.OrdersRepository;
import com.example.cool.entities.Dishs;
import com.example.cool.entities.Orders;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
@Service
@AllArgsConstructor
public class DishsServiceImpl implements DishsServices{

    private DishRepository dishRepository;
    private OrdersRepository ordersRepository;
    @Override
    public Dishs addDishs(Dishs dishs, Long idOrders) {
        Dishs d=dishRepository.save(dishs);
        Orders o=ordersRepository.findById(idOrders).orElse(null);
        d.setOrders(o);
        return  dishRepository.save(d);

    }

    @Override
    public Dishs updateDishs(Dishs dishs,Long idDishs) {
        Dishs d=dishRepository.findById(idDishs).orElse(null);
        d.setIdDish(idDishs);
        d.setNameDish(d.getNameDish());
        d.setPriceDish(d.getPriceDish());

        return dishRepository.save(d);
    }

    @Override
    public void removeDishs(Long idDish) {
       dishRepository.deleteById(idDish);
    }

    @Override
    public Dishs retrieveDish(Long idDish) {
        return dishRepository.findById(idDish).orElse(null);
    }

    @Override
    public List<Dishs> retrieveAllDishs() {
        List<Dishs> ListDishs=new ArrayList<>();
        dishRepository.findAll().forEach(ListDishs::add);
        return  ListDishs;
    }
}
