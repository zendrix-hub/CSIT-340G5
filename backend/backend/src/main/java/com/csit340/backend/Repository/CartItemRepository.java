package com.csit340.backend.Repository;

import com.csit340.backend.Model.CartItem;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface CartItemRepository extends JpaRepository<CartItem, Long> {
    List<CartItem> findByUserId(Long userId); // Get all cart items for a specific user
}
