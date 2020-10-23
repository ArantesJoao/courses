using System;

namespace CSharpCourse.ControlStructures {
    class IfElseStructure {
        public static void Execute() {
            bool goodBehavior = false;
            string input;

            Console.Write("Type your note in here: ");
            input = Console.ReadLine();
            Double.TryParse(input, out double grade);

            Console.Write("Do you have a good behavior (Y/N)? ");
            input = Console.ReadLine();

            goodBehavior = input.ToLower() == "y";

            if (grade >= 9.0 && goodBehavior) {
                Console.WriteLine("You get the Great Student Certificate!");
            } else if (grade >= 9.0 && !goodBehavior || grade >= 7.0 && goodBehavior) {
                Console.WriteLine("You almost got the Great Student Certificate.");
            } else {
                Console.WriteLine("You don't get the Great Student Certificate.");
            }
        }
    }
}
