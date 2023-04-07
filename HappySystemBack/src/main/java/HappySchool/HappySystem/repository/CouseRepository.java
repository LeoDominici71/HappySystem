package HappySchool.HappySystem.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import HappySchool.HappySystem.entity.Curso;


public interface CouseRepository extends JpaRepository<Curso, Integer> {
	
	@Query("SELECT c FROM Curso c JOIN c.professor p WHERE UPPER(p.nome) LIKE UPPER(:nome)")
	List<Curso> findAllByNomeProfessor(@Param("nome") String nome);

}
