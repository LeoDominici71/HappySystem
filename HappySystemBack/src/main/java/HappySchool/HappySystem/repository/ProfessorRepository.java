package HappySchool.HappySystem.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import HappySchool.HappySystem.entity.Professor;

public interface ProfessorRepository extends JpaRepository<Professor, Long> {
	
	Optional<Professor> findByCpf(String cpf);

}
