package com.example.eventmanagement.services;

import com.example.eventmanagement.entities.YoutubePub;
import com.example.eventmanagement.repositories.IYoutubePubRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class YoutubeServicesmpl {

    @Autowired
    private IYoutubePubRepository youtubeRepositoy;

    public YoutubePub addVideo(YoutubePub publicity){
        return youtubeRepositoy.save(publicity);
    }



    public YoutubePub getRandom(){

        return youtubeRepositoy.findRandom();
    }
}
