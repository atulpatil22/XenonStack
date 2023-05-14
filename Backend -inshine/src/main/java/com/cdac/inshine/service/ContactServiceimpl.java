package com.cdac.inshine.service;

import java.util.List;
import java.util.Optional;

import com.cdac.inshine.model.ContactEntity;


public interface ContactServiceimpl {

	// add location
	ContactEntity addlocation(ContactEntity location);
	
	// find all location
	List<ContactEntity> findAllocation();
	
	// find all location by id
	Optional<ContactEntity> findlocationId(int locationid);
	
	//Delete location by ID
	List<ContactEntity> deletelocation(int locationid);
	
	//update location by ID
	ContactEntity updatelocation(ContactEntity location);
}


