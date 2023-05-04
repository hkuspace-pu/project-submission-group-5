-- Insert 10 rows into the Surveyors table
INSERT INTO Surveyors (SurveyorID, Name, Email, Password)
VALUES
    (1, 'John Doe', 'johndoe@example.com', 'password1'),
    (2, 'Jane Smith', 'janesmith@example.com', 'password2'),
    (3, 'Bob Johnson', 'bjohnson@example.com', 'password3'),
    (4, 'Samantha Lee', 'samanthalee@example.com', 'password4'),
    (5, 'Michael Chen', 'michaelchen@example.com', 'password5'),
    (6, 'Emily Davis', 'emilydavis@example.com', 'password6'),
    (7, 'David Kim', 'davidkim@example.com', 'password7'),
    (8, 'Karen Thompson', 'karenthompson@example.com', 'password8'),
    (9, 'Peter Rodriguez', 'peterrodriguez@example.com', 'password9'),
    (10, 'Lisa Martinez', 'lisamartinez@example.com', 'password10');

-- Insert 10 rows into the Species table
INSERT INTO Species (SpeciesID, CommonName, LatinName)
VALUES
    (1, 'American Robin', 'Turdus migratorius'),
    (2, 'Mallard', 'Anas platyrhynchos'),
    (3, 'Eastern Gray Squirrel', 'Sciurus carolinensis'),
    (4, 'Common Raven', 'Corvus corax'),
    (5, 'Red-tailed Hawk', 'Buteo jamaicensis'),
    (6, 'White-tailed Deer', 'Odocoileus virginianus'),
    (7, 'Eastern Cottontail', 'Sylvilagus floridanus'),
    (8, 'American Black Bear', 'Ursus americanus'),
    (9, 'Bobcat', 'Lynx rufus'),
    (10, 'Eastern Bluebird', 'Sialia sialis');

-- Insert data into the Records table
INSERT INTO Records (RecordID, SurveyorID, SpeciesID, Longitude, Latitude, DateObserved)
VALUES
(1, 1, 1, -122.420, 37.775, '2022-04-01 12:30:00'),
(2, 2, 2, -122.419, 37.776, '2022-04-02 14:45:00'),
(3, 3, 3, -122.418, 37.777, '2022-04-03 16:00:00'),
(4, 4, 4, -122.417, 37.778, '2022-04-04 10:15:00'),
(5, 5, 5, -122.416, 37.779, '2022-04-05 11:30:00'),
(6, 6, 6, -122.415, 37.780, '2022-04-06 09:45:00'),
(7, 7, 7, -122.414, 37.781, '2022-04-07 08:00:00'),
(8, 8, 8, -122.413, 37.782, '2022-04-08 13:30:00'),
(9, 9, 9, -122.412, 37.783, '2022-04-09 12:45:00'),
(10, 10, 10, -122.411, 37.784, '2022-04-10 11:00:00');

-- Insert data into the Users table
INSERT INTO Users (UserID, Name, Email, Password, UserType)
VALUES
(1, 'John Doe', 'johndoe@example.com', 'password1', 'admin'),
(2, 'Jane Smith', 'janesmith@example.com', 'password2', 'expert'),
(3, 'Bob Johnson', 'bobjohnson@example.com', 'password3', 'moderator'),
(4, 'Sarah Lee', 'sarahlee@example.com', 'password4', 'user'),
(5, 'David Kim', 'davidkim@example.com', 'password5', 'user'),
(6, 'Emily Brown', 'emilybrown@example.com', 'password6', 'user'),
(7, 'Mike Davis', 'mikedavis@example.com', 'password7', 'user'),
(8, 'Karen Wilson', 'karenwilson@example.com', 'password8', 'user'),
(9, 'Tom Jones', 'tomjones@example.com', 'password9', 'user'),
(10, 'Lisa Lee', 'lisalee@example.com', 'password10', 'user');

-- Insert sample data into UserRecords table
INSERT INTO UserRecords (UserRecordID, UserID, SpeciesID, Longitude, Latitude, DateObserved)
VALUES 
(1, 2, 3, -73.935242, 40.730610, '2022-01-01 09:30:00'),
(2, 3, 5, -118.243683, 34.052235, '2022-01-02 11:45:00'),
(3, 1, 7, -84.388000, 33.749000, '2022-01-03 14:15:00'),
(4, 4, 2, -0.127758, 51.507351, '2022-01-04 16:00:00'),
(5, 1, 8, -75.165222, 39.952584, '2022-01-05 18:30:00'),
(6, 2, 4, -118.326743, 34.098342, '2022-01-06 20:00:00'),
(7, 3, 6, -87.629798, 41.878114, '2022-01-07 10:00:00'),
(8, 4, 1, -73.992852, 40.719383, '2022-01-08 12:15:00'),
(9, 1, 2, -122.419418, 37.774929, '2022-01-09 14:45:00'),
(10, 2, 5, -84.512020, 39.103119, '2022-01-10 16:30:00');

-- Insert sample data into News table
INSERT INTO News (NewsID, SpeciesID, Title, Content, PublishDate)
VALUES
(1, 3, 'New study finds decline in bird populations', 'A recent study has found a significant decline in bird populations across North America.', '2022-04-15 08:00:00'),
(2, 7, 'Rare butterfly spotted in local park', 'A rare butterfly species, thought to be extinct in this area, was spotted by a group of park visitors last weekend.', '2022-05-02 12:30:00'),
(3, 2, 'Conservation group launches new campaign', 'The Wildlife Conservation Alliance has launched a new campaign to raise awareness about the importance of protecting endangered species.', '2022-05-05 09:15:00'),
(4, 6, 'New reptile species discovered in the Amazon', 'Scientists have discovered a new species of snake in the Amazon rainforest, which they believe may have medicinal properties.', '2022-05-10 16:45:00'),
(5, 5, 'Global warming threatens penguin populations', 'A new report has warned that global warming could have devastating effects on penguin populations in Antarctica.', '2022-05-20 11:00:00'),
(6, 1, 'Rare bird sighting at local nature reserve', 'A rare bird species, not seen in this area for over a decade, was spotted by a group of birdwatchers at the local nature reserve.', '2022-05-25 06:45:00'),
(7, 4, 'New law proposed to protect endangered species', 'A group of lawmakers has proposed a new law to protect endangered species and their habitats, which has received widespread support from conservation groups.', '2022-06-01 14:20:00'),
(8, 8, 'Cheetah population reaches new high', 'The latest census has revealed that the cheetah population in Africa has reached a new high, thanks to successful conservation efforts.', '2022-06-05 10:10:00'),
(9, 9, 'Rare orchid found in local woodland', 'A rare orchid species, thought to be extinct in this area, was discovered by a group of botanists in a local woodland.', '2022-06-12 13:00:00'),
(10, 2, 'New species of beetle discovered in Indonesia', 'Scientists have discovered a new species of beetle in the rainforests of Indonesia, which they believe could have important ecological roles.', '2022-06-20 09:30:00');