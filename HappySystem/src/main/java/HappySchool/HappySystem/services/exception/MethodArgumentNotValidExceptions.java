package HappySchool.HappySystem.services.exception;

public class MethodArgumentNotValidExceptions extends RuntimeException {

	private static final long serialVersionUID = 1L;

	public MethodArgumentNotValidExceptions(String msg) {
		super(msg);
	}
}