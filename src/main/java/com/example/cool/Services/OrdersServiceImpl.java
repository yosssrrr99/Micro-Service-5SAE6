package com.example.cool.Services;

import com.example.cool.Repositories.OrdersRepository;
import com.example.cool.Repositories.TablesRepository;
import com.example.cool.entities.Orders;
import com.example.cool.entities.Tables;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@AllArgsConstructor
public class OrdersServiceImpl implements OrdersServices{
    private OrdersRepository ordersRepository;
    private TablesRepository tablesRepository;


    @Override
    public Orders addOrders(Orders orders, Long idTables) {
        Orders o=ordersRepository.save(orders);
        Tables t=tablesRepository.findById(idTables).orElse(null);
        tablesRepository.save(t);
        o.setTables(t);
        return ordersRepository.save(orders);
    }

    @Override
    public Orders updateOrders(Orders orders,Long idOrders) {
        Orders o=ordersRepository.findById(idOrders).orElse(null);
        o.setIdOrders(idOrders);
        o.setDateOrder(orders.getDateOrder());
        o.setNbPlace(orders.getNbPlace());
        return  ordersRepository.save(o);

    }

    @Override
    public void removeOrder(Long idOrder) {
         ordersRepository.deleteById(idOrder);
    }

    @Override
    public Orders retrieveOrder(Long idOrder) {
        return ordersRepository.findById(idOrder).orElse(null);
    }

    @Override
    public List<Orders> retrieveAllOrders() {
        List<Orders> ListOrders=new ArrayList<>();
        ordersRepository.findAll().forEach(ListOrders::add);
        return  ListOrders;
    }
}
