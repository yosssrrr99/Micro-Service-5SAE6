package com.example.cool.Services;

import com.example.cool.Repositories.TablesRepository;
import com.example.cool.entities.Tables;
import lombok.AllArgsConstructor;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@AllArgsConstructor
public class TablesServiceImpl implements TablesServices{

    private TablesRepository tablesRepository;
    @Override
    public Tables addTables(Tables tables) {
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
}
