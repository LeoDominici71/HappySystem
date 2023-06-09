package HappySchool.HappySystem.entity.dto;

import java.io.Serializable;

import HappySchool.HappySystem.entity.Role;

public class RoleDTO implements Serializable{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private Long id;
	private String authority;
	public RoleDTO() {
		super();
	}
	public RoleDTO(Long id, String authority) {
		super();
		this.id = id;
		this.authority = authority;
	}
	public RoleDTO(Role role) {
		super();
		id = role.getId();
		authority = role.getAuthority();
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getAuthority() {
		return authority;
	}
	public void setAuthority(String authority) {
		this.authority = authority;
	}
	
	

}
