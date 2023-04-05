package HappySchool.HappySystem.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import HappySchool.HappySystem.entity.Grades;
import HappySchool.HappySystem.entity.pk.GradesPK;

public interface GradesRepository extends JpaRepository<Grades, GradesPK> {
	


}
