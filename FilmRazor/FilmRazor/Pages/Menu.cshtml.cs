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
    public class MenuModel : PageModel
    {
        public List<MenuItem> Menu { get; set; }

        public void OnGet()
        {
            var menuService = new MenuService();

            Menu = menuService.GetMenuItems();
        }
        //public class MenuModel : PageModel
        //{
        //    public void OnGet()
        //    {

        //    }
        //}
    }
}