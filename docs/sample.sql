INSERT INTO Species (SpeciesID, SpeciesCode, CommonName, SciName) VALUES
  (1, 'SP001', 'American Goldfinch', 'Spinus tristis'),
  (2, 'SP002', 'Bald Eagle', 'Haliaeetus leucocephalus'),
  (3, 'SP003', 'Canada Goose', 'Branta canadensis'),
  (4, 'SP004', 'Mallard Duck', 'Anas platyrhynchos'),
  (5, 'SP005', 'Red-tailed Hawk', 'Buteo jamaicensis'),
  (6, 'SP006', 'Ruby-throated Hummingbird', 'Archilochus colubris'),
  (7, 'SP007', 'Wild Turkey', 'Meleagris gallopavo'),
  (8, 'SP008', 'Woodpecker', 'Picidae'),
  (9, 'SP009', 'Blue Jay', 'Cyanocitta cristata'),
  (10, 'SP010', 'Northern Cardinal', 'Cardinalis cardinalis');

INSERT INTO Users (UserID, PhotoUrl, Name, Email, Password, UserType) VALUES
  (1, 'https://example.com/photos/user1.jpg', 'John Smith', 'john@example.com', 'password1', 'admin'),
  (2, 'https://example.com/photos/user2.jpg', 'Mary Johnson', 'mary@example.com', 'password2', 'admin'),
  (3, 'https://example.com/photos/user3.jpg', 'Tom Jones', 'tom@example.com', 'password3', 'expert'),
  (4, 'https://example.com/photos/user4.jpg', 'Jane Doe', 'jane@example.com', 'password4', 'expert'),
  (5, 'https://example.com/photos/user5.jpg', 'Bob Smith', 'bob@example.com', 'password5', 'moderator'),
  (6, 'https://example.com/photos/user6.jpg', 'Alice Johnson', 'alice@example.com', 'password6', 'moderator'),
  (7, 'https://example.com/photos/user7.jpg', 'Mike Jones', 'mike@example.com', 'password7', 'user'),
  (8, 'https://example.com/photos/user8.jpg', 'Sue Doe', 'sue@example.com', 'password8', 'user'),
  (9, 'https://example.com/photos/user9.jpg', 'Jim Smith', 'jim@example.com', 'password9', 'user'),
  (10, 'https://example.com/photos/user10.jpg', 'Lisa Johnson', 'lisa@example.com', 'password10', 'user');

INSERT INTO Records (RecordID, UserID, SpeciesID, Longitude, Latitude, DateObserved, Age, Sex, Location, PhotoUrl, Width, Height, Status, ReviewerID) VALUES 
(1, 1, 1, -123.1207, 49.2827, '2023-04-28 09:00:00', 2, 2, 'Stanley Park', 'https://example.com/record1.jpg', 800, 600, 1, 3),
(2, 2, 2, -122.3493, 47.6205, '2023-04-30 13:20:00', 3, 1, 'Discovery Park', 'https://example.com/record2.jpg', 1200, 800, 1, 4),
(3, 3, 3, -122.4194, 37.7749, '2023-05-01 11:45:00', 1, 2, 'Golden Gate Park', 'https://example.com/record3.jpg', 900, 600, 0, 5),
(4, 4, 4, -118.2437, 34.0522, '2023-04-27 14:30:00', 2, 1, 'Griffith Park', 'https://example.com/record4.jpg', 800, 600, 0, 6),
(5, 5, 5, -122.3321, 47.6062, '2023-05-02 16:40:00', 3, 2, 'Seattle Waterfront', 'https://example.com/record5.jpg', 1200, 800, 1, 7),
(6, 6, 6, -118.4120, 33.9416, '2023-04-28 10:15:00', 1, 1, 'El Matador Beach', 'https://example.com/record6.jpg', 900, 600, 1, 8),
(7, 7, 7, -123.1207, 49.2827, '2023-05-03 08:30:00', 2, 2, 'Stanley Park', 'https://example.com/record7.jpg', 800, 600, 0, 9),
(8, 8, 8, -122.3493, 47.6205, '2023-04-30 12:10:00', 3, 1, 'Discovery Park', 'https://example.com/record8.jpg', 1200, 800, 1, 10),
(9, 9, 9, -122.4194, 37.7749, '2023-05-01 14:20:00', 1, 2, 'Golden Gate Park', 'https://example.com/record9.jpg', 900, 600, 0, 11),
(10, 10, 10, -118.2437, 34.0522, '2023-04-27 16:50:00', 2, 1, 'Griffith Park', 'https://example.com/record10.jpg', 800, 600, 1, 12);

INSERT INTO Comment (UserID, RecordID, Content, Rating) VALUES 
(1, 1, 'Great sighting!', 5),
(2, 2, 'Interesting observation, thanks for sharing!', 4),
(3, 3, 'Love this photo!', 5),
(4, 4, 'Nice record, keep up the good work!', 4),
(5, 5, 'Wow, this is amazing!', 5),
(6, 6, 'Thanks for sharing this sighting!', 4),
(7, 7, 'I saw a similar bird in my garden last week', 3),
(8, 8, 'Beautiful bird, great job capturing it on camera!', 5),
(9, 9, 'This is so cool, I wish I could see this bird in person!', 5),
(10, 10, 'Awesome record, thanks for sharing!', 4);

INSERT INTO News (NewsID, SpeciesID, Title, Content, PhotoUrl, PublishDate) VALUES 
(1, 1, 'New discovery of species', 'We have discovered a new species in the Amazon rainforest!', 'https://example.com/image.jpg', '2023-05-01'),
(2, 2, 'Conservation efforts', 'Efforts to conserve the elephant population are underway.', 'https://example.com/image.jpg', '2023-04-29'),
(3, 3, 'Polar bears in danger', 'The polar bear population is declining due to climate change.', 'https://example.com/image.jpg', '2023-04-28'),
(4, 4, 'Giant squid spotted', 'A rare sighting of a giant squid has been reported off the coast of Japan.', 'https://example.com/image.jpg', '2023-04-27'),
(5, 5, 'Endangered bird species', 'The population of the black-capped vireo is declining rapidly.', 'https://example.com/image.jpg', '2023-04-26'),
(6, 6, 'New study on bee decline', 'A new study has shed light on the decline of bee populations.', 'https://example.com/image.jpg', '2023-04-25'),
(7, 7, 'Illegal ivory trade', 'The illegal ivory trade is still a major problem despite efforts to combat it.', 'https://example.com/image.jpg', '2023-04-24'),
(8, 8, 'Rare bird sighting', 'A rare sighting of a red-tailed hawk has been reported in Central Park.', 'https://example.com/image.jpg', '2023-04-23'),
(9, 9, 'Marine plastic pollution', 'The amount of plastic in the ocean is reaching alarming levels.', 'https://example.com/image.jpg', '2023-04-22'),
(10, 10, 'Biodiversity hotspots', 'Some areas of the world are home to an incredibly high number of species.', 'https://example.com/image.jpg', '2023-04-21');