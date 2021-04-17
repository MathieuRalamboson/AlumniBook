package com.MathieuRalamboson.alumniBook.Model;

import java.io.Serializable;
import java.util.Date;

public class Alumni implements Serializable {
    private Integer id;
    private String name;
    private String jobTitle;
    private String email;
    private Date graduationDate;
    private String imageUrl;
    private String code;
}
