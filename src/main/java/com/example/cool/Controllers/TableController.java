package com.example.cool.Controllers;

import com.example.cool.Services.TablesServices;
import com.example.cool.entities.Tables;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("tables")
@AllArgsConstructor

public class TableController {

    TablesServices tablesServices;
    @PostMapping("/add")
    Tables addTable(@RequestBody Tables tables){
        return tablesServices.addTables(tables);
    }
    @PutMapping("/update")
    Tables UpdateTable(@RequestBody Tables tables){
        return tablesServices.addTables(tables);
    }
    @DeleteMapping("/delete/{id}")
    void deleteTables(@PathVariable("id") Long idTables){tablesServices.removeTable(idTables);}
    @GetMapping("/get/{id}")
    Tables retrieveTableById(@PathVariable("id")Long idTables){return tablesServices.retrieveTable(idTables);}
    @GetMapping("/getAll")
    List<Tables> retrieveAllTables(){return  tablesServices.retrieveAllTabless();}



}
