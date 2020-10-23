using System;
using System.Collections.Generic;
using System.Text;

namespace CSharpCourse.Fundamentals {
    class Inference {
        public static void Execute() {
            var nome = "João"; // In this case, C# knows that the var is a string
            // nome = 123 | C# won't let me do this because it can't convert the type
            Console.WriteLine(nome);
        }
    }
}
