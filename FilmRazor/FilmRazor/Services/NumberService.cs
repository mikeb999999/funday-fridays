using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using System.Net.Http;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using Newtonsoft.Json.Serialization;

using FilmRazor.Models;

namespace FilmRazor.Services
{
    public class NumberService : INumberService
    {
        HttpClient _client = new HttpClient();
        List<Number> Numbers =  new List<Number>();

        public async Task<List<Number>> GetNumbers()
        {
            await RunAsync();

            return Numbers;
        }

        /// <summary>
        /// Asynchronous runner
        /// </summary>
        /// <returns></returns>
         async Task RunAsync()
        {
            Number number = null;
            Uri uri;
            HttpResponseMessage response;

            try
            {
                // In lieu of getting a number from the API
                var id = new Random().Next(0, 100); // .net get random number between 1 and 100
                uri = new Uri("http://numbersapi.com/" + id + "?json");

                // Get response for the URI
                response = await _client.GetAsync(uri);

                if (response.IsSuccessStatusCode)
                {
                    number = await getNumberDTOFromResponse(response);

                    Numbers.Add(number);
                }

            }
            catch { throw; }
        }

         async Task<Number> getNumberDTOFromResponse(HttpResponseMessage response)
        {
            Number nu = null;
            try
            {
                // Throws exception if response has invalid status code.
                response.EnsureSuccessStatusCode();

                // Serialize the HTTP content to a string
                string serialized = await response.Content.ReadAsStringAsync();

                // Write string contents out of interest.
                Console.WriteLine(serialized);

                // FROM THE ACIS MOBILE APP
                // The result is deserialized from the string into a DTO object of the required type
                //TResult result = await Task.Run(() => JsonConvert.DeserializeObject<TResult>(serialized, _serializerSettings));
                nu = await Task.Run(() =>
                    JsonConvert.DeserializeObject<Number>(serialized));

                return nu;
            }
            catch { throw;}
        }
    }
}
