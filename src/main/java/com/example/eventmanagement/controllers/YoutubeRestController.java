package com.example.eventmanagement.controllers;

import com.example.eventmanagement.entities.YoutubePub;
import com.example.eventmanagement.services.YoutubeServicesmpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class YoutubeRestController {

    @Autowired
    private YoutubeServicesmpl youtubeService;

    @PostMapping("/addPub")
    public YoutubePub addVideo(@RequestBody YoutubePub youtubePub){

        return youtubeService.addVideo(youtubePub);
    }

    @GetMapping("/getVideos")
    public YoutubePub getVideos(){

        return youtubeService.getRandom();
    }
}
