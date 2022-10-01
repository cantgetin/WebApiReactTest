using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApiReactTest.Data;
using WebApiReactTest.Models;

namespace WebApiReactTest.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CarsController : ControllerBase
    {

        [HttpGet]
        public List<Car>? Get()
        {
            var dataContext = new DataContext();
            return dataContext.Cars?.Select(c => c).ToList();
        }

        [HttpGet]
        [Route("car")]
        public Car? Get(int id)
        {
            var dataContext = new DataContext();
            return dataContext.Cars?.FirstOrDefault(c => c.Id == id);
        }
    }
}
