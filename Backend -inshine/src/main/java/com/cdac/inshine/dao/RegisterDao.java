package com.cdac.inshine.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cdac.inshine.model.RegisterEntity;

public interface RegisterDao extends JpaRepository<RegisterEntity, Integer>{

}
