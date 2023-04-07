package SumOfMinimum;

import java.util.Arrays;

public class test {

	/**
	 * Complete the 'sumOfMinimums' function below.
	 *
	 * The function is expected to return an int. The function accepts following
	 * parameters: 1. int[][] array
	 */
	// Este código implementa a função sumOfMinimums,
	public static int sumOfMinimums(int[][] array) {
		// inicializar soma
		int sum = 0;
		// Ai eu usei o for que passa sobre cada linha da matriz e utilizei o método
		// Arrays.stream para converter a sequencia linha em inteiros.
		// Em seguida, o método min() valor mínimo dessa sequencia.
		// e getAsInt() é usado para obter o valor mínimo como um int.
		for (int i = 0; i < array.length; i++) {
			int min = Arrays.stream(array[i]).min().getAsInt();
			// O valor mínimo de cada linha é somado à variável sum, que é retornada como
			// resultado da função no final.
			sum += min;
		}
		return sum;
	}

}
