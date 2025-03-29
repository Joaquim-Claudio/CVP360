namespace CVP360.UserData;

// Inner classes to match API requirements
public class UserCredentials (string username, string password) {
    public string Username {get; set;} = username;
    public string Password {get; set;} = password;
}

public class Query (string keywords) {
    public string Keywords {get; set;} = keywords;
}