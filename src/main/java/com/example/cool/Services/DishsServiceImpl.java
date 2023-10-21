package com.example.cool.Services;

import com.example.cool.Repositories.CalorieRepository;
import com.example.cool.Repositories.DishRepository;
import com.example.cool.Repositories.OrdersRepository;
import com.example.cool.Repositories.UserRepository;
import com.example.cool.dto.RequiredResponse;
import com.example.cool.entities.*;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
@Slf4j
@AllArgsConstructor
public class DishsServiceImpl implements DishsServices {

    private DishRepository dishRepository;
    private OrdersRepository ordersRepository;
    private UserRepository userRepository;
    private CalorieRepository calorieRepository;
@Autowired
    RestTemplate restTemplate;
    @Override
    public Dishs addDishs(Dishs dishs) {

        return dishRepository.save(dishs);

    }

    @Override
    public Dishs updateDishs(Dishs dishs, Long idDishs) {

        dishs.setIdDish(idDishs);
        return dishRepository.save(dishs);
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
        List<Dishs> ListDishs = new ArrayList<>();
        dishRepository.findAll().forEach(ListDishs::add);
        return ListDishs;
    }

    @Override
    public int normCalor(Long idUser) {
        User user = userRepository.findById(idUser).orElse(null);
        double calorDay = 0d;
        if (user.getGneder().equals("Femme")) {
            if (user.getAge() >= 18 && user.getAge() <= 30) {
                calorDay = ((0.06 * user.getWeight()) + 2.037) * 240;
            } else if (user.getAge() > 30 && user.getAge() <= 60) {
                calorDay = ((0.034 * user.getWeight()) + 3.54) * 240;
            } else if (user.getAge() > 60) {
                calorDay = ((0.04 * user.getWeight()) + 2.76) * 240;
            }
        } else if (user.getGneder().equals("Homme")) {
            if (user.getAge() >= 18 && user.getAge() <= 30) {
                calorDay = ((0.06 * user.getWeight()) + 2.90) * 240;
            } else if (user.getAge() > 30 && user.getAge() <= 60) {
                calorDay = ((0.05 * user.getWeight()) + 3.65) * 240;
            } else if (user.getAge() > 60) {
                calorDay = ((0.05 * user.getWeight()) + 2.46) * 240;
            }
        }


        return (int) calorDay;
    }


    public int getcalories(@PathVariable Long id){
        int x=0; int y=0;
        RequiredResponse re=new RequiredResponse();
        com.example.cool.dto.User ls=restTemplate.getForObject("http://CLIENTSERVICEE/user/idu/"+id, com.example.cool.dto.User.class);
        double calorDay = 0d;
        if (ls.getGneder().equals("Femme")) {
            if (ls.getAge() >= 18 && ls.getAge() <= 30) {
                calorDay = ((0.06 * ls.getWeight()) + 2.037) * 240;
            } else if (ls.getAge() > 30 && ls.getAge() <= 60) {
                calorDay = ((0.034 * ls.getWeight()) + 3.54) * 240;
            } else if (ls.getAge() > 60) {
                calorDay = ((0.04 * ls.getWeight()) + 2.76) * 240;
            }
        } else if (ls.getPreferences().equals("Homme")) {
            if (ls.getAge() >= 18 && ls.getAge() <= 30) {
                calorDay = ((0.06 * ls.getWeight()) + 2.90) * 240;
            } else if (ls.getAge() > 30 && ls.getAge() <= 60) {
                calorDay = ((0.05 * ls.getWeight()) + 3.65) * 240;
            } else if (ls.getAge() > 60) {
                calorDay = ((0.05 * ls.getWeight()) + 2.46) * 240;
            }
        }


        return(int) calorDay;

    }







    @Override
    public String CalculCaloriePlat(Long idUser) {
        List<Integer> ListPlat=new ArrayList<>();
        int NbCalorieParPersonne=getcalories(idUser);
        int NbCaloriesParPlat = 0;
        //listTypeDishs
        List<TypeDish> ListaDishs=new ArrayList<>();
        //listeDishs
        List<Dishs> ListDishs = dishRepository.findAll();
        //MapMtaaCalorie
        List<Calorie> calories =calorieRepository.findAll();
        //BoucleForMap

            //boucleformtaaListDishs
            for (Dishs s : ListDishs) {

               String[] y = s.getDescription().split(" ");
                for (String f : y) {
                    for (Calorie c:calories) {
                    String aaa=c.getIngredients();
                    if (f.contains(aaa)) {

                        NbCaloriesParPlat = NbCaloriesParPlat + c.getNbCalorie();
                        ListaDishs.add(s.getTypeDish());
                        }
                    }

            }

            ListPlat.add(NbCaloriesParPlat);


        }


        for(Integer b:ListPlat){
            for(TypeDish td:ListaDishs){

            double NB=  (b-NbCalorieParPersonne * 0.25 );
            log.info("NbCalorieParPersonn"+NbCalorieParPersonne);
            log.info("NbCaloriesParPlat"+b);
            if(NB>0 &&NB<=300) {
                log.info("le nombre est" + NB);
                return String.valueOf(td);
            }

            }

        }

        return "la prochaine fois nchalh compatible";
    }



}