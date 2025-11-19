package com.csit340.backend.Service;

import com.csit340.backend.Model.CartItem;
import com.csit340.backend.Repository.CartItemRepository;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class CartService {
    private final CartItemRepository cartItemRepository;

    public CartService(CartItemRepository cartItemRepository) { this.cartItemRepository = cartItemRepository; }

    // Get all cart items for a user
    public List<CartItem> getUserCart(Long userId) { return cartItemRepository.findByUserId(userId); }

    // Get single cart item by ID
    public Optional<CartItem> getCartItem(Long id) { return cartItemRepository.findById(id); }

    // Add or update cart item
    public CartItem saveCartItem(CartItem item) { return cartItemRepository.save(item); }

    // Remove cart item
    public void deleteCartItem(Long id) { cartItemRepository.deleteById(id); }
}
