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
        public Albums Albums { get; set; }
        public Album Album { get; private set; }

        public async void OnGetAsync(string id)
        {
            Albums = await AlbumService.GetAlbumsStatic();

            Album = Albums.album.FirstOrDefault<Album>(x => x.idAlbum == id);
        }
    }
}