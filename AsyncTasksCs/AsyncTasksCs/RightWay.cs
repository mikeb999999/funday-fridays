using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AsyncTasksCs
{
    internal class RightWay
    {
        public async Task<int> GetUrlContentLengthAsync()
        {
            var client = new HttpClient();

            Task<string> getStringTask =
                client.GetStringAsync("https://learn.microsoft.com/dotnet");

            new EitherWay().DoIndependentWork();

            string contents = await getStringTask;

            return contents.Length;
        }


    }
}
