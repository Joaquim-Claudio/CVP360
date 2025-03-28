/*CREATES ALL THE TABLES*/
CREATE TABLE IF NOT EXISTS Profile (
    ID SERIAL PRIMARY KEY,
    Name TEXT NOT NULL,
    ExtendedName TEXT
);

CREATE TABLE IF NOT EXISTS Page (
    ID SERIAL PRIMARY KEY,
    Name TEXT NOT NULL,
    URL TEXT
);

CREATE TABLE IF NOT EXISTS ProfilePage (
    ProfileID INTEGER REFERENCES Profile(ID) ON UPDATE CASCADE ON DELETE CASCADE,
    PageID INTEGER REFERENCES Page(ID) ON UPDATE CASCADE ON DELETE CASCADE,
    CONSTRAINT profile_page_key PRIMARY KEY (ProfileID, PageID)
);

CREATE TABLE IF NOT EXISTS CreditCard (
    ID SERIAL PRIMARY KEY,
    Number TEXT NOT NULL,
    Name TEXT NOT NULL,
    ExpireDate DATE NOT NULL,
    CVV VARCHAR(3) NOT NULL
);

CREATE TABLE IF NOT EXISTS Users (
    ID SERIAL PRIMARY KEY,
    FullName TEXT NOT NULL,
    BirthDate DATE,
    PhoneNumber TEXT,
    NIF TEXT,
    ProfileID INTEGER REFERENCES Profile(ID) ON UPDATE CASCADE ON DELETE CASCADE ,
    CreditCardID INTEGER REFERENCES CreditCard(ID) ON UPDATE CASCADE ON DELETE SET NULL
);

CREATE TABLE IF NOT EXISTS Project (
    ID SERIAL PRIMARY KEY,
    Title TEXT NOT NULL,
    Description TEXT NOT NULL,
    StartDate DATE,
    EndDate DATE,
    ActionText TEXT,
    ImgURL TEXT
);

CREATE TABLE IF NOT EXISTS EnrollmentStatus (
    ID SERIAL PRIMARY KEY,
    Status TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS Enrollment (
    ID SERIAL PRIMARY KEY,
    Date DATE NOT NULL DEFAULT CURRENT_DATE,
    Value DECIMAL NOT NULL,
    UserID INTEGER REFERENCES Users(ID) ON UPDATE CASCADE ON DELETE CASCADE
);

/*INSERTS TEST DATA TO THE TABLES*/

INSERT INTO Profile (Name, ExtendedName)
VALUES ('Admin', 'Administrador'),
       ('Donor', 'Doador'),
       ('Editor', 'Editor de Conteúdo');


INSERT INTO Users (FullName, BirthDate, PhoneNumber, NIF, ProfileID)
VALUES ('Diogo Pinheiro', '1996-06-15', '922369221', '305689444', (SELECT ID FROM Profile WHERE Name = 'Admin')),
       ('João Pedro Júnior', '1977-05-22', '935874441', '225874136', (SELECT ID FROM Profile WHERE Name = 'Donor')),
       ('Mário George Morais de Oliveira Igreja', '2004-04-13', '932555878', '298874441', (SELECT ID FROM Profile WHERE Name = 'Editor'));
