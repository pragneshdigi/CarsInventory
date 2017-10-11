using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CarsInventory.Data.Models
{
    public partial class Users : Entity
    {
        public Users()
        {
            Cars = new HashSet<Cars>();
        }

        //public Guid UserId { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string PhoneNumber { get; set; }

        public virtual ICollection<Cars> Cars { get; set; }
    }
}
