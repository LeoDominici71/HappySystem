package HappySchool.HappySystem.entity.dto;

import HappySchool.HappySystem.entity.Diretor;

public record DiretorDTO(String nome, String cpf) {

	public static DiretorDTO from(Diretor diretor) {
		return new DiretorDTO(diretor.getNome(), diretor.getCpf());
	}

	public static Diretor to(DiretorDTO diretorDTO) {
		return new Diretor(null, diretorDTO.nome(), diretorDTO.cpf());
	}
}