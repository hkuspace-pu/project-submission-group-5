public class Species
{
    public int SpeciesID { get; set; }
    public string CommonName { get; set; }
    public string LatinName { get; set; }

    public ICollection<Record> Records { get; set; }
    public ICollection<UserRecord> UserRecords { get; set; }
    public ICollection<News> News { get; set; }
}