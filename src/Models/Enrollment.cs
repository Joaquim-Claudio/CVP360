using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace CVP360.Models;

[Table("enrollment")]
public class Enrollment {
    [Column("id")]
    public int? Id {get; set;}
    [Column("value")]
    public double? Value {get; set;}
    [Column("date")]
    public DateOnly? Date {get; set;}
    [Column("limitdate")]
    public DateOnly? LimitDate {get; set;}

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

    public Enrollment() {}
    public Enrollment(int id, double value, DateOnly date, DateOnly limitDate) {
        Id = id;
        Value = value;
        Date = date;
        LimitDate = limitDate;
    }

}