using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace CVP360.Models;

[Table("enrollment")]
public class Enrollment(int id, double value, DateOnly date, DateOnly limitDate) {
    [Column("id")]
    public int Id {get; set;} = id;
    [Column("value")]
    public double Value {get; set;} = value;
    [Column("date")]
    public DateOnly Date {get; set;} = date;
    [Column("limitdate")]
    public DateOnly LimitDate {get; set;} = limitDate;

    [Column("enstatusid")]
    public int? EnStatusId { get; set; }

    [ForeignKey("EnStatusId")]
    public EnrollmentStatus? EnrollmentStatus { get; set; } = null!;
    [Column("userid")]
    public int? UserId { get; set; }

    [ForeignKey("UserId")]
    public UserModel? User { get; set; } = null!;
    [Column("projectid")]
    public int? ProjectId { get; set; }

    [ForeignKey("ProjectId")]
    public Project? Project { get; set; } = null!;

}