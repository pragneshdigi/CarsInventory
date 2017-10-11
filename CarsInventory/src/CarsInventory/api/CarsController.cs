using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

using CarsInventory.Data.Models;
using CarsInventory.Data.Interfaces;
using CarsInventory.Data.DataModels;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace CarsInventory.api
{
    [Route("api/[controller]")]
    public class CarsController : Controller
    {
        public IRepository _repository;

        public CarsController()
        {
            this._repository = new RepositoryDM(new CarsInventoryContext());
        }

        // GET: api/values
        [HttpGet]
        [Route("car/{id}")]
        public IActionResult GetCars(Guid id)
        {
            //id = Guid.Empty;

            //var cars = _repository.GetEntity<Cars>(id);

            var cars = _repository.GetAllCars(id);
            if (cars != null)
                return new ObjectResult(cars);
            else
                return new NotFoundResult();
        }

        [HttpGet]
        [Route("carDetails/{id}")]
        public IActionResult GetCarDetails(Guid id)
        {
            var cars = _repository.GetCarDetails(id);
            if (cars != null)
                return new ObjectResult(cars);
            else
                return new NotFoundResult();
        }

        // POST api/values
        [HttpPost]
        [Route("car")]
        public IActionResult Post([FromBody]Cars car)
        {
            if (car.Id == Guid.Empty)
            {
                car.Id = Guid.NewGuid();                             

                return new ObjectResult(_repository.AddEntity<Cars>(car));
            }
            else
            {
                var existingOne = _repository.GetEntity<Cars>(car.Id);
                existingOne.Brand = car.Brand;
                existingOne.Model = car.Model;
                existingOne.Year = car.Year;
                existingOne.Price = car.Price;
                existingOne.New = car.New;

                _repository.UpdateEntity<Cars>(existingOne);
                return new ObjectResult(existingOne);
            }
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public IActionResult Put(Guid id, [FromBody]Cars car)
        {
            var existingOne = _repository.GetEntity<Cars>(car.Id);
            existingOne.Brand = car.Brand;
            existingOne.Model = car.Model;
            existingOne.Year = car.Year;
            existingOne.Price = car.Price;
            existingOne.New = car.New;

            _repository.UpdateEntity<Cars>(existingOne);
            return new ObjectResult(existingOne);
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }

        [HttpPost]
        [Route("user")]
        public IActionResult AddUser([FromBody]Users user)
        {
            if (user.Id == Guid.Empty)
            {
                user.Id = Guid.NewGuid();                
                return new ObjectResult(_repository.AddEntity<Users>(user));
            }
            else
            {
                var existingOne = _repository.GetEntity<Users>(user.Id);
                existingOne.Email = user.Email;
                existingOne.Password = user.Password;
                existingOne.PhoneNumber = user.PhoneNumber;               

                _repository.UpdateEntity<Users>(existingOne);
                return new ObjectResult(existingOne);
            }
        }

        [HttpGet]
        public bool GetEmailStatus(string email)
        {            

            var emailStatus = _repository.CheckDuplicateEmail(email);

            return emailStatus;
        }

        [HttpGet]
        [Route("login/{email}/{password}")]
        public IActionResult Login(string email,string password)
        {                        

            var users = _repository.Login(email,password);

            if (users != null)
                return new ObjectResult(users);
            else
                return new NotFoundResult();
        }
    }
}
