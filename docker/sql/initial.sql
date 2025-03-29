/*CREATES ALL THE TABLES*/
CREATE TABLE IF NOT EXISTS Profile (
    Id SERIAL PRIMARY KEY,
    Name TEXT NOT NULL,
    ExtendedName TEXT
);

CREATE TABLE IF NOT EXISTS Page (
    Id SERIAL PRIMARY KEY,
    Name TEXT NOT NULL,
    Url TEXT
);

CREATE TABLE IF NOT EXISTS ProfilePage (
    ProfileId INTEGER REFERENCES Profile(Id) ON UPDATE CASCADE ON DELETE CASCADE,
    PageId INTEGER REFERENCES Page(Id) ON UPDATE CASCADE ON DELETE CASCADE,
    CONSTRAINT profile_page_key PRIMARY KEY (ProfileId, PageId)
);

CREATE TABLE IF NOT EXISTS CreditCard (
    Id SERIAL PRIMARY KEY,
    Number TEXT NOT NULL,
    Name TEXT NOT NULL,
    ExpireDate DATE NOT NULL,
    Cvv VARCHAR(3) NOT NULL
);

CREATE TABLE IF NOT EXISTS Users (
    Id SERIAL PRIMARY KEY,
    FullName TEXT NOT NULL,
    BirthDate DATE,
    PhoneNumber TEXT,
    Nif TEXT,
    ProfileId INTEGER REFERENCES Profile(Id) ON UPDATE CASCADE ON DELETE CASCADE ,
    CreditCardId INTEGER REFERENCES CreditCard(Id) ON UPDATE CASCADE ON DELETE SET NULL
);

CREATE TABLE IF NOT EXISTS Project (
    Id SERIAL PRIMARY KEY,
    Title TEXT NOT NULL,
    Description TEXT NOT NULL,
    StartDate DATE,
    EndDate DATE,
    ActionText TEXT,
    ImgUrl TEXT
);

CREATE TABLE IF NOT EXISTS EnrollmentStatus (
    Id SERIAL PRIMARY KEY,
    Status TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS Enrollment (
    Id SERIAL PRIMARY KEY,
    Date DATE NOT NULL DEFAULT CURRENT_DATE,
    Value DECIMAL NOT NULL,
    EnStatusId INTEGER REFERENCES EnrollmentStatus(Id) ON UPDATE CASCADE ON DELETE SET NULL,
    UserId INTEGER REFERENCES Users(Id) ON UPDATE CASCADE ON DELETE CASCADE
);

/*INSERTS TEST DATA TO THE TABLES*/

INSERT INTO Profile (Name, ExtendedName)
VALUES ('Admin', 'Administrador'),
       ('Donor', 'Doador'),
       ('Editor', 'Editor de Conteúdo');

INSERT INTO page(Name, Url)
VALUES('CVP360', '/'),
      ('Login', '/Login'),
      ('Register', '/Register'),
      ('Homepage', '/Homepage'),
      ('Donations', '/Donations'),
      ('Profile', '/Profile'),
      ('Control Panel', '/ControlPanel');

INSERT INTO profilepage(ProfileId, PageId)
VALUES((SELECT Id FROM Profile WHERE Name = 'Admin'), (SELECT Id FROM page WHERE Name ='CVP360') ),
      ((SELECT Id FROM Profile WHERE Name = 'Admin'), (SELECT Id FROM page WHERE Name ='Login')),
      ((SELECT Id FROM Profile WHERE Name = 'Admin'), (SELECT Id FROM page WHERE Name ='Register')),
      ((SELECT Id FROM Profile WHERE Name = 'Admin'), (SELECT Id FROM page WHERE Name ='Homepage')),
      ((SELECT Id FROM Profile WHERE Name = 'Admin'), (SELECT Id FROM page WHERE Name ='Donations')),
      ((SELECT Id FROM Profile WHERE Name = 'Admin'), (SELECT Id FROM page WHERE Name ='Profile')),
      ((SELECT Id FROM Profile WHERE Name = 'Admin'), (SELECT Id FROM page WHERE Name ='Control Panel')),

      ((SELECT Id FROM Profile WHERE Name = 'Donor'), (SELECT Id FROM page WHERE Name ='CVP360') ),
      ((SELECT Id FROM Profile WHERE Name = 'Donor'), (SELECT Id FROM page WHERE Name ='Login')),
      ((SELECT Id FROM Profile WHERE Name = 'Donor'), (SELECT Id FROM page WHERE Name ='Register')),
      ((SELECT Id FROM Profile WHERE Name = 'Donor'), (SELECT Id FROM page WHERE Name ='Homepage')),
      ((SELECT Id FROM Profile WHERE Name = 'Donor'), (SELECT Id FROM page WHERE Name ='Donations')),
      ((SELECT Id FROM Profile WHERE Name = 'Donor'), (SELECT Id FROM page WHERE Name ='Profile')),

      ((SELECT Id FROM Profile WHERE Name = 'Editor'), (SELECT Id FROM page WHERE Name ='Control Panel'));



INSERT INTO Users (FullName, BirthDate, PhoneNumber, Nif, ProfileId)
VALUES ('Diogo Pinheiro', '1996-06-15', '922369221', '305689444', (SELECT Id FROM Profile WHERE Name = 'Admin')),
       ('João Pedro Júnior', '1977-05-22', '935874441', '225874136', (SELECT Id FROM Profile WHERE Name = 'Donor')),
       ('Mário George Morais de Oliveira Igreja', '2004-04-13', '932555878', '298874441', (SELECT Id FROM Profile WHERE Name = 'Editor'));
/*
INSERT INTO enrollmentstatus()
VALUES

INSERT INTO enrollment()
VALUES


INSERT INTO project()
VALUES
 */