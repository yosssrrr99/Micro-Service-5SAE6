package com.example.cool.Services;

import com.example.cool.entities.Tables;


import java.util.List;

public interface TablesServices {
    Tables addTables(Tables tables);
    void removeTable (Long idTable);
    Tables retrieveTable(Long idTable);
    List<Tables> retrieveAllTabless();
    void SetStateTable();

}
