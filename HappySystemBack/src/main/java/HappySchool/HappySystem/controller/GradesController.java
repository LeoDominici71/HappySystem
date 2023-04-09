package HappySchool.HappySystem.controller;

import java.net.URI;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import HappySchool.HappySystem.entity.Grades;
import HappySchool.HappySystem.entity.dto.GradesDTO;
import HappySchool.HappySystem.repository.GradesRepository;
import HappySchool.HappySystem.services.GradesService;

@RestController
@RequestMapping(value = "/grades")
@CrossOrigin("http://localhost:4200")
public class GradesController {

	@Autowired
	private GradesService service;
	
	@Autowired
	private GradesRepository repository;
	

	@GetMapping("/all")
	public ResponseEntity<List<Grades>> findAll() {
		List<Grades> list = service.findAll();
		return ResponseEntity.ok().body(list);
	}
	
	@GetMapping
    public List<Grades> getGradesByStudentAndCourse( @RequestParam( value = "studentNome", required = false, defaultValue = "") String StudentNome, @RequestParam( value = "cursoNome", required = false, defaultValue = "") String CursoNome) {
        return repository.findByStudentNameAndCourseName("%" + StudentNome+ "%" ,"%" + CursoNome + "%");
    }

	@GetMapping(value = "/student/{studentId}/curso/{courseId}")
	public ResponseEntity<Grades> findById(@PathVariable Long studentId, @PathVariable Integer courseId) {
		Grades grades = service.findById(studentId, courseId);
		return ResponseEntity.ok().body(grades);
	}

	@PostMapping
	public ResponseEntity<Grades> insert(@RequestBody @Valid GradesDTO grades) {
		Grades obj = service.insert(grades);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{studentId}/{courseId}")
				.buildAndExpand(obj.getStudent().getMatricula(), obj.getCurso().getId()).toUri();
		return ResponseEntity.created(uri).body(obj);
	}

	@DeleteMapping(value = "/student/{studentId}/curso/{courseId}")
	public ResponseEntity<Grades> delete(@PathVariable Long studentId,
			@PathVariable Integer courseId) {
		service.delete(studentId, courseId);
		return ResponseEntity.noContent().build();
	}

	@PutMapping(value = "/student/{studentId}/curso/{courseId}")
	public ResponseEntity<Grades> update(@PathVariable Long studentId, @PathVariable Integer courseId,
			@RequestBody Grades newGrade) {
		Grades newGrades = service.update(studentId, courseId, newGrade);
		return ResponseEntity.ok().body(newGrades);

	}

}
