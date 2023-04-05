package HappySchool.HappySystem.entity.dto;

import javax.validation.constraints.NotBlank;

import org.hibernate.validator.constraints.br.CPF;

import HappySchool.HappySystem.entity.Diretor;

public record DiretorCreateDTO(
        @NotBlank
        String nome,

        @NotBlank
        @CPF
        String cpf)

{

    public Diretor toEntity() {
        return new Diretor(null, this.nome, this.cpf);
    }
}
