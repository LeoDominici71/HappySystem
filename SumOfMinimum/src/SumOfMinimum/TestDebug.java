package SumOfMinimum;

import java.util.Arrays;

public class TestDebug {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		int[][] array = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};
		System.out.println(sumOfMinimums(array)); // Expected output: 6
		
	}

	public static int sumOfMinimums(int[][] array) {
		// initialize sum
		int sum = 0;
		// iterate over each row of the matrix using a for loop
		for (int i = 0; i < array.length; i++) {
			// find the minimum value in each row using Arrays.stream() and min()
			int min = Arrays.stream(array[i]).min().getAsInt();
			// add the minimum value to the sum
			sum += min;
		}
		// return the sum as the final result
		return sum;
	}
}

