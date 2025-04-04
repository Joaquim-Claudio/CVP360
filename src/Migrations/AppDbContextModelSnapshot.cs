﻿// <auto-generated />
using System;
using CVP360.dbContext;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace cvp360.Migrations
{
    [DbContext(typeof(AppDbContext))]
    partial class AppDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "9.0.3")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            NpgsqlModelBuilderExtensions.UseIdentityByDefaultColumns(modelBuilder);

            modelBuilder.Entity("CVP360.Models.Category", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .HasColumnName("id");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("text")
                        .HasColumnName("name");

                    b.HasKey("Id");

                    b.ToTable("category");
                });

            modelBuilder.Entity("CVP360.Models.CreditCard", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .HasColumnName("id");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<string>("Cvv")
                        .IsRequired()
                        .HasColumnType("text")
                        .HasColumnName("cvv");

                    b.Property<DateOnly>("ExpireDate")
                        .HasColumnType("date")
                        .HasColumnName("expiredate");

                    b.Property<string>("Issuer")
                        .HasColumnType("text")
                        .HasColumnName("issuer");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("text")
                        .HasColumnName("name");

                    b.Property<string>("Number")
                        .IsRequired()
                        .HasColumnType("text")
                        .HasColumnName("number");

                    b.Property<int?>("UserId")
                        .HasColumnType("integer")
                        .HasColumnName("userid");

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("creditcard");
                });

            modelBuilder.Entity("CVP360.Models.Profile", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .HasColumnName("id");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<string>("ExtendedName")
                        .IsRequired()
                        .HasColumnType("text")
                        .HasColumnName("extendedname");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("text")
                        .HasColumnName("name");

                    b.HasKey("Id");

                    b.ToTable("profile");
                });

            modelBuilder.Entity("CVP360.Models.Project", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .HasColumnName("id");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<string>("ActionText")
                        .IsRequired()
                        .HasColumnType("text")
                        .HasColumnName("actiontext");

                    b.Property<int?>("CategoryId")
                        .HasColumnType("integer")
                        .HasColumnName("categoryid");

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasColumnType("text")
                        .HasColumnName("description");

                    b.Property<DateOnly?>("EndDate")
                        .HasColumnType("date")
                        .HasColumnName("enddate");

                    b.Property<string>("ImgUrl")
                        .HasColumnType("text")
                        .HasColumnName("imgurl");

                    b.Property<DateOnly?>("StartDate")
                        .HasColumnType("date")
                        .HasColumnName("startdate");

                    b.Property<string>("Title")
                        .IsRequired()
                        .HasColumnType("text")
                        .HasColumnName("title");

                    b.HasKey("Id");

                    b.HasIndex("CategoryId");

                    b.ToTable("project");
                });

            modelBuilder.Entity("CVP360.Models.UserModel", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .HasColumnName("id");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<DateOnly>("BirthDate")
                        .HasColumnType("date")
                        .HasColumnName("birthdate");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("text")
                        .HasColumnName("email");

                    b.Property<string>("FullName")
                        .IsRequired()
                        .HasColumnType("text")
                        .HasColumnName("fullname");

                    b.Property<string>("Nif")
                        .IsRequired()
                        .HasColumnType("text")
                        .HasColumnName("nif");

                    b.Property<string>("Password")
                        .IsRequired()
                        .HasColumnType("text")
                        .HasColumnName("password");

                    b.Property<string>("PhoneNumber")
                        .IsRequired()
                        .HasColumnType("text")
                        .HasColumnName("phonenumber");

                    b.Property<int?>("ProfileId")
                        .HasColumnType("integer")
                        .HasColumnName("profileid");

                    b.HasKey("Id");

                    b.HasIndex("ProfileId");

                    b.ToTable("users");
                });

            modelBuilder.Entity("CVP360.Models.CreditCard", b =>
                {
                    b.HasOne("CVP360.Models.UserModel", "User")
                        .WithMany("CreditCards")
                        .HasForeignKey("UserId");

                    b.Navigation("User");
                });

            modelBuilder.Entity("CVP360.Models.Project", b =>
                {
                    b.HasOne("CVP360.Models.Category", "Category")
                        .WithMany("Projects")
                        .HasForeignKey("CategoryId");

                    b.Navigation("Category");
                });

            modelBuilder.Entity("CVP360.Models.UserModel", b =>
                {
                    b.HasOne("CVP360.Models.Profile", "Profile")
                        .WithMany("Users")
                        .HasForeignKey("ProfileId");

                    b.Navigation("Profile");
                });

            modelBuilder.Entity("CVP360.Models.Category", b =>
                {
                    b.Navigation("Projects");
                });

            modelBuilder.Entity("CVP360.Models.Profile", b =>
                {
                    b.Navigation("Users");
                });

            modelBuilder.Entity("CVP360.Models.UserModel", b =>
                {
                    b.Navigation("CreditCards");
                });
#pragma warning restore 612, 618
        }
    }
}
