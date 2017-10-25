﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace SportsStore.Models
{
    
    public class ProductSelection
    {
      public long productId { get; set; }
      public string name { get; set; }
      public decimal price { get; set; }
      public int quantity { get; set; }
    }
}
