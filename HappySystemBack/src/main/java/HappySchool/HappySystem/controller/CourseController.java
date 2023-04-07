package HappySchool.HappySystem.controller;

import java.net.URI;
import java.util.List;

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

import HappySchool.HappySystem.entity.Curso;
import HappySchool.HappySystem.entity.dto.CursoDTO;
import HappySchool.HappySystem.repository.CouseRepository;
import HappySchool.HappySystem.services.CourseService;

@RestController
@RequestMapping(value = "/cursos")
@CrossOrigin("http://localhost:4200")
public class CourseController {

	@Autowired
	private CourseService service;
	
	@Autowired
	private CouseRepository repository;

	@GetMapping(value = "/all")
	public ResponseEntity<List<Curso>> findAll() {
		List<Curso> list = service.findAll();
		return ResponseEntity.ok().body(list);
	}

	@GetMapping(value = "/{id}")
	public ResponseEntity<Curso> findById(@PathVariable Integer id) {
		Curso obj = service.findById(id);
		return ResponseEntity.ok().body(obj);
	}
	
	@GetMapping()
    public List<Curso> getCursosByProfessor(@RequestParam( value = "nome", required = false, defaultValue = "") String nome) {
        return repository.findAllByNomeProfessor(nome);
    }

	@PostMapping
	public ResponseEntity<Curso> insert(@RequestBody CursoDTO curso) {
		Curso obj = service.insert(curso);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(obj.getId()).toUri();
		return ResponseEntity.created(uri).body(obj);
	}

	@DeleteMapping(value = "/{id}")
	public ResponseEntity<Curso> delete(@PathVariable Integer id) {
		service.delete(id);
		return ResponseEntity.noContent().build();
	}

	@PutMapping(value = "/{id}")
	public ResponseEntity<Curso> update(@PathVariable Integer id, @RequestBody Curso newCurso) {

		newCurso = service.update(id, newCurso);
		return ResponseEntity.ok().body(newCurso);

	}
	
	
	
	

}
