using System;
using System.Collections.Generic;

using CSharpCourse.Fundamentals;
using CSharpCourse.ControlStructures;

namespace CursoCSharp {
    class Program {
        static void Main(string[] args) {
            var central = new CentralDeExercicios(new Dictionary<string, Action>() {
                // Fundamentals
                {"First Program - Fundamentals", FirstProgram.Execute},
                {"Comments - Fundamentals", Comments.Execute},
                {"Variables And Constants - Fundamentals", VariablesAndConstants.Execute},
                {"Inference - Fundamentals", Inference.Execute},
                {"Interpolation - Fundamentals", Interpolation.Execute},
                {"Getting Data From Console - Fundamentals", GettingDataFromConsole.Execute},
                // Control Structures
                {"If/Else Structure - Control Structures", IfElseStructure.Execute},
                {"Switch Structure - Control Structures", SwitchStructure.Execute},
            });

            central.SelecionarEExecutar();
        }
    }
}