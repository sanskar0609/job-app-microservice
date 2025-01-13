package com.example.companyms.company;

import java.util.List;

public interface CompanyService {
    List<Company>getAllCompanies();

    boolean updateComapny(Company company,Long id);

    void createCompany(Company company);
    boolean deleteCompanyById(Long id);

    Company getComapanyById(Long id);
}
