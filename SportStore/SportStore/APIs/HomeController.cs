using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SportStore.Data;
using SportStore.ViewModels;

namespace SportStore.APIs
{
    [Route("api/[controller]")]
    [ApiController]
    public class HomeController : Controller
    {
        private DataContext context;

        public HomeController(DataContext ctx)
        {
            context = ctx;
        }

        //public IActionResult Index()
        //{
        //    return View(context.Products.First());
        //}

        //public IActionResult Privacy()
        //{
        //    return View();
        //}

        //[ResponseCache(Duration = 0, Location = ResponseCacheLocation.None,
        //    NoStore = true)]
        //public IActionResult Error()
        //{
        //    return View(new ErrorViewModel
        //    {
        //        RequestId = Activity.Current?.Id
        //        ?? HttpContext.TraceIdentifier
        //    });
        //}
    }
}