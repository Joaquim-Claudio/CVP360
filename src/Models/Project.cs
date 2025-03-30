using System.ComponentModel.DataAnnotations.Schema;

namespace CVP360.Models;

[Table("project")]
public class Project {
    [Column("id")]
    public int? Id { get; set; }
    [Column("title")]
    public string? Title { get; set; }
    [Column("description")]
    public string? Description { get; set; }
    [Column("startdate")]
    public DateOnly? StartDate { get; set; }
    [Column("enddate")]
    public DateOnly? EndDate { get; set; }
    [Column("actiontext")]
    public string? ActionText { get; set; }
    [Column("imgurl")]
    public string? ImgUrl { get; set; }
    [Column("categoryid")]
    public int? CategoryId { get; set; }
    [ForeignKey("CategoryId")]
    public Category? Category { get; set; } = null!;

    public Project() {}
    public Project(int id, string title, string description, DateOnly? startDate, DateOnly? endDate, 
                    string actionText, string? imgUrl) {
        Id = id;
        Title = title;
        Description = description;
        StartDate = startDate;
        EndDate = endDate;
        ActionText = actionText;
        ImgUrl = imgUrl;
    }
}
