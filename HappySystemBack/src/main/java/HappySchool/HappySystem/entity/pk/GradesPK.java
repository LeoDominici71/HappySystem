package HappySchool.HappySystem.entity.pk;

import java.io.Serializable;
import java.util.Objects;

import javax.persistence.Embeddable;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import HappySchool.HappySystem.entity.Curso;
import HappySchool.HappySystem.entity.Student;

@Embeddable
	public class GradesPK implements Serializable {

		/**
		 * 
		 */
		private static final long serialVersionUID = 1L;

		@ManyToOne
		@JoinColumn(name = "student_id")
		private Student student;
		@ManyToOne
		@JoinColumn(name = "curso_id")
		private Curso curso;

		public GradesPK() {
			super();
		}

		public GradesPK(Student student, Curso curso) {
			super();
			this.student = student;
			this.curso = curso;
		}

		public Curso getCurso() {
			return curso;
		}

		public void setCurso(Curso curso) {
			this.curso = curso;
		}

		public Student getStudent() {
			return student;
		}

		public void setStudent(Student student) {
			this.student = student;
		}

		@Override
		public int hashCode() {
			return Objects.hash(curso, student);
		}

		@Override
		public boolean equals(Object obj) {
			if (this == obj)
				return true;
			if (obj == null)
				return false;
			if (getClass() != obj.getClass())
				return false;
			GradesPK other = (GradesPK) obj;
			return Objects.equals(curso, other.curso) && Objects.equals(student, other.student);
		}

}
