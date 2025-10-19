package com.tomasEtchecopar.todo_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.tomasEtchecopar.todo_backend.model.Item;

@Repository
public interface ItemRepository extends JpaRepository<Item, Long> {

    
} 
