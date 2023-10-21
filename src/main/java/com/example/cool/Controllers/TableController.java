package com.example.cool.Controllers;

import com.example.cool.Services.TablesServices;
import com.example.cool.entities.Tables;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("tables")
@AllArgsConstructor

public class TableController {

    TablesServices tablesServices;
    @PostMapping("/add")
    public ResponseEntity<Tables> addTable(@RequestBody Tables tables){

        Tables t= tablesServices.addTables(tables);
        return new ResponseEntity<>(t, HttpStatus.OK);
    }
    @PutMapping("/update")
    public ResponseEntity<Tables> UpdateTable(@RequestBody Tables tables){

        Tables t= tablesServices.addTables(tables);
        return new ResponseEntity<>(t, HttpStatus.OK);
    }
    @DeleteMapping("/delete/{id}")
    void deleteTables(@PathVariable("id") Long idTables){tablesServices.removeTable(idTables);}
    @GetMapping("/get/{id}")
    public ResponseEntity<Tables> retrieveTableById(@PathVariable("id")Long idTables){
        Tables t= tablesServices.retrieveTable(idTables);
        return new ResponseEntity<>(t, HttpStatus.OK);
    }
    @GetMapping("/getAll")
    public ResponseEntity<List<Tables>> retrieveAllTables(){
        List<Tables> tt=  tablesServices.retrieveAllTabless();
        return new ResponseEntity<>(tt, HttpStatus.OK);
    }



}
