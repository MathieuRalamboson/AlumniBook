package com.MathieuRalamboson.alumniBook.Gestionnaire;

import com.MathieuRalamboson.alumniBook.Exception.ApplicationException;
import com.MathieuRalamboson.alumniBook.Interface.InterfaceAlumni;
import com.MathieuRalamboson.alumniBook.Model.Alumni;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class GestionnaireAlumni {

    @Autowired
    private InterfaceAlumni interfaceAlumni;


    /**
     * Fonction création d'un alumni
     * @param alumni
     * @return
     */
    public Alumni createAlumni(Alumni alumni) {
        alumni.setCode(UUID.randomUUID().toString());
        return interfaceAlumni.save(alumni);
    }

    /**
     * Fonction suprression en base d'un alumni
     * @param id
     */
    public void deleteAlumni(Integer id) {
        interfaceAlumni.deleteAlumniById(id);
    }

    /**
     * Fonction modification en base d'un alumni
     * @param alumni
     * @return
     */
    public Alumni updateAlumni(Alumni alumni) {
        return interfaceAlumni.save(alumni);
    }

    /**
     * Fonction recupération de la liste d'alumni en base
     * @return
     */
    public List<Alumni> findAllAlumni() {
        return interfaceAlumni.findAll();
    }

    /**
     * Fonction recuperation d'un alumni en fonction de l'id en entré
     * @param id
     * @return
     */
    public Optional<Alumni> findAlumniById(Integer id) {
        if(interfaceAlumni.findById(id) == null) {
            throw new ApplicationException("L'alumni avec l'identifiant " + id + " n'existe pas en base !");
        } else {
            return interfaceAlumni.findById(id);
        }
    }


}
