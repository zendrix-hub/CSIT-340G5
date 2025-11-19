package com.csit340.backend.Service;

import com.csit340.backend.Model.Order;
import com.csit340.backend.Repository.OrderRepository;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class OrderService {
    private final OrderRepository orderRepository;

    public OrderService(OrderRepository orderRepository) { this.orderRepository = orderRepository; }

    public List<Order> getUserOrders(Long userId) { return orderRepository.findByUserId(userId); }

    public Optional<Order> getOrderById(Long id) { return orderRepository.findById(id); }

    public Order saveOrder(Order order) { return orderRepository.save(order); }

    public void deleteOrder(Long id) { orderRepository.deleteById(id); }
}
