package com.csit340.backend.Controller;

import com.csit340.backend.Model.Product;
import com.csit340.backend.Service.ProductService;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/products")
public class ProductController {
    private final ProductService productService;

    public ProductController(ProductService productService) { this.productService = productService; }

    @GetMapping
    public List<Product> getAllProducts() { return productService.getAllProducts(); }

    @GetMapping("/{id}")
    public Optional<Product> getProductById(@PathVariable Long id) { return productService.getProductById(id); }

    @PostMapping
    public Product createProduct(@RequestBody Product product) { return productService.saveProduct(product); }

    @PutMapping("/{id}")
    public Product updateProduct(@PathVariable Long id, @RequestBody Product product) {
        product.setId(id);
        return productService.saveProduct(product);
    }

    @DeleteMapping("/{id}")
    public void deleteProduct(@PathVariable Long id) { productService.deleteProduct(id); }
}
