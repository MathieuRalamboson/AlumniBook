package com.MathieuRalamboson.alumniBook.Interface;

import com.MathieuRalamboson.alumniBook.Model.Alumni;
import org.springframework.data.jpa.repository.JpaRepository;


public interface InterfaceAlumni extends JpaRepository<Alumni,Integer> {

    void deleteAlumniById(Integer id);
}
