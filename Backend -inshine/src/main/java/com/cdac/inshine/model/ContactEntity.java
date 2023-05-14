
	package com.cdac.inshine.model;

	import jakarta.persistence.Entity;

	import jakarta.persistence.GeneratedValue;
	import jakarta.persistence.GenerationType;
	import jakarta.persistence.Id;
	import jakarta.persistence.Table;

	@Entity
	@Table(name = "contact")
	public class ContactEntity {
		
		@Id
		@GeneratedValue(strategy = GenerationType.IDENTITY)
		private int contact_id;
		private String contact_email;
		private String contact_phone;
		private String contact_message;
		public ContactEntity() {
			// TODO Auto-generated constructor stub
		}
		public int getContact_id() {
			return contact_id;
		}
		public void setContact_id(int contact_id) {
			this.contact_id = contact_id;
		}
		public String getContact_email() {
			return contact_email;
		}
		public void setContact_email(String contact_email) {
			this.contact_email = contact_email;
		}
		public String getContact_phone() {
			return contact_phone;
		}
		public void setContact_phone(String contact_phone) {
			this.contact_phone = contact_phone;
		}
		public String getContact_message() {
			return contact_message;
		}
		public void setContact_message(String contact_message) {
			this.contact_message = contact_message;
		}
		@Override
		public String toString() {
			return "Contact [contact_id=" + contact_id + ", contact_email=" + contact_email + ", contact_phone="
					+ contact_phone + ", contact_message=" + contact_message + "]";
		}
		

	}