public class News
{
    public int NewsID { get; set; }
    public int SpeciesID { get; set; }
    public string Title { get; set; }
    public string Content { get; set; }
    public DateTime PublishDate { get; set; }

    public Species Species { get; set; }
}