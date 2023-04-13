package HappySchool.HappySystem.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import HappySchool.HappySystem.entity.Role;
import HappySchool.HappySystem.entity.User;
import HappySchool.HappySystem.entity.dto.RoleDTO;
import HappySchool.HappySystem.entity.dto.UserDTO;
import HappySchool.HappySystem.entity.dto.UserInsertDTO;
import HappySchool.HappySystem.repository.RoleRepository;
import HappySchool.HappySystem.repository.UserRepository;
import HappySchool.HappySystem.services.exception.DataExceptions;
import HappySchool.HappySystem.services.exception.EntityNotFoundExceptions;

@Service
public class UserService {
	
	@Autowired
	private final BCryptPasswordEncoder passwordEncoder;

	@Autowired
	private final UserRepository repository;
	
	@Autowired
	private final RoleRepository roleRepository;

	public UserService(UserRepository repository, RoleRepository roleRepository, BCryptPasswordEncoder passwordEncoder) {
		this.repository = repository;
		this.roleRepository = roleRepository;
		this.passwordEncoder = passwordEncoder;

	}

	public List<User> findAll() {
		return repository.findAll();

	}

	public UserDTO findById(Long id) {
		Optional<User> obj = repository.findById(id);
		User entity = obj.orElseThrow(() -> new EntityNotFoundExceptions("User " + id + " doesn't exist"));
		return new UserDTO(entity);

	}

	public UserDTO insert(UserInsertDTO dto) {
			// Check for null fields
			if (dto.getName() == null || dto.getPassword() == null) {
				throw new DataExceptions("One or more fields are null");
			}
			User entity = new User();
			copyDtoToEntity(dto, entity);
			entity.setPassword(passwordEncoder.encode(dto.getPassword()));
			entity = repository.save(entity);
			return new UserDTO(entity);
			
			}
			

	public void delete(Long id) {
		repository.findById(id).map(User -> {
			repository.delete(User);
			return Void.TYPE;
		}).orElseThrow(() -> new EntityNotFoundExceptions("User: " + id + " doesn't exist"));
	}

	public UserDTO update(Long id, UserDTO dto) {
		User entity = repository.getOne(id);
		copyDtoToEntity(dto, entity);
		entity = repository.save(entity);
		return new UserDTO(entity);
	}
	
	private void copyDtoToEntity(UserDTO dto, User entity) {
		entity.setName(dto.getName());
		entity.setPassword(dto.getPassword());
		entity.getRoles().clear();
		for (RoleDTO Dto : dto.getRoles()) {
			Role role = roleRepository.getOne(Dto.getId());
			entity.getRoles().add(role);
		}
		
		
	}
	
	
}
