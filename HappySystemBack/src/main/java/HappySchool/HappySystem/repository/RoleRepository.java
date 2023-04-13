package HappySchool.HappySystem.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import HappySchool.HappySystem.entity.Role;


public interface RoleRepository extends JpaRepository<Role, Long> {
	

}
