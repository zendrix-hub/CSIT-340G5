package com.csit340.backend.Controller;

import com.csit340.backend.Model.Order;
import com.csit340.backend.Service.OrderService;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/orders")
public class OrderController {
    private final OrderService orderService;

    public OrderController(OrderService orderService) { this.orderService = orderService; }

    @GetMapping("/{userId}")
    public List<Order> getUserOrders(@PathVariable Long userId) { return orderService.getUserOrders(userId); }

    @GetMapping("/item/{id}")
    public Optional<Order> getOrderById(@PathVariable Long id) { return orderService.getOrderById(id); }

    @PostMapping
    public Order createOrder(@RequestBody Order order) { return orderService.saveOrder(order); }

    @PutMapping("/{id}")
    public Order updateOrder(@PathVariable Long id, @RequestBody Order order) {
        order.setId(id);
        return orderService.saveOrder(order);
    }

    @DeleteMapping("/{id}")
    public void deleteOrder(@PathVariable Long id) { orderService.deleteOrder(id); }
}