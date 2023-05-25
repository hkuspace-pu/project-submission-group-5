public class Comment
{
    public int CommentID { get; set; }
    public int UserID { get; set; }
    public int RecordID { get; set; }
    public string Content { get; set; }
    public int Rating { get; set; }
    public DateTime UpdatedAt { get; set; }
    public DateTime CreatedAt { get; set; }
}
