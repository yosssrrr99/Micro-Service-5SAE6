package com.example.eventmanagement.entities;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name ="youtube")
public class YoutubePub implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long id;

    private String url;

    public YoutubePub() {
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public Long getId() {
        return id;
    }

    public String getUrl() {
        return url;
    }
}
