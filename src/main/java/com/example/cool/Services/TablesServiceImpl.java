package com.example.cool.Services;

import com.example.cool.Repositories.OrdersRepository;
import com.example.cool.Repositories.TablesRepository;
import com.example.cool.entities.Orders;
import com.example.cool.entities.Tables;
import lombok.AllArgsConstructor;


import lombok.extern.slf4j.Slf4j;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

@Service
@Slf4j
@AllArgsConstructor
public class TablesServiceImpl implements TablesServices{

    private TablesRepository tablesRepository;
    private final OrdersRepository ordersRepository;

    @Override
    public Tables addTables(Tables tables) {
        int x= new Random().ints(5).sum();
        tables.setNumTable(x);
        return tablesRepository.save(tables);
    }

    @Override
    public void removeTable(Long idTable) {
        tablesRepository.deleteById(idTable);
    }

    @Override
    public Tables retrieveTable(Long idTable) {
        return tablesRepository.findById(idTable).orElse(null);
    }

    @Override
    public List<Tables> retrieveAllTabless() {
        List<Tables> ListTables =new ArrayList<>();
        tablesRepository.findAll().forEach(ListTables::add);
        return ListTables;
    }
    //status de la table di capacity == nbplace
    @Scheduled(fixedRate = 60000)
    @Override
    public void SetStateTable() {
        List<Tables> ListTables=tablesRepository.findAll();
        List<Orders> ListOrders =ordersRepository.findAll();

        for( Tables i : ListTables){
            for(Orders o:ListOrders){
              if(i.getIdTable()==o.getTables().getIdTable()){
                int a =ordersRepository.NbreTotPlaceByTable(i.getIdTable());
                log.info("la somme est "+a);
                if(i.getCapacity()==a){
                    i.setState(Boolean.TRUE);
                    log.info("le statut est"+i.getState());
                    tablesRepository.save(i);
                    log.info("la capacite est"+i.getCapacity());
            }


            }
            }
    }
}

}
