using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using FilmRazor.Models;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Newtonsoft.Json;

namespace FilmRazor.Services
{
    public class AlbumService : IAlbumService
    {
        // TODO - use D.I.
        readonly HttpClient _client = new HttpClient();

        Albums Albums = new Albums { album = new List<Album>() };
        // TODO - use D.I.
        static Albums AlbumsStatic;


        /// <summary>
        /// Note this is temporary until using DI
        /// </summary>
        public static async Task<Albums> GetAlbumsStatic()
        {
            return AlbumsStatic;
        }

        //  public async Task<List<Album>> GetAlbums()
        // public async Task<Album[]> GetAlbums()
        public async Task<Albums> GetAlbums()
        {

            // Put together URI to get info for the artist name
            var s = "david_bowie";
            var uri = new Uri($"https://www.theaudiodb.com/api/v1/json/1/searchalbum.php?s={s}");
 
            // Get response for the URI
            HttpResponseMessage response = await _client.GetAsync(uri);

            if (response.IsSuccessStatusCode)
            {
                Albums = await getAlbumDTOFromResponse(response);

                // TODO - use DI!
                AlbumsStatic = Albums;
            }

            return Albums;
        }

     //    async Task<Album[]> getAlbumDTOFromResponse(HttpResponseMessage response)
            async Task<Albums> getAlbumDTOFromResponse(HttpResponseMessage response)
        {
            // Throws exception if response has invalid status code.
            response.EnsureSuccessStatusCode();

            // Serialize the HTTP content to a string
            string serialized = await response.Content.ReadAsStringAsync();

            // Write string contents out of interest.
            Console.WriteLine(serialized);

            // The result is deserialized from the string into a DTO object of the required type
 
            Albums myDeserializedClass = await Task.Run(() => JsonConvert.DeserializeObject<Albums>(serialized));

            return myDeserializedClass;
        }
    }
}
