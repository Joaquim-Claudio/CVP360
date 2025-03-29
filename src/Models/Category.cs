using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace CVP360.Models;

[Table("category")]
public class Category(int id, string name) {
    [Column("id")]
    public int Id {get; set;} = id;
    [Column("name")]
    public string Name {get; set;} = name;
    [JsonIgnore]
    public ICollection<Project> Projects { get; } = new List<Project>();

}