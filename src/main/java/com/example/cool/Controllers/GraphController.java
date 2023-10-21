package com.example.cool.Controllers;

import com.example.cool.Repositories.DishRepository;
import com.example.cool.Repositories.OrdersRepository;
import com.example.cool.entities.Dishs;
import com.example.cool.entities.Orders;
import com.example.cool.entities.TypeDish;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.util.Date;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

@Controller
@AllArgsConstructor
@Slf4j
public class GraphController {
    private final OrdersRepository ordersRepository;
    private final DishRepository dishRepository;


    @GetMapping("/displayBarGraph")
    public String barGraph(Model model) {
        Date date=new Date();
        int dated=date.getDate();
        int datef=date.getDate()+7;


        int NbComande=0;
        List<Orders> orders=ordersRepository.findAll();
        Map<Date, Integer> surveyMap = new LinkedHashMap<>();
        Date Df=new Date();
        for(int i=0;i<date.getDate();i++){


            Df.setDate(dated+i);
            NbComande=0;
            for(Orders o:orders) {

                if(o.getDateOrder().getDate()==Df.getDate()){
                    NbComande++;
                    surveyMap.put(o.getDateOrder(), NbComande);

                }

            }


        }

        model.addAttribute("surveyMap", surveyMap);
        return "barGraph";


    }

    @GetMapping("/displayPieChart")
    public String pieChart(Model model) {
        List<Dishs> Lista =dishRepository.findAll();


        int countMenu1 =ordersRepository.Commande(Lista.get(0).getIdDish());
        int countMenu2 =ordersRepository.Commande(Lista.get(1).getIdDish());

        model.addAttribute("pass", countMenu1);
        model.addAttribute("fail", countMenu2);
        return "pieChart";
    }
}
