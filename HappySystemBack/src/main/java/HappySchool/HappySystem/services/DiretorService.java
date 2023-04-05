package HappySchool.HappySystem.services;

import java.util.List;
import java.util.Optional;

import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;

import HappySchool.HappySystem.entity.Diretor;
import HappySchool.HappySystem.repository.DiretorRepository;
import HappySchool.HappySystem.services.exception.DatabaseExceptions;
import HappySchool.HappySystem.services.exception.EntityNotFoundExceptions;
import HappySchool.HappySystem.services.exception.RegistrationExceptions;

@Service
public class DiretorService {

    private final DiretorRepository repository;

    public DiretorService(DiretorRepository repository) {
        this.repository = repository;

    }

    public List<Diretor> findAll() {
        return repository.findAll();

    }

    public Diretor findById(Integer matricula) {
        return repository.findById(matricula)
                .orElseThrow(() -> new EntityNotFoundExceptions("Matricula doesn't exist"));
    }

    public boolean cpfExists(String cpf) {
        Optional<Diretor> DiretorOptional = repository.findByCpf(cpf);
        return DiretorOptional.isPresent();
    }

    public Diretor insert(Diretor obj) throws RegistrationExceptions {
        if (cpfExists(obj.getCpf())) {
            throw new RegistrationExceptions("This CPF already exist");
        }
        return repository.save(obj);

    }

    public void delete(Integer matricula) {
        try {
            repository.findById(matricula).map(Diretor -> {
                repository.delete(Diretor);
                return Void.TYPE;
            }).orElseThrow(() -> new EntityNotFoundExceptions("Diretor not found"));
        } catch (DataIntegrityViolationException e) {
            throw new DatabaseExceptions("Cannot execute this action");
        }
    }


    public Diretor update(Integer matricula, Diretor Diretor) {
        return repository.findById(matricula).map(Diretors -> {
            Diretors.setNome(Diretor.getNome());
            return repository.save(Diretors);
        }).orElseThrow(() -> new EntityNotFoundExceptions("Diretor not found"));

    }
}
