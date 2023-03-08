package com.example.cool.Controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class TwilloController {


    @RequestMapping("/")
    public String homepage(ModelAndView model)
    {
        return "index";
    }

    /*@PostMapping("/sendmessage")
    public ResponseEntity<Object> sendmessage(Smsrequest smsrequest)
    {
        String status=smsservice.sendsms(smsrequest);
        if("sent".equals(status)||"queued".equals(status))
        {
            return new ResponseEntity<Object>("sent successfully",HttpStatus.OK);
        }
        return new ResponseEntity<Object>("failed to send message",HttpStatus.NOT_FOUND);
    }*/
}
