using System.ComponentModel.DataAnnotations.Schema;

namespace CVP360.Models;

[Table("users")]
public class UserModel(int id, string fullName, DateOnly birthDate, string email, 
                        string password, string phoneNumber, string nif) {
    [Column("id")]
    public int Id {get; set;} = id;
    [Column("fullname")]
    public string FullName {get; set;} = fullName;
    [Column("birthdate")]
    public DateOnly BirthDate {get; set;} = birthDate;
    [Column("email")]
    public string Email {get; set;} = email;
    [Column("password")]
    public string Password {get; set;} = password;
    [Column("phonenumber")]
    public string PhoneNumber {get; set;} = phoneNumber;
    [Column("nif")]
    public string Nif {get; set;} = nif;
    [Column("profileid")]
    public int? ProfileId { get; set; }

    [ForeignKey("ProfileId")]
    public Profile? Profile { get; set; } = null!;
}