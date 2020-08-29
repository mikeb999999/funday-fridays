using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using FilmRazor.Models;
using Newtonsoft.Json;

namespace FilmRazor.Services
{
    public class AlbumService : IAlbumService
    {
        // TODO - use D.I.
        readonly HttpClient _client = new HttpClient();
        //List<Album> Albums = new List<Album>();
        Albums Albums = new Albums { album = new List<Album>() };
       // Album[] Albums = null;

        //  public async Task<List<Album>> GetAlbums()
       // public async Task<Album[]> GetAlbums()
        public async Task<Albums> GetAlbums()
        {

            // Put together URI to get info for the artist name
            var s = "david_bowie";
            var a = "Low";
            var uri = new Uri($"https://www.theaudiodb.com/api/v1/json/1/searchalbum.php?s={s}");
           // var uri = new Uri($"https://www.theaudiodb.com/api/v1/json/1/searchalbum.php?s={s}&a={a}");

            // Get response for the URI
            HttpResponseMessage response = await _client.GetAsync(uri);

            if (response.IsSuccessStatusCode)
            {
                Albums = await getAlbumDTOFromResponse(response);
                //Album album = await getAlbumDTOFromResponse(response);

                //Albums.Add(album);
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
            //Album album = await Task.Run(() =>
            //    JsonConvert.DeserializeObject<Album>(serialized));
            // Root myDeserializedClass = JsonConvert.DeserializeObject<Root>(myJsonResponse);
            Albums myDeserializedClass = await Task.Run(() => JsonConvert.DeserializeObject<Albums>(serialized));
          //  Album[] myDeserializedClass = await Task.Run(() => JsonConvert.DeserializeObject<Album[]>(serialized));

            return myDeserializedClass;
            //  return myDeserializedClass.album.FirstOrDefault<Album>();
        }

        //public List<Album> GetAlbums()
        //{
        //    return new List<Album>()
        //    {
        //        new Album()
        //        {
        //            intId = 1, strAlbum = "Album1", strArtist = "Artist1",   strDescription= "Desc1"
        //        },
        //        new Album()
        //        {
        //            intId =2, strAlbum = "Album222222222222222222222222222222222222222222", strArtist = "Artist1", strDescription = "Desc2"
        //        }
        //    };
        //}
    }
}
