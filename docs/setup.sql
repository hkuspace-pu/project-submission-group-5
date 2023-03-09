-- Create the Surveyors table
CREATE TABLE Surveyors (
  SurveyorID int PRIMARY KEY,
  Name varchar(255) NOT NULL,
  Email varchar(255) NOT NULL,
  Password varchar(255) NOT NULL
);

-- Create the Species table
CREATE TABLE Species (
  SpeciesID int PRIMARY KEY,
  CommonName varchar(255) NOT NULL,
  LatinName varchar(255) NOT NULL
);

-- Create the Records table
CREATE TABLE Records (
  RecordID int PRIMARY KEY,
  SurveyorID int NOT NULL,
  SpeciesID int NOT NULL,
  Longitude float NOT NULL,
  Latitude float NOT NULL,
  DateObserved datetime NOT NULL,
  CONSTRAINT FK_Surveyor FOREIGN KEY (SurveyorID) REFERENCES Surveyors(SurveyorID),
  CONSTRAINT FK_Species FOREIGN KEY (SpeciesID) REFERENCES Species(SpeciesID)
);

-- Create the Users table
CREATE TABLE Users (
  UserID int PRIMARY KEY,
  Name varchar(255) NOT NULL,
  Email varchar(255) NOT NULL,
  Password varchar(255) NOT NULL,
  UserType varchar(50) NOT NULL
);

-- Create the UserRecords table
CREATE TABLE UserRecords (
  UserRecordID int PRIMARY KEY,
  UserID int NOT NULL,
  SpeciesID int NOT NULL,
  Longitude float NOT NULL,
  Latitude float NOT NULL,
  DateObserved datetime NOT NULL,
  CONSTRAINT FK_User FOREIGN KEY (UserID) REFERENCES Users(UserID),
  CONSTRAINT FK_Species2 FOREIGN KEY (SpeciesID) REFERENCES Species(SpeciesID)
);

-- Create the News table
CREATE TABLE News (
  NewsID int PRIMARY KEY,
  SpeciesID int NOT NULL,
  Title varchar(255) NOT NULL,
  Content text NOT NULL,
  PublishDate datetime NOT NULL,
  CONSTRAINT FK_Species3 FOREIGN KEY (SpeciesID) REFERENCES Species(SpeciesID)
);


/************************* VIEW *************************/

-- Create VIEW AllRecords table
CREATE VIEW AllRecords AS
SELECT Records.RecordID, Surveyors.Name AS SurveyorName, Species.CommonName, Species.LatinName, Records.Longitude, Records.Latitude, Records.DateObserved
FROM Records
INNER JOIN Surveyors ON Records.SurveyorID = Surveyors.SurveyorID
INNER JOIN Species ON Records.SpeciesID = Species.SpeciesID;

-- Create VIEW AllUserRecords table
CREATE VIEW AllUserRecords AS
SELECT UserRecords.UserRecordID, Users.Name AS UserName, Species.CommonName, UserRecords.Longitude, UserRecords.Latitude, UserRecords.DateObserved
FROM UserRecords
INNER JOIN Users ON UserRecords.UserID = Users.UserID
INNER JOIN Species ON UserRecords.SpeciesID = Species.SpeciesID;

-- Create VIEW AllNews table
CREATE VIEW AllNews AS
SELECT News.NewsID, Species.CommonName, Species.LatinName, News.Title, News.Content, News.PublishDate
FROM News
INNER JOIN Species ON News.SpeciesID = Species.SpeciesID;

/************************* Trigger *************************/

-- Trigger to insert a new record in the UserRecords table when a new record is added to the Records table by a general user
CREATE TRIGGER InsertUserRecord
ON Records
AFTER INSERT
AS
BEGIN
    DECLARE @UserID INT, @SpeciesID INT, @Longitude FLOAT, @Latitude FLOAT, @DateObserved DATETIME

    SELECT @UserID = UserID, @SpeciesID = SpeciesID, @Longitude = Longitude, @Latitude = Latitude, @DateObserved = DateObserved
    FROM inserted
    WHERE SurveyorID IS NULL -- Only trigger for records added by general users

    IF (@UserID IS NOT NULL AND @SpeciesID IS NOT NULL AND @Longitude IS NOT NULL AND @Latitude IS NOT NULL AND @DateObserved IS NOT NULL)
    BEGIN
        INSERT INTO UserRecords (UserID, SpeciesID, Longitude, Latitude, DateObserved)
        VALUES (@UserID, @SpeciesID, @Longitude, @Latitude, @DateObserved)
    END
END

-- Trigger to update the News table when a new record is added to the Records table
CREATE TRIGGER UpdateNews
ON Records
AFTER INSERT
AS
BEGIN
    DECLARE @SpeciesID INT, @CommonName VARCHAR(255), @LatinName VARCHAR(255), @RecordCount INT

    SELECT @SpeciesID = SpeciesID
    FROM inserted

    IF (@SpeciesID IS NOT NULL)
    BEGIN
        SELECT @CommonName = CommonName, @LatinName = LatinName
        FROM Species
        WHERE SpeciesID = @SpeciesID

        SELECT @RecordCount = COUNT(*)
        FROM Records
        WHERE SpeciesID = @SpeciesID

        UPDATE News
        SET Title = 'New record for ' + @CommonName,
            Content = 'A new record has been added for ' + @CommonName + ' (' + @LatinName + '). There are now ' + CONVERT(VARCHAR, @RecordCount) + ' records for this species in the database.',
            PublishDate = GETDATE()
        WHERE SpeciesID = @SpeciesID
    END
END

-- Trigger to prevent deletion of surveyors that have records in the Records table
CREATE TRIGGER PreventSurveyorDeletion
ON Surveyors
INSTEAD OF DELETE
AS
BEGIN
    IF EXISTS (SELECT * FROM deleted d INNER JOIN Records r ON d.SurveyorID = r.SurveyorID)
    BEGIN
        PRINT 'This surveyor cannot be deleted because they have records in the database.'
    END
    ELSE
    BEGIN
        DELETE FROM Surveyors WHERE SurveyorID IN (SELECT SurveyorID FROM deleted)
    END
END