
using Microsoft.EntityFrameworkCore;
using WebApiReactTest.Models;

namespace WebApiReactTest.Data
{
    public class DataContext : DbContext
    {
        public DataContext()
        {
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("server=DESKTOP-E5BA5DV\\SQLEXPRESS;database=WebApiReactDb;trusted_connection=true");
        }

        public DbSet<Car>? Cars { get; set; }
    }
}
