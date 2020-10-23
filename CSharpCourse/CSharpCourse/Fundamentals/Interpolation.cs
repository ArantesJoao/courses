using System;
using System.Collections.Generic;
using System.Text;

namespace CSharpCourse.Fundamentals {
    class Interpolation {
        public static void Execute() {
            string name = "Gamer Notebook";
            string brand = "Dell";
            double price = 5800.00;

            Console.WriteLine("The " + name + " from " + brand + " costs " + price + ".");
            Console.WriteLine("The {0} from {1} costs {2}.", name, brand, price);
            Console.WriteLine($"The {name} from {brand} costs {price}.");
            Console.WriteLine("The examples arw written in 3 different ways");
        }
    }
}
