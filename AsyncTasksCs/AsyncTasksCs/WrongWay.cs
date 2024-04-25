using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

namespace AsyncTasksCs
{
    internal class WrongWay
    {
        public async Task<int> GetUrlContentLengthAsync()
        {
            var client = new HttpClient();
            var response = new HttpResponseMessage();

            //// Task<string> getStringTask =                 client.GetStringAsync("https://learn.microsoft.com/dotnet");
            ///
            // string contents = await client.GetStringAsync("https://learn.microsoft.com/dotnet");
            var userMappingIds = new List<int>() { 1, 2, 3 };
            //Validate all the input Id's before proceeding to delete
            foreach (var id in userMappingIds)
            {
                response = await client.GetAsync($"https://instem-experimental-identityserver-uk.instem.com/api/v1/user-mapping/11");

                new EitherWay().DoIndependentWork(); //DoIndependentWork();

                //// string contents = await getStringTask;
                Console.WriteLine("TEMP");
            }
            /// return contents.Length;
            return response.Content.ToString().Length;
        }
    }
}
