using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace CVP360.Models;

[Table("page")]
public class Page(int id, string name, string? url) {
    [Column("id")]
    public int Id {get; set;} = id;
    [Column("name")]
    public string Name {get; set;} = name;
    [Column("url")]
    public string? Url {get; set;} = url;
    [JsonIgnore]
    public ICollection<Profile> Profiles = [];

}