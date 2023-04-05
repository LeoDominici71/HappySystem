package HappySchool.HappySystem.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import HappySchool.HappySystem.entity.Diretor;

public interface DiretorRepository extends JpaRepository<Diretor, Integer> {
	
	Optional<Diretor> findByCpf(String cpf);

}
