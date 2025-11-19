package com.csit340.backend.Repository;

import com.csit340.backend.Model.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface OrderRepository extends JpaRepository<Order, Long> {
    // Get all orders placed by a specific user
    List<Order> findByUserId(Long userId);
}
