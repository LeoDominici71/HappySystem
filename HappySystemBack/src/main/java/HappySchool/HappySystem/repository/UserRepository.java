package HappySchool.HappySystem.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import HappySchool.HappySystem.entity.User;


public interface UserRepository extends JpaRepository<User, Long> {
	

}
