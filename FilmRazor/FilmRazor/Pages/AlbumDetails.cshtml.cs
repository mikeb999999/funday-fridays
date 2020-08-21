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
        public Album Album { get; private set; }
        public void OnGet(int id)
        {
            var albumService = new AlbumService();

             Album = albumService.GetAlbums().FirstOrDefault(x => x.intId == id);
        }
    }
}