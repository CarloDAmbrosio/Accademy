package com.example.Ospedale.controller;

import com.example.Ospedale.entity.Paziente;
import com.example.Ospedale.service.PazienteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api/test")
public class PazienteController {

    @Autowired
    private PazienteService serv;

    @GetMapping("/allPazienti/{id}")
    @PreAuthorize("hasRole('PAZIENTE') OR hasRole('OPERATORE')")
    public List<Object> allPazienti(@PathVariable Integer id){
        return serv.findAll(id);
    }

    @PostMapping("/addPaziente")
    @PreAuthorize("hasRole('OPERATORE')")
    public Paziente addPaziente(@RequestBody Paziente p){
        return serv.add(p);

    }

    @DeleteMapping("/eliminaPaziente/{id}")
    public String eliminaPaziente(@PathVariable Integer id){
        serv.delete(id);
        return "Paziente Eliminato";
    }

    @GetMapping("/visitaPaziente/{id}")
    public List<Object> visitaPaziente(@PathVariable Integer id){
        return serv.esamePaziente(id);
    }

    @PostMapping("/uploadFile/{idPaziente}")
    public ResponseEntity<String> uploadPdf(@PathVariable("idPaziente") Integer pazienteId, @RequestParam("file") MultipartFile file) {
        try {
            serv.uploadPdf(pazienteId, file);
            return ResponseEntity.ok("File PDF caricato con successo");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Errore durante il caricamento del file PDF");
        }
    }


    @GetMapping("/downloadFile/{idPaziente}")
    public ResponseEntity<byte[]> downloadPdf(@PathVariable("idPaziente") Integer pazienteId) {
        byte[] pdfBytes = serv.downloadPdf(pazienteId);
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_PDF);
        headers.setContentDispositionFormData("attachment", "pdf_filename.pdf");
        return new ResponseEntity<>(pdfBytes, headers, HttpStatus.OK);
    }


    private String encodeFileName(String fileName) {
        try {
            return URLEncoder.encode(fileName, StandardCharsets.UTF_8.toString());
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
            return fileName;
        }
    }




}
