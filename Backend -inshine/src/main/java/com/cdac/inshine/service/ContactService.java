package com.cdac.inshine.service;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cdac.inshine.dao.ContactDao;
import com.cdac.inshine.model.ContactEntity;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class ContactService implements ContactServiceimpl {
	
	@Autowired
	private ContactDao locationDao;
	
	
	public ContactService() {
		System.out.println("In def constructor ... "+getClass().getName());	
	}


	@Override
	public ContactEntity addlocation(ContactEntity contact) {

		return locationDao.save(contact);
	}


	@Override
	public List<ContactEntity> findAllocation() {
		return locationDao.findAll();		
	}

	@Override
	public Optional<ContactEntity> findlocationId(int locationid) {
		
		return locationDao.existsById(locationid) ? locationDao.findById(locationid) : null;
	}

	@Override
	public List<ContactEntity> deletelocation(int locationid) {
		locationDao.deleteById(locationid);
		return locationDao.findAll();
	}


	@Override
	public ContactEntity updatelocation(ContactEntity location) {
			return locationDao.save(location);
	}
	}
