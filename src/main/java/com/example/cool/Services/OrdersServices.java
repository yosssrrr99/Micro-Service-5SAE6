package com.example.cool.Services;



import com.example.cool.entities.Orders;

import java.util.List;

public interface OrdersServices {
    Orders addOrders(Orders orders,Long idTables);
    Orders updateOrders(Orders orders,Long idOrders);
    void removeOrder (Long idOrder);
    Orders retrieveOrder(Long idOrder);
    List<Orders> retrieveAllOrders();

}
