package HappySchool.HappySystem.entity.dto;

import javax.validation.constraints.NotBlank;

import org.hibernate.validator.constraints.br.CPF;

import HappySchool.HappySystem.entity.Professor;

public record ProfessorCreateDTO(
        @NotBlank
        String nome,

        @NotBlank
        @CPF
        String cpf,

        @NotBlank
        String especialidade)

{

    public Professor toEntity() {
        return new Professor(null, this.nome, this.cpf, this.especialidade);
    }
}
