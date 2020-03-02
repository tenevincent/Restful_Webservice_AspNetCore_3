using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SportStore.BusinessModel.Models;
using SportStore.Data;
using SportStore.DTOs;

namespace SportStore.APIs
{

    [Route("api/suppliers")]
    [ApiController]
    public class SuppliersController : ControllerBase
    {

        private DataContext context;

        public SuppliersController(DataContext ctx)
        {
            context = ctx;
        }

        [HttpGet]
        public IEnumerable<Supplier> GetSuppliers()
        {
            return context.Suppliers;
        }

        [HttpPost]
        public IActionResult CreateSupplier([FromBody]SupplierDto sdata)
        {
            if (ModelState.IsValid)
            {
                Supplier supplier = sdata.Supplier;
                context.Add(supplier);
                context.SaveChanges();
                return Ok(supplier.SupplierId);
            }
            else
            {
                return BadRequest(ModelState);
            }
        }

        [HttpPut("{id}")]
        public IActionResult ReplaceSupplier(long id, [FromBody] SupplierDto sdata)
        {
            if (ModelState.IsValid)
            {
                Supplier supplier = sdata.Supplier;
                supplier.SupplierId = id;
                context.Update(supplier);
                context.SaveChanges();
                return Ok();
            }
            else
            {
                return BadRequest(ModelState);
            }
        }

        [HttpDelete("{id}")]
        public void DeleteSupplier(long id)
        {
            context.Remove(new Supplier { SupplierId = id });
            context.SaveChanges();
        }


    }
}