public class User
{
    public int UserID { get; set; }
    public string PhotoUrl { get; set; }
    public string Name { get; set; }
    public string Email { get; set; }
    public string Password { get; set; }
    public string UserType { get; set; }
}

public class UserLogin
{
    public string Email { get; set; }
    public string Password { get; set; }
}