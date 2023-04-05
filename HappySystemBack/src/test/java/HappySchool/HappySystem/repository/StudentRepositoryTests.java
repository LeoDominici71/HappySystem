package HappySchool.HappySystem.repository;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;

import java.util.Optional;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import HappySchool.HappySystem.entity.Student;
import HappySchool.HappySystem.factory.Factory;

@DataJpaTest
public class StudentRepositoryTests {

	@Autowired
	private StudentRepository repository;

	private long existingMatricula;
	private long nonexistingMatricula;

	@BeforeEach
	void setUp() throws Exception {
		existingMatricula = 1L;
		nonexistingMatricula = 1000L;

	}

	@Test
	public void saveShouldPersistWithAutoincrementWhenIdIsNull() {
		Student student = Factory.createStudent();
		student.setMatricula(null);
		student = repository.save(student);
		Assertions.assertNotNull(student.getMatricula());
	}

	@Test
	public void deleteShouldDeleteObjectWhenIdExists() {

		// act
		repository.deleteById(existingMatricula);
		// Asserts
		Optional<Student> result = repository.findById(existingMatricula);
		Assertions.assertFalse(result.isPresent());
	}

	@Test
	public void testFindById() {

		Student student = Factory.createStudent();

		// act
		student = repository.save(student);

		// Asserts
		Optional<Student> optionalStudent = repository.findById(student.getMatricula());

		assertEquals(optionalStudent.get().getMatricula(), student.getMatricula());
		assertEquals(optionalStudent.get().getNome(), student.getNome());
	}

	@Test
	public void testFindByIdNullId() {

		// act
		Optional<Student> result = repository.findById(nonexistingMatricula);

		// Asserts
		assertFalse(result.isPresent());
	}

}
