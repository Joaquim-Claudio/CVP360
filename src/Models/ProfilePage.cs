using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace CVP360.Models;

[Table("profilepage")]
public class ProfilePage {

    [Column("profileid")]
    public int? ProfileId { get; set; }
    [Column("pageid")]
    public int? PageId { get; set; }

    [ForeignKey("ProfileId")]
    public Profile? Profile { get; set; } = null!;
    [ForeignKey("PageId")]
    public Page? Page { get; set; } = null!;
}