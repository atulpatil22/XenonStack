package com.cdac.inshine.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cdac.inshine.model.ContactEntity;
import com.cdac.inshine.service.ContactService;


@CrossOrigin
@RestController
@RequestMapping
public class ContactController {
	
	@Autowired
	ContactService contactService;
	
	public ContactController() {
		System.err.println("In def consteuctor ..."+getClass().getName());
	}
	
	
	@PostMapping("/contact")
	public ResponseEntity<?> addLocation(@RequestBody ContactEntity contact) {
		System.err.println("location has been added : "+contact);
		
		try{
			return new ResponseEntity<>(contactService.addlocation(contact), HttpStatus.OK);		
		}catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}
			
	}
	
	@GetMapping("/contact")
	public ResponseEntity<?> findAllocation(){
		System.out.println("In get all contact of class "+getClass().getName());
		try {
			return new ResponseEntity<>(contactService.findAllocation(), HttpStatus.OK);
		}catch (Exception e) {
			System.out.println("IN catch block of getAll contact "+getClass().getName());
			e.printStackTrace();
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	
	@GetMapping("/contact/{contactId}")
	public ResponseEntity<?> findlocationId(@PathVariable int contactId)
	{
		System.out.println("Received Id : "+contactId);
		try {
			return new ResponseEntity<>(contactService.findlocationId(contactId), HttpStatus.OK);
		} catch (Exception e) {
			System.out.println("In location Details controller get location catch block ");
			e.printStackTrace();
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	@DeleteMapping("/contact/{contactId}")
	public ResponseEntity<?> deletelocation(@PathVariable int contactId)
	{
		System.out.println("Received Id : "+contactId);
		try {
			return new ResponseEntity<>(contactService.deletelocation(contactId), HttpStatus.OK);
		} catch (Exception e) {
			System.out.println("In location Details controller get location catch block ");
			e.printStackTrace();
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	@PutMapping("/contact")
	public ContactEntity  updatelocation(@RequestBody ContactEntity contact){
		
			return contactService.updatelocation(contact);
	}
	
	

}
