package com.csit340.backend.Service;

import com.csit340.backend.Model.OrderItem;
import com.csit340.backend.Repository.OrderItemRepository;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class OrderItemService {
    private final OrderItemRepository orderItemRepository;

    public OrderItemService(OrderItemRepository orderItemRepository) { this.orderItemRepository = orderItemRepository; }

    public List<OrderItem> getAllOrderItems() { return orderItemRepository.findAll(); }

    public Optional<OrderItem> getOrderItemById(Long id) { return orderItemRepository.findById(id); }

    public OrderItem saveOrderItem(OrderItem item) { return orderItemRepository.save(item); }

    public void deleteOrderItem(Long id) { orderItemRepository.deleteById(id); }
}
