package HappySchool.HappySystem.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import HappySchool.HappySystem.entity.Grades;
import HappySchool.HappySystem.entity.pk.GradesPK;

public interface GradesRepository extends JpaRepository<Grades, GradesPK> {
	
	@Query("SELECT g FROM Grades g JOIN g.id.student s JOIN g.id.curso c WHERE UPPER(s.nome) LIKE UPPER(:studentName) AND UPPER(c.nome) LIKE UPPER(:courseName)")
	List<Grades> findByStudentNameAndCourseName(@Param("studentName") String studentName, @Param("courseName") String courseName);

}
