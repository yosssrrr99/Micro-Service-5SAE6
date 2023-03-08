package com.example.cool.Services;



import com.example.cool.entities.Orders;
import com.example.cool.entities.TypeDish;
import org.hibernate.criterion.Order;

import java.util.List;

public interface OrdersServices {
    String addOrdersAndAssignDishs(Orders orders,Long idTables,Long idDishs);
    Orders updateOrders(Orders orders,Long idOrders);
    void removeOrder (Long idOrder);
    Orders retrieveOrder(Long idOrder);
    List<Orders> retrieveAllOrders();
    public int buyjeton(Long idUser,float Ubalance,float montant);
    public String FavoriteMenu(String prefere);
    public String AllergierIngredient(String allergie);
    public Integer Annulation();
    public String MenuLePlusCommander();
    public int NbreDeCommandeParJour();








}
