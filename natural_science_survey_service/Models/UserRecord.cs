public class UserRecord
{
    public int UserRecordID { get; set; }
    public int UserID { get; set; }
    public int SpeciesID { get; set; }
    public float Longitude { get; set; }
    public float Latitude { get; set; }
    public DateTime DateObserved { get; set; }

    public User User { get; set; }
    public Species Species { get; set; }
}