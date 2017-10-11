using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CarsInventory.Data.Interfaces;
using CarsInventory.Data.Models;


namespace CarsInventory.Data.DataModels
{
    public partial class RepositoryDM : IRepository
    {
        public CarsInventoryContext _dbContext;

        private RepositoryDM() { }


        public RepositoryDM(CarsInventoryContext dbContext)
        {
            this._dbContext = dbContext;
        }


        public IList<Cars> GetAllCars(Guid id)
        {
            try
            {
                var cars = _dbContext.Cars.Where(c => c.UserId == id).OrderBy(x => x.Year).ToList();
                               

                return cars;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public Cars GetCarDetails(Guid id)
        {
            try
            {
                var cars = _dbContext.Cars.Where(c => c.Id == id).FirstOrDefault();


                return cars;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public T GetEntity<T>(Guid id) where T : Entity
        {
            try
            {
                return _dbContext.Find<T>(id);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public T AddEntity<T>(T entity) where T : Entity
        {
            _dbContext.Add<T>(entity);
            _dbContext.SaveChanges();
            var result = GetEntity<T>(entity.Id);
            return result;
        }

        public void UpdateEntity<T>(T entity) where T : Entity
        {
            _dbContext.Update<T>(entity);
            _dbContext.SaveChanges();
        }

        public void DeleteEntity<T>(Guid id) where T : Entity
        {
            var entity = GetEntity<T>(id);
            _dbContext.Remove<T>(entity);
            _dbContext.SaveChanges();
        }

        public Users Login(string email, string password)
        {
            var result = _dbContext.Users.Where(u => u.Email == email && u.Password == password).SingleOrDefault();

            return result;                        
        }

        public bool CheckDuplicateEmail(string email)
        {
            var result = _dbContext.Users.Where(u => u.Email == email);

            if (result.Count() > 0)
                return false;
            else
                return true;
        }
    }
}
