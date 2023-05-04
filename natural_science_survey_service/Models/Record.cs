public class Record
{
    public int RecordID { get; set; }
    public int SurveyorID { get; set; }
    public int SpeciesID { get; set; }
    public double Longitude { get; set; }
    public double Latitude { get; set; }
    public DateTime DateObserved { get; set; }

    public Surveyor Surveyor { get; set; }
    public Species Species { get; set; }
}