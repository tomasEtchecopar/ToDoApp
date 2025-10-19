package com.tomasEtchecopar.todo_backend.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PathVariable;

import com.tomasEtchecopar.todo_backend.model.Item;
import com.tomasEtchecopar.todo_backend.repository.ItemRepository;

@RestController
@RequestMapping("/api/items")
@CrossOrigin(origins = "http://localhost:4200")
public class ItemController {
    
    private final ItemRepository repo;

    public ItemController(ItemRepository repo) {
        this.repo = repo;
    }

    @GetMapping
    public List<Item> getAll(){
        return repo.findAll();
    }

    @PostMapping
    public Item create(@RequestBody Item item){
        return repo.save(item);
    }

    @PutMapping("/{id}")
    public Item update(@PathVariable Long id, @RequestBody Item item){
        Item i = repo.findById(id).orElseThrow();
        i.setTitle(item.getTitle());
        i.setDescription(item.getDescription());
        i.setDone(item.isDone());
        return repo.save(i);
    }
    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id){
        repo.deleteById(id);
    }
}
