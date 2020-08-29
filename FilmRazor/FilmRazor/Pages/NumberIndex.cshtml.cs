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
    public class NumberIndexModel : PageModel
    {
       // public List<Number> Numbers { get; set; }
        public  List<Number> Numbers { get; set; }


        // Reference: https://stackoverflow.com/questions/50451681/accessing-async-property-in-razor-page
        public async Task<IActionResult> OnGetAsync()
        {
            //this.Values = await this.serviceProxy.GetValuesAsync();
            //return Page();
            var numberService = new NumberService();
            Numbers = await numberService.GetNumbers();
            return Page();// (IActionResult)Numbers;
        }

        ////public void OnGet()
        //public async  void OnGet()
        //{
        //    var numberService = new NumberService();

        //  //  Numbers = numberService.GetNumbers();
        //    Numbers =  await  numberService.GetNumbers();
        //}
    }
}