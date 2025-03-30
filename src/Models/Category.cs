using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace CVP360.Models;

[Table("category")]
public class Category {
    [Column("id")]
    public int? Id {get; set;}
    [Column("name")]
    public string? Name {get; set;}
    [JsonIgnore]
    public ICollection<Project> Projects { get; set; } = [];

    public Category() {}
    public Category(int id, string name) {
        Id = id;
        Name = name;
    }

}