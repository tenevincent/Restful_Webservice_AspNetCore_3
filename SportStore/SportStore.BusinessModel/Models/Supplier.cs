using System;
using System.Collections.Generic;
using System.Text;

namespace SportStore.BusinessModel.Models
{
    public class Supplier
    {

        public long SupplierId { get; set; }

        public string Name { get; set; }
        public string City { get; set; }
        public string State { get; set; }

        public IEnumerable<Product> Products { get; set; }
    }
}
