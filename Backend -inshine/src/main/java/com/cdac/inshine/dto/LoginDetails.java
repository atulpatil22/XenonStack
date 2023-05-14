package com.cdac.inshine.dto;

public class LoginDetails {


	private String email_id;
	
	private String password;

	public String getemail_id() {
		return email_id;
	}

	public void setemail_id(String email_id) {
		this.email_id = email_id;
	}

	public String getpassword() {
		return password;
	}

	public void setpassword(String password) {
		this.password = password;
	}

	public LoginDetails(String email_id, String password) {
		
		this.email_id = email_id;
		this.password = password;
	}
	
}
