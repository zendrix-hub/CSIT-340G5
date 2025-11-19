package com.csit340.backend.Controller;

import com.csit340.backend.Model.CartItem;
import com.csit340.backend.Service.CartService;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/cart")
public class CartController {
    private final CartService cartService;

    public CartController(CartService cartService) { this.cartService = cartService; }

    @GetMapping("/{userId}")
    public List<CartItem> getUserCart(@PathVariable Long userId) { return cartService.getUserCart(userId); }

    @GetMapping("/item/{id}")
    public Optional<CartItem> getCartItem(@PathVariable Long id) { return cartService.getCartItem(id); }

    @PostMapping
    public CartItem addToCart(@RequestBody CartItem item) { return cartService.saveCartItem(item); }

    @PutMapping("/{id}")
    public CartItem updateCartItem(@PathVariable Long id, @RequestBody CartItem item) {
        item.setId(id);
        return cartService.saveCartItem(item);
    }

    @DeleteMapping("/{id}")
    public void deleteCartItem(@PathVariable Long id) { cartService.deleteCartItem(id); }
}
