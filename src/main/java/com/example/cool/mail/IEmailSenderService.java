package com.example.cool.mail;



import javax.mail.MessagingException;

public interface IEmailSenderService {
    String  SendSimpleEmail(Msg msg);
    String  SendEmailWithAttachement(Msg msg) throws MessagingException;
}