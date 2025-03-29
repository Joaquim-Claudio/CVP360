using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace CVP360.Models;

[Table("profile")]
public class Profile(int id, string name, string extendedName) {
    [Column("id")]
    public int Id {get; set;} = id;
    [Column("name")]
    public string Name {get; set;} = name;
    [Column("extendedname")]
    public string ExtendedName {get; set;} = extendedName;
    [JsonIgnore]
    public ICollection<UserModel> Users { get; } = new List<UserModel>();

}