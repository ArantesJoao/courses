using System;
using System.Collections.Generic;
using System.Text;

namespace CSharpCourse.ControlStructures {
    class SwitchStructure {
        public static void Execute() {
            Console.Write("Rate my driving skills from 0 to 5: ");
            int.TryParse(Console.ReadLine(), out int grade);

            switch (grade) {
                case 0:
                    Console.WriteLine("Awful");
                    break;
                case 1:
                case 2:
                    Console.WriteLine("Bad");
                    break;
                case 3:
                    Console.WriteLine("Regular");
                    break;
                case 4:
                    Console.WriteLine("Good");
                    break;
                case 5:
                    Console.WriteLine("Excellent!");
                    break;
                default:
                    Console.WriteLine("Invalid grade.");
                    break;
            }
            Console.WriteLine("Thank you for your time!");
        }
    }
}
