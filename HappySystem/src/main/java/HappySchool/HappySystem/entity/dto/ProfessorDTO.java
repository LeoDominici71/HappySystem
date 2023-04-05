package HappySchool.HappySystem.entity.dto;

import HappySchool.HappySystem.entity.Professor;

public record ProfessorDTO(Long matricula ,String nome, String cpf, String especialidade) {

	public static ProfessorDTO from(Professor professor) {
		return new ProfessorDTO(professor.getMatricula(),professor.getNome(), professor.getCpf(), professor.getEspecialidade());
	}

	public static Professor to(ProfessorDTO professorDTO) {
		return new Professor(professorDTO.matricula(), professorDTO.nome(), professorDTO.cpf(), professorDTO.especialidade());
	}
}