using System;
using System.Collections.Generic;
using System.Text;

namespace CSharpCourse.Fundamentals {
    class VariablesAndConstants {
        public static void Execute() {
            // Calculate circumference area
            double radius = 4.5; // ~double has 15-17 digits (8 bytes)
            const double PI = 3.14;

            radius = 5.5;
            // PI = 3.1415; - I can't reassign it

            double area = PI * radius * radius;
            Console.WriteLine("The area is " + area);

            bool isItRaining = true;
            Console.WriteLine("Is it raining? " + isItRaining);

            byte age = 45; // goes from 0 to 256
            Console.WriteLine("Age: " + age);

            sbyte anyValue = sbyte.MinValue;
            Console.WriteLine("Minimun value for sbyte: " + anyValue);

            short salary = short.MaxValue;
            Console.WriteLine("Salary (maximum value for short): " + salary);

            int minIntValue = int.MinValue; // Most used for ints
            Console.WriteLine("Minimum value for int: " + minIntValue);

            int maxIntValue = int.MaxValue;
            Console.WriteLine("Maximum value for int: " + maxIntValue);

            uint brazilianPopulation = 207_600_000;
            Console.WriteLine("Brazilian Population: " + brazilianPopulation);

            long minValueLong = long.MinValue;
            Console.WriteLine("Minimum value for long: " + minValueLong);

            ulong worldPopulation = 7_600_000_000;
            Console.WriteLine("World population: " + worldPopulation);

            float computerPrice = 1299.99f; // f defines that you know you might loose data due to  float's storage capacity
            Console.WriteLine("Computer price: " + computerPrice);

            double appleMarketValue = 1000000000000.00;
            Console.WriteLine("Apple Market Value: " + appleMarketValue);

            decimal reallyBigValue = decimal.MaxValue;
            Console.WriteLine("Maximum value for decimal: " + reallyBigValue);

            char letter = 'b'; // for single character you use ''
            string text = "You use double quotes for more than one character";
            Console.WriteLine(letter);
            Console.WriteLine(text);
        }
    }
}
