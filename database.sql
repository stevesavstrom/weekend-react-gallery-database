-- Database setup

-- Create a database called `react_gallery`

CREATE TABLE gallery (
	id SERIAL PRIMARY KEY,
	url VARCHAR (500),
	description varchar(500),
	likes integer DEFAULT 0
);

INSERT INTO gallery (url, description)
VALUES ('https://raw.githubusercontent.com/stevesavstrom/weekend-react-gallery-database/master/public/images/photo1.png', 'Hiking in Sedona, Arizona'),
('https://raw.githubusercontent.com/stevesavstrom/weekend-react-gallery-database/master/public/images/photo9.png', 'Biking in Chicago'),
('https://raw.githubusercontent.com/stevesavstrom/weekend-react-gallery-database/master/public/images/photo10.png', 'Wedding day in 2017!'),
('https://raw.githubusercontent.com/stevesavstrom/weekend-react-gallery-database/master/public/images/photo5.png', 'Hanging out in Waterton Lakes National Park'),
('https://raw.githubusercontent.com/stevesavstrom/weekend-react-gallery-database/master/public/images/photo2.png', 'My wfe, Colleen and I in Grand Marais, MN'),
('https://raw.githubusercontent.com/stevesavstrom/weekend-react-gallery-database/master/public/images/photo7.png', 'Biking in Minneapolis'),
('https://raw.githubusercontent.com/stevesavstrom/weekend-react-gallery-database/master/public/images/photo4.png', 'Honeymoon in Banff'),
('https://raw.githubusercontent.com/stevesavstrom/weekend-react-gallery-database/master/public/images/photo6.png', 'Teaching in Chicago'),
('https://raw.githubusercontent.com/stevesavstrom/weekend-react-gallery-database/master/public/images/photo8.png', 'Teaching in Minneapolis'),
('https://raw.githubusercontent.com/stevesavstrom/weekend-react-gallery-database/master/public/images/photo3.png', 'Skiing on the North Shore');

