package com.MathieuRalamboson.alumniBook.ApiController;

import com.MathieuRalamboson.alumniBook.Exception.ApplicationException;
import com.MathieuRalamboson.alumniBook.Gestionnaire.GestionnaireAlumni;
import com.MathieuRalamboson.alumniBook.Model.Alumni;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/alumni")
public class ApiController {

    @Autowired
    public GestionnaireAlumni gestionnaireAlumni;

    /**
     * Effectue la sauvegarde d'un alumni
     * @param alumni
     * @return
     */
    @RequestMapping(path="/create",method = RequestMethod.POST)
    public ResponseEntity<Object> createAlumni(@RequestBody Alumni alumni) {

        gestionnaireAlumni.createAlumni(alumni);
        return new ResponseEntity<>(alumni, HttpStatus.OK);
    }

    /**
     * Effectue la suppression d'un alumni
     * @param id
     * @return
     */
    @RequestMapping(path="/delete/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<Object> deleteAlumni(@PathVariable Integer id) {

        gestionnaireAlumni.deleteAlumni(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    /**
     *  Recuperation d'une liste d'alumni de la BDD
     * @return
     */
    @RequestMapping(path="/getAllAlumni", method = RequestMethod.GET)
    public ResponseEntity<Object> getListAlumni() {
        List<Alumni> listFinal = gestionnaireAlumni.findAllAlumni();
        return new ResponseEntity<>(listFinal,HttpStatus.OK);
    }

    /**
     *  Effectue l'update d'un alumni, si il est trouvé
     * @param id
     * @param alumni
     * @return
     */
    @RequestMapping(path="/update/{id}",method = RequestMethod.PUT)
    public ResponseEntity<Object> updateAlumni(@PathVariable Integer id, @RequestBody Alumni alumni) {
        // Si l'alumni est trouver
        if(gestionnaireAlumni.findAlumniById(id) != null) {
            gestionnaireAlumni.updateAlumni(alumni);
            return new ResponseEntity<>(alumni,HttpStatus.OK);
        } else {
            throw new ApplicationException("L'alumni avec l'identifiant " + id + "n'a pas été trouver en base !");
        }
    }


}
