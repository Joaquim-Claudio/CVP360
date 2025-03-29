using System.ComponentModel.DataAnnotations.Schema;

namespace CVP360.Models;

[Table("project")]
public class Project(int id, string title, string description, DateOnly? startDate, DateOnly? endDate, 
                    string actionText, string? imgUrl) {
    [Column("id")]
    public int Id { get; set; } = id;
    [Column("title")]
    public string Title { get; set; } = title;
    [Column("description")]
    public string Description { get; set; } = description;
    [Column("startdate")]
    public DateOnly? StartDate { get; set; } = startDate;
    [Column("enddate")]
    public DateOnly? EndDate { get; set; } = endDate;
    [Column("actiontext")]
    public string ActionText { get; set; } = actionText;
    [Column("imgurl")]
    public string? ImgUrl { get; set; } = imgUrl;
    [Column("categoryid")]
    public int? CategoryId { get; set; }
    [ForeignKey("CategoryId")]
    public Category? Category { get; set; } = null!;
}
