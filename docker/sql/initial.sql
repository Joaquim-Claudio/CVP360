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

INSERT INTO enrollmentstatus(status)
VALUES('Ativo'),
      ('Encerrado'),
      ('Aguarda Pagamento');


INSERT INTO enrollment(date, value, enstatusid, userid)
VALUES('2025-03-29', '10',(SELECT Id FROM enrollmentstatus WHERE status = 'Aguarda Pagamento') ),
      ('2025-01-03', '1.99', (SELECT Id FROM enrollmentstatus WHERE status = 'Encerrado')),
      ('2025-02-05', '50', (SELECT Id FROM enrollmentstatus WHERE status = 'Ativo')),
      ('2025-02-05', '30', (SELECT Id FROM enrollmentstatus WHERE status = 'Encerrado'))

;

INSERT INTO project (title, description, startdate, enddate, actiontext, imgurl)
VALUES
    ('Campanha de Arrecadação de Alimentos',
     'Projeto destinado a arrecadar alimentos não perecíveis para as famílias carenciadas em diversas regiões.',
     '2025-04-01',
     '2025-05-01',
     'Doe alimentos e ajude a combater a fome!',
     ''),

    ('Reabilitação de Infraestruturas de Saúde',
     'Reabilitação de centros de saúde em áreas rurais, proporcionando melhores condições de atendimento às populações.',
     '2025-03-01',
     '2025-12-31',
     'Ajude-nos a melhorar os centros de saúde da sua região.',
     ''),

    ('Apoio a Vítimas de Catástrofes Naturais',
     'Projeto de emergência para fornecer assistência a vítimas de desastres naturais, incluindo água, alimentos e abrigo.',
     '2025-03-15',
     '2025-06-15',
     'Faça uma doação para ajudar as vítimas de desastres naturais.',
     ''),

    ('Educação para Prevenção de Doenças',
     'Campanha educativa sobre a prevenção de doenças transmissíveis, com foco em higiene e vacinação.',
     '2025-05-01',
     '2025-08-01',
     'Doe para ajudar a educar sobre a prevenção de doenças.',
     ''),

    ('Apoio Psicológico a Refugiados',
     'Oferecer apoio psicológico e assistência a refugiados e deslocados internos que sofreram traumas devido a conflitos e guerras.',
     '2025-06-01',
     '2025-09-01',
     'Ajude a proporcionar apoio psicológico aos refugiados.',
     '');
