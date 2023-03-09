// Root myDeserializedClass = JsonConvert.DeserializeObject<Root>(myJsonResponse);
public class Behavior
{
    public string key { get; set; }
    public string localizedString { get; set; }
}

public class Content
{
    public string specimenUrl { get; set; }
    public string locale { get; set; }
    public List<SubjectDatum> subjectData { get; set; }
    public string commonName { get; set; }
    public string catalogId { get; set; }
    public object age { get; set; }
    public object sex { get; set; }
    public string behaviors { get; set; }
    public string location { get; set; }
    public string locationLine2 { get; set; }
    public bool isInternalUser { get; set; }
    public string licenseType { get; set; }
    public string thumbnailUrl { get; set; }
    public string previewUrl { get; set; }
    public string largeUrl { get; set; }
    public string mediaUrl { get; set; }
    public string userId { get; set; }
    public double longitude { get; set; }
    public double latitude { get; set; }
    public string mediaType { get; set; }
    public object recorder { get; set; }
    public string source { get; set; }
    public string speciesCode { get; set; }
    public string eBirdChecklistId { get; set; }
    public object obsComments { get; set; }
    public string userProfileUrl { get; set; }
    public string ebirdSpeciesUrl { get; set; }
    public string locationLine1 { get; set; }
    public bool collected { get; set; }
    public string eBirdChecklistUrl { get; set; }
    public object assetTags { get; set; }
    public object specimenIds { get; set; }
    public List<object> assetRelateds { get; set; }
    public object homeArchive { get; set; }
    public ExifData exifData { get; set; }
    public string reportAs { get; set; }
    public string assetId { get; set; }
    public string obsDttm { get; set; }
    public string exoticCategory { get; set; }
    public object microphone { get; set; }
    public object accessories { get; set; }
    public string mediaDownloadUrl { get; set; }
    public object comments { get; set; }
    public string rating { get; set; }
    public string assetState { get; set; }
    public string sciName { get; set; }
    public string userDisplayName { get; set; }
    public string ratingCount { get; set; }
    public int width { get; set; }
    public int height { get; set; }
    public string valid { get; set; }
}

public class ExifData
{
}

public class Results
{
    public int count { get; set; }
    public List<Content> content { get; set; }
    public string nextCursorMark { get; set; }
}

public class SurveyRecord
{
    public Results results { get; set; }
}

public class SubjectDatum
{
    public string speciesCode { get; set; }
    public string sciName { get; set; }
    public string comName { get; set; }
    public List<object> ageSexCounts { get; set; }
    public SubjectTags subjectTags { get; set; }
}

public class SubjectTags
{
    public List<Behavior> behaviors { get; set; }
}