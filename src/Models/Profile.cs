using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace CVP360.Models;

[Table("profile")]
public class Profile{
    [Column("id")]
    public int? Id {get; set;}
    [Column("name")]
    public string? Name {get; set;}
    [Column("extendedname")]
    public string? ExtendedName {get; set;}
    [JsonIgnore]
    public ICollection<UserModel> Users { get; } = [];
    [JsonIgnore]
    public ICollection<Page> Profiles = [];

    public Profile() {}

    public Profile(int id, string name, string extendedName) {
        Id = id;
        Name = name;
        ExtendedName = extendedName;
    }
}