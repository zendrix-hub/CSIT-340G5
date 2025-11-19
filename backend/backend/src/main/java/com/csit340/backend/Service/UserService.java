package com.csit340.backend.Service;

import com.csit340.backend.Model.User;
import com.csit340.backend.Repository.UserRepository;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) { this.userRepository = userRepository; }

    // Get all users
    public List<User> getAllUsers() { return userRepository.findAll(); }

    // Get user by ID
    public Optional<User> getUserById(Long id) { return userRepository.findById(id); }

    // Save or update user
    public User saveUser(User user) { return userRepository.save(user); }

    // Delete user by ID
    public void deleteUser(Long id) { userRepository.deleteById(id); }
}
