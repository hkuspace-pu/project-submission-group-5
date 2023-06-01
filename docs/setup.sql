CREATE DATABASE NaturalScienceSurvey;

USE NaturalScienceSurvey;

-- DROP TABLE Species, Users, Records, News, Comment;

-- Create the Species table
CREATE TABLE Species (
  SpeciesID int PRIMARY KEY,
  SpeciesCode varchar(255) NOT NULL,
  CommonName varchar(255) NOT NULL,
  SciName varchar(255) NOT NULL
);

-- Create the Users table
CREATE TABLE Users (
  UserID int PRIMARY KEY,
  PhotoUrl varchar(255) NOT NULL,
  Name varchar(255) NOT NULL,
  Email varchar(255) NOT NULL,
  Password varchar(255) NOT NULL,
  UserType varchar(50) NOT NULL
);

-- Create the Records table
CREATE TABLE Records (
  RecordID int PRIMARY KEY,
  UserID int NOT NULL,
  SpeciesID int NOT NULL,
  Longitude float NOT NULL,
  Latitude float NOT NULL,
  DateObserved datetime NOT NULL,
  Age int NOT NULL,
  Sex int NOT NULL,
  Location varchar(255) NOT NULL,
  PhotoUrl varchar(255) NOT NULL,
  Width int NOT NULL,
  Height int NOT NULL,
  Status int NOT NULL,
  ReviewerID int NOT NULL,
  CONSTRAINT fk_user FOREIGN KEY (UserID) REFERENCES Users(UserID),
  CONSTRAINT fk_reviewer_id FOREIGN KEY (UserID) REFERENCES Users(UserID),
  CONSTRAINT fk_species FOREIGN KEY (SpeciesID) REFERENCES Species(SpeciesID)
);

-- Create the News table
CREATE TABLE News (
  NewsID int PRIMARY KEY,
  SpeciesID int NOT NULL,
  Title varchar(255) NOT NULL,
  Content text NOT NULL,
  PhotoUrl varchar(255) NOT NULL,
  PublishDate datetime NOT NULL,
  CONSTRAINT fk_species_2 FOREIGN KEY (SpeciesID) REFERENCES Species(SpeciesID)
);

-- Create the Comment table
CREATE TABLE Comment (
  CommentID INT IDENTITY PRIMARY KEY,
  UserID INT NOT NULL,
  RecordID INT NOT NULL,
  Content VARCHAR(2048),
  Rating INT DEFAULT 0,
  UpdatedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
  CreatedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT fk_user_2 FOREIGN KEY (UserID) REFERENCES Users(UserID),
  CONSTRAINT fk_record_id FOREIGN KEY (RecordID) REFERENCES Records(RecordID),
);