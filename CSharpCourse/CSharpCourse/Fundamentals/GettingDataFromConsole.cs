using System;
using System.Globalization;

namespace CSharpCourse.Fundamentals {
    class GettingDataFromConsole {
        public static void Execute() {
            Console.Write("What's your name? ");
            string name = Console.ReadLine();

            Console.Write("How old are you? ");
            int age = int.Parse(Console.ReadLine());

            Console.Write("What's your salary? ");
            double salary = double.Parse(Console.ReadLine(),
                CultureInfo.InvariantCulture);

            Console.WriteLine($"Your name is {name}, you are {age} years old " +
                $"and your salary is {salary}");
        }
    }
}
