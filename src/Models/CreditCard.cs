

using System.ComponentModel.DataAnnotations.Schema;

namespace CVP360.Models;

[Table("creditcard")]
public class CreditCard{
    [Column("id")]
    public int? Id { get; set; }
    [Column("number")]
    public string? Number { get; set; }
    [Column("name")]
    public string? Name { get; set; }
    [Column("expiredate")]
    public DateOnly? ExpireDate { get; set; }
    [Column("cvv")]
    public string? Cvv { get; set; }
    [Column("issuer")]
    public string? Issuer { get; set; }
    [Column("userid")]
    public int? UserId { get; set; }
    [ForeignKey("UserId")]
    public UserModel? User { get; set; } = null!;

    public CreditCard() {}

    public CreditCard(int id, string number, string name, DateOnly expireDate, 
                        string cvv, string? issuer) {
        Id = id;
        Number = number;
        Name = name;
        ExpireDate = expireDate;
        Cvv = cvv;
        Issuer = issuer;
    }
}