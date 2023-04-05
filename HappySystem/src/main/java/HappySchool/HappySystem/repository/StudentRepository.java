package HappySchool.HappySystem.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import HappySchool.HappySystem.entity.Student;

public interface StudentRepository extends JpaRepository<Student, Long> {
	
	Optional<Student> findByCpf(String cpf);

}
