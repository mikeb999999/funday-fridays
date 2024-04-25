// See https://aka.ms/new-console-template for more information
using AsyncTasksCs;

Console.WriteLine("Hello, World!");
Console.WriteLine("R - Right Way, W - Wrong Way (ref. https://learn.microsoft.com/en-us/dotnet/csharp/asynchronous-programming/task-asynchronous-programming-model)");
while (true)
{
    var key = Console.ReadKey();
    if (key.KeyChar.ToString().ToLower() == "r")
    {
        Console.WriteLine("R");
        var rw = new RightWay();
        for (int i = 0; i < 10; i++)
        {
            var len = await rw.GetUrlContentLengthAsync();
            Console.WriteLine($"R{i}:Length:{len}");
        }
    }
    else
    if (key.KeyChar.ToString().ToLower() == "w")
    {
        Console.WriteLine("W");
        var ww = new WrongWay();
        for (int i = 0; i < 10; i++)
        {
            var len = await ww.GetUrlContentLengthAsync();
            Console.WriteLine($"W{i}:Length:{len}");
        }
    }

}
