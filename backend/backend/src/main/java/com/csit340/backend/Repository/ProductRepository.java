package com.csit340.backend.Repository;

import com.csit340.backend.Model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Long> {
    List<Product> findByCategory(String category); // Filter products by category
}
