using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace CVP360.Models;

[Table("enrollmentstatus")]
public class EnrollmentStatus(int id, string status) {
    [Column("id")]
    public int Id {get; set;} = id;
    [Column("status")]
    public string Status {get; set;} = status;
    [JsonIgnore]
    public ICollection<Enrollment> Enrollments { get; } = new List<Enrollment>();

}