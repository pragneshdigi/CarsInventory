using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using CarsInventory.Data.Models;

namespace CarsInventory.Data.DataModels
{
    public partial class CarsInventoryContext : DbContext
    {
        public virtual DbSet<Cars> Cars { get; set; }
        public virtual DbSet<Users> Users { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            #warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
            optionsBuilder.UseSqlServer(@"Server=PKS\MSSQLSERVER2016;Database=CarsInventory;Trusted_Connection=True;");
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Cars>(entity =>
            {
                entity.HasKey(e => e.Id)
                    .HasName("PK_Cars");

                entity.Property(e => e.Id).ValueGeneratedNever().HasColumnName("CarId");                

                entity.Property(e => e.Brand).HasColumnType("varchar(250)");

                entity.Property(e => e.Model).HasColumnType("varchar(250)");

                entity.Property(e => e.Price).HasColumnType("decimal");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.Cars)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.Restrict)
                    .HasConstraintName("FK_Cars_Users");
            });

            modelBuilder.Entity<Users>(entity =>
            {
                entity.HasKey(e => e.Id)
                    .HasName("PK_Users");

                entity.Property(e => e.Id).ValueGeneratedNever().HasColumnName("UserId");

                entity.Property(e => e.Email).HasColumnType("varchar(50)");

                entity.Property(e => e.Password).HasColumnType("varchar(50)");

                entity.Property(e => e.PhoneNumber).HasColumnType("varchar(50)");
            });
        }
    }
}