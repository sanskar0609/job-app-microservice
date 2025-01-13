package com.example.companyms.company;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/companies")
public class CompanyController {
    private CompanyService companyService;

    public CompanyController(CompanyService companyService) {
        this.companyService = companyService;
    }

    @GetMapping
    public ResponseEntity<List<Company>>getAllComanies(){
        return new ResponseEntity<>(companyService.getAllCompanies(),HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<String> updateCompany(@PathVariable Long id,@RequestBody Company company ){
        companyService.updateComapny(company,id);
        return new ResponseEntity<>("company updated successfully", HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity <String> addCompany(@RequestBody Company company)
    {
        companyService.createCompany(company);
        return new ResponseEntity<>("Comapny added successfully",HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public  ResponseEntity<String> deleteCompany(@PathVariable Long id){
        boolean isDelete=companyService.deleteCompanyById(id);
        if(isDelete){
            return new ResponseEntity<>("company successfully deleted",HttpStatus.OK);
        }else {
            return new ResponseEntity<>("company not found",HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<Company> getComapany(@PathVariable Long id ){
    Company company=companyService.getComapanyById(id);
    if(company!=null){
        return new ResponseEntity<>(company,HttpStatus.OK);
    }else {
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
    }

}
