using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FilmRazor.Models;

namespace FilmRazor.Services
{
    public class AlbumService : IAlbumService
    {
        public List<Album> GetAlbums()
        {
            return new List<Album>()
            {
                new Album()
                {
                    strAlbum = "Album1",
                    strArtist = "Artist1"
                },
                new Album()
                {
                    strAlbum = "Album222222222222222222222222222222222222222222",
                    strArtist = "Artist1"
                }
            };
        }
    }
}
