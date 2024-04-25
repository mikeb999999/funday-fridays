using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AsyncTasksCs
{
    internal class EitherWay
    {
        internal void DoIndependentWork()
        {
            Console.Write("Working...");
            for (int i = 0; i < 20; i++)
            {
                Console.Write(i);
                Thread.Sleep(100);
            }
            //Console.Beep();
            Console.WriteLine();
        }
    }
}
