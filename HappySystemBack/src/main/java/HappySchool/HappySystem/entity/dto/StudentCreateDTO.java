package HappySchool.HappySystem.entity.dto;

import javax.validation.constraints.NotBlank;

import org.hibernate.validator.constraints.br.CPF;

import HappySchool.HappySystem.entity.Student;

public record StudentCreateDTO(
        @NotBlank
        String nome,

        @NotBlank
        @CPF
        String cpf) {

    public Student toEntity() {
        return new Student(null ,this.nome, this.cpf);
    }
}