using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FilmRazor.Models
{
    /// <summary>
    /// Numbers model
    /// </summary>
    /// <remarks>References:
    /// The lesson: https://www.c-sharpcorner.com/article/consuming-web-apis-in-asp-net-core-mvc-application/
    /// The Restful API:http://numbersapi.com/#42
    /// 
    /// (1125) Based on O1022-SimpleConsume-API
    /// </remarks>
    public class Number
    {
        public string text { get; set; }       // was Fact
    }
}
