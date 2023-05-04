public class Surveyor
{
    public int SurveyorID { get; set; }
    public string Name { get; set; }
    public string Email { get; set; }
    public string Password { get; set; }

    public ICollection<Record> Records { get; set; }
}
