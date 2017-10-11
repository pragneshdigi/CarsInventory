using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CarsInventory.Data.Models
{
    public partial class Cars : Entity
    {
        //public Guid CarId { get; set; }
        public Guid UserId { get; set; }
        public string Brand { get; set; }
        public string Model { get; set; }
        public int? Year { get; set; }
        public decimal? Price { get; set; }
        public bool? New { get; set; }

        public virtual Users User { get; set; }
    }
}
