package HappySchool.HappySystem.controller;

import java.net.URI;
import java.util.List;

import javax.validation.Valid;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import HappySchool.HappySystem.entity.Student;
import HappySchool.HappySystem.entity.dto.StudentCreateDTO;
import HappySchool.HappySystem.entity.dto.StudentDTO;
import HappySchool.HappySystem.services.StudentService;

@RestController
@RequestMapping(value = "/students")
@CrossOrigin("http://localhost:4200")
public class StudentController {

	private final StudentService service;

	public StudentController(StudentService service) {
		this.service = service;
	}

	@GetMapping
	public List<StudentDTO> findAll() {
		return service.findAll().stream().map(StudentDTO::from).toList();
	}

	@GetMapping(value = "/{matricula}")
	public ResponseEntity<StudentDTO> findById(@PathVariable Long matricula) {
		Student obj = service.findById(matricula);
		StudentDTO.from(obj);
		return ResponseEntity.ok().body(StudentDTO.from(obj));
	}

	@PostMapping
	public ResponseEntity<?> Insert(@Valid @RequestBody StudentCreateDTO dto) {

		Student savedStudent = service.insert(dto.toEntity());
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{matricula}")
				.buildAndExpand(savedStudent.getMatricula()).toUri();
		return ResponseEntity.created(uri).body(savedStudent);

	}

	@DeleteMapping(value = "/{matricula}")
	public ResponseEntity<Student> delete(@PathVariable Long matricula) {
		service.delete(matricula);
		return ResponseEntity.noContent().build();
	}

	@PutMapping(value = "/{matricula}")
	public ResponseEntity<StudentDTO> update(@PathVariable Long matricula, @RequestBody Student newStudent) {

		newStudent = service.update(matricula, newStudent);
		return ResponseEntity.ok().body(StudentDTO.from(newStudent));

	}

}
