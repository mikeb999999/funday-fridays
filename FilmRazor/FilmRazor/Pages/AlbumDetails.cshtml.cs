using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using FilmRazor.Models;
using FilmRazor.Services;

namespace FilmRazor.Pages
{
    public class AlbumDetailsModel : PageModel
    {
        //   public Album[] Albums { get; set; }
        public Albums Albums { get; set; }
        //public List<Album> Albums { get; set; }
        public Album Album { get; private set; }
        public async void OnGet(string id)
        {
            var albumService = new AlbumService();   // N.B.  need to inject existing service / use singleton for now

            Albums = await albumService.GetAlbums();

            //   Album = Albums.FirstOrDefault<Album>(x => x.idAlbum == id);
            //   Album = Albums.albums.FirstOrDefault<Album>(x => x.idAlbum == id);
            Album = Albums.album.FirstOrDefault<Album>(x => x.idAlbum == id);
            //  Album = Albums.FirstOrDefault<Album>(x => x.idAlbum == id); // intId == id);
            // Album = await albumService.GetAlbums().FirstOrDefault(x => x.intId == id);
        }
    }
}