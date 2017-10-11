using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CarsInventory.Data.Models;

namespace CarsInventory.Data.Interfaces
{
    public partial interface IRepository
    {
        IList<Cars> GetAllCars(Guid id);

        Cars GetCarDetails(Guid id);
        T GetEntity<T>(Guid id) where T : Entity;

        T AddEntity<T>(T entity) where T : Entity;

        void UpdateEntity<T>(T entity) where T : Entity;

        void DeleteEntity<T>(Guid id) where T : Entity;

        Users Login(string email, string password);

        bool CheckDuplicateEmail(string email);
    }
}
