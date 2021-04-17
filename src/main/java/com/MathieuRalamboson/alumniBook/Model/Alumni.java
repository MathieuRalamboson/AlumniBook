package com.MathieuRalamboson.alumniBook.Model;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Entity
public class Alumni implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false, updatable = false)
    private Integer id;

    @Column(nullable = false, updatable = false)
    private String code;

    private String name;
    private String jobTitle;
    private String email;
    private Date graduationDate;
    private String imageUrl;

    public Alumni() {
    }

    public Alumni(String name, String jobTitle, String email, Date graduationDate, String imageUrl) {
        this.name = name;
        this.jobTitle= jobTitle;
        this.email = email;
        this.graduationDate = graduationDate;
        this.imageUrl = imageUrl;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getJobTitle() {
        return jobTitle;
    }

    public void setJobTitle(String jobTitle) {
        this.jobTitle = jobTitle;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Date getGraduationDate() {
        return graduationDate;
    }

    public void setGraduationDate(Date graduationDate) {
        this.graduationDate = graduationDate;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }
}
