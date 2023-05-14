package com.cdac.inshine.service;


import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.cdac.inshine.dao.ServicesCategoryDao;
import com.cdac.inshine.model.ServicesCategoryEntity;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class ServicesCategoryService implements ServicesCategoryServiceimpl {

	@Autowired
	private ServicesCategoryDao servicesCategoryDao;
	
	public ServicesCategoryService() {
		System.out.println("In def constructor ... "+getClass().getName());	}
	

	@Override
	public ServicesCategoryEntity addServicesCategory(ServicesCategoryEntity servicesCategory) {
		if(servicesCategory.getCategory_id() <= 0) {
			throw new RuntimeException("Id cannot be <= 0");
		}
		
		return servicesCategoryDao.save(servicesCategory);
	}
	

	@Override
	public List<ServicesCategoryEntity> findAllServicesCategoryList() {
		
		return servicesCategoryDao.findAll();
	}
		

	@Override
	public Optional<ServicesCategoryEntity> findServicesCategoryId(int servicesCategoryid) {
	
		return servicesCategoryDao.existsById(servicesCategoryid)? servicesCategoryDao.findById(servicesCategoryid) : null;
	}

	@Override
	public List<ServicesCategoryEntity> deleteServicesCategory(int servicesCategoryid) {
		
		servicesCategoryDao.deleteById(servicesCategoryid);
		return servicesCategoryDao.findAll();
	}

}
