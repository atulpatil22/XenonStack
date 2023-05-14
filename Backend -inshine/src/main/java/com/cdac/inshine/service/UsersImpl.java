package com.cdac.inshine.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import com.cdac.inshine.dao.RegisterDao;
import com.cdac.inshine.dto.LoginDetails;
import com.cdac.inshine.model.RegisterEntity;

@Service
public class UsersImpl implements Users {

	@Autowired
	private RegisterDao registerDao;
	
	public UsersImpl() {
		System.out.println("In def constructor ... "+getClass().getName());
	}
	

	@Override 
	public List<RegisterEntity> getAllUsers() {
		
		return registerDao.findAll();	

	}
	
	@Override 
	public RegisterEntity addUser(RegisterEntity user) {
		try {
			return registerDao.save(user);
		}catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}	
	
	@Override
	public Optional<RegisterEntity> FindSystemUserById(int id) {
		
		return registerDao.existsById(id) ? registerDao.findById(id) : null;
	}
	
	@Override
	public List<RegisterEntity> deleteUser(int id) {
		
		registerDao.deleteById(id);
		return registerDao.findAll();
	}


	@Override
	public RegisterEntity validateLoginDetails(LoginDetails loginCred) {
		List<RegisterEntity> registerUser = registerDao.findAll();
		
		for(RegisterEntity user : registerUser) {
			if(user.getEmail_id().equals(loginCred.getemail_id()) && user.getPassword().equals(loginCred.getpassword())) {
				return user;
			}
		}
		return null;
	}



	


	
}
