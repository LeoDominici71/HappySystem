package HappySchool.HappySystem.entity;

import java.io.Serializable;
import java.util.Objects;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

import HappySchool.HappySystem.entity.pk.GradesPK;

@Entity
@Table(name = "tb_grades")
public class Grades implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@EmbeddedId
	private GradesPK id = new GradesPK();
	private Double grades;

	public Grades() {
		super();
	}

	public Grades(Curso curso, Student student, Double grades) {
		super();
		id.setCurso(curso);
		id.setStudent(student);
		this.grades = grades;

	}
	@JsonIgnore
	public Curso getCurso() {
		return id.getCurso();

	}
	
	public void setCurso(Curso curso) {
		id.setCurso(curso);

	}

	@JsonIgnore
	public Student getStudent() {
		return id.getStudent();

	}

	public void setStudent(Student student) {
		id.setStudent(student);

	}

	public Double getGrades() {
		return grades;
	}

	public void setGrades(Double grades) {
		this.grades = grades;
	}

	@Override
	public int hashCode() {
		return Objects.hash(id);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Grades other = (Grades) obj;
		return Objects.equals(id, other.id);
	}

}
