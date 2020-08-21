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
    public class AlbumIndexModel : PageModel
    {
        public List<Album> Albums { get; set; }
        public void OnGet()
        {
            var albumService = new AlbumService();

            Albums=albumService.GetAlbums();
        }
    }
}