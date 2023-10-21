package com.example.cool.Services;

import com.example.cool.Repositories.*;
import com.example.cool.entities.*;
import com.example.cool.mail.IEmailSenderService;
import com.example.cool.mail.Msg;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import javax.persistence.criteria.CriteriaBuilder;
import java.time.LocalDate;
import java.util.*;

@Service
@AllArgsConstructor
@Slf4j
public class    OrdersServiceImpl implements OrdersServices{
    private final UserRepository userRepository;
    private final DishRepository dishRepository;
    private final DonnationRepository donnationRepository;
    static   float prixj=7;


    private OrdersRepository ordersRepository;
    private TablesRepository tablesRepository;


    //AddAndAsignTablesAndDishswitthContion table lezem tkoun feha blassa
    @Override
    public String addOrdersAndAssignDishs(Orders orders, Long idTables,Long idDishs) {

        Tables t=tablesRepository.findById(idTables).orElse(null);
        List<Tables> tt=tablesRepository.findAll();
        Dishs d =dishRepository.findById(idDishs).orElse(null);
        //Affection table
        for(Tables tables:tt){
            if(idTables==tables.getIdTable()) {
                System.out.println(tables.getIdTable());



                boolean aaa = ordersRepository.ishavePlaceByTable(tables.getIdTable());

                int  a =  (
                        ordersRepository.ishavePlaceByTable(tables.getIdTable()) ?
                                ordersRepository.NbreTotPlaceByTable(tables.getIdTable())   :
                0
                        );
                    if (tables.getCapacity() <= a) {
                        log.info("la capacite est" + tables.getCapacity());
                        return "Commander dans une autre table";

                    }
                else {
                    orders =ordersRepository.save(orders);
                    orders.setTables(t);
                    tablesRepository.save(t);
                    //Affectation Equipe
                    if (orders.getDishs() == null) {
                        Set<Dishs> dishs = new HashSet<>();
                        dishs.add(d);
                        orders.setDishs(dishs);

                    } else {
                        orders.getDishs().add(d);

                    }
                    ordersRepository.save(orders);
                }


            }


        }

        return "Ajout avec succées";
    }


    @Override
    public Orders updateOrders(Orders orders,Long idOrders) {
        Orders o=ordersRepository.findById(idOrders).orElse(null);
        o.setIdOrders(idOrders);
        o.setDateOrder(orders.getDateOrder());
       List<Tables> tables=tablesRepository.findAll();
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
    //jeton
    @Override
    public int buyjeton(Long idUser,float Ubalance,float montant) {
        User u =userRepository.findById(idUser).orElse(null);

          float jetons=0;
           if (montant <prixj){
             jetons =0;
            log.info("solde insuffisant");
           }else {
                jetons = montant / prixj;
                u.setJetons((int) jetons);
                userRepository.save(u);
               Ubalance=Ubalance-montant;

           }

        return (int)jetons;

    }
    //preference
    @Override
    public String FavoriteMenu(String prefere) {
        TypeDish  td=TypeDish.Menu1;
            String[] x=prefere.split(" ");
            List<Dishs> ListDishs=dishRepository.findAll();
            int ratings=0;
            String res="";
            for(String i :x){
                for (Dishs s:ListDishs)
                {
                    String []y=s.getDescription().split(" ");
                    for(String f:y){
                        if (f.contains(i)){
                            log.info("mawjoud");
                            td=s.getTypeDish();
                         ratings++;
                        }
                    }
                }
            }
            if (ratings >=3){
               res="tres compatible"+td;
            } else if (ratings==2) {
                res="moyen compatible"+td;

            } else if (ratings==1) {
                res="1 compatible"+td;

            } else if (ratings==0) {
                res="non compatible"+td;

            }
        return  res;
    }

    @Override
    public String AllergierIngredient(String allergie) {
        String[] a=allergie.split(" ");
        List<Dishs> ListDishs=dishRepository.findAll();
        for(String x: a ){
            for(Dishs d :ListDishs){
                String[] description=d.getDescription().split(" ");
                for(String dd:description){
                    if(dd.contains(x)){
                        return String.valueOf(d.getTypeDish());
                    }
                }
            }

        }
        return "maandekech hassaseya jawek behi";

    }




    //Annulation avec mail
   private   IEmailSenderService iemail;
    @Override
    public Integer Annulation() {

        //liste des formulaire trier a faire
        List<Donnation> listaParDate=donnationRepository.listaParDate();

        int kadehMenWehed=0;
        Date date=new Date();
        int i =0;
        List<Orders> orders = ordersRepository.findOrdersByStatus(TypeRes.annulation);
        for(Orders o:orders){
            if(o.getDateOrder().getYear()==date.getYear()&&o.getDateOrder().getMonth()==date.getMonth()&&o.getDateOrder().getDate()==date.getDate()){
                  System.out.println("aaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
                    iemail.SendSimpleEmail( new Msg("Plat graduit",listaParDate.get(i).getEmail(),
                            "message"+o.getDateOrder().toString()));
                    kadehMenWehed=  kadehMenWehed+o.getNbPlace();
                    log.info("test" + kadehMenWehed);
                    i =i+1;
              if( i > listaParDate.size()){
                  break;
              }
            }
        }


       return kadehMenWehed;

    }

    @Override
    public String MenuLePlusCommander() {
        int countMenu1=0;
        int countMenu2=0;
        List<Dishs> Lista =dishRepository.findAll();


             countMenu1 =ordersRepository.Commande(Lista.get(0).getIdDish());
             countMenu2 =ordersRepository.Commande(Lista.get(1).getIdDish());


        if(countMenu2>countMenu1){
            return "Menu 2 le plus commnder";
        }
        return "Menu 1 le plus recommander";
    }

    @Override
    public int NbreDeCommandeParJour() {
        Date date =new Date();
        int NBCo=0;
        List<Orders> lista=ordersRepository.findAll();
        for(Orders o:lista){
           for(int i=1;i<=date.getDay()+7;i++){


           }
                NBCo++;
               Map<Date,Integer> mapo = new LinkedHashMap<>();
               mapo.put(o.getDateOrder(),NBCo);

        }

        return 0;
    }


}
