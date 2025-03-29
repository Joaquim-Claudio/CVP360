using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace CVP360.Models;

[Table("users")]
public class UserModel{

    [Column("id")]
    public int? Id {get; set;}
    [Column("fullname")]
    public string? FullName {get; set;}
    [Column("birthdate")]
    public DateOnly? BirthDate {get; set;}
    [Column("email")]
    public string? Email {get; set;}
    [Column("password")]
    public string? Password {get; set;}
    [Column("phonenumber")]
    public string? PhoneNumber {get; set;}
    [Column("nif")]
    public string? Nif {get; set;}
    [Column("profileid")]
    public int? ProfileId { get; set; }

    [ForeignKey("ProfileId")]
    public Profile? Profile { get; set; } = null!;
    [InverseProperty("User")]
    public ICollection<CreditCard>? CreditCards { get; set; } = [];

    public UserModel(){}

    public UserModel(int id, string fullName, DateOnly birthDate, string email, 
                        string password, string phoneNumber, string nif){
        Id = id;
        FullName = fullName;
        BirthDate = birthDate;
        Email = email;
        Password = password;
        PhoneNumber = phoneNumber;
        Nif = nif;
    }
}