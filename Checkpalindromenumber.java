import java.util.Scanner;

public class Checkpalindromenumber {
     public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter number: ");
        int num = sc.nextInt();

        int original = num;
        int rev = 0;

        while (num != 0) {
            rev = rev * 10 + (num % 10);
            num = num / 10;
        }

        if (original == rev)
            System.out.println("Palindrome number");
        else
            System.out.println("Not a palindrome");
    }
}
