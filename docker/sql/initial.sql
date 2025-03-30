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

CREATE TABLE IF NOT EXISTS Users (
    Id SERIAL PRIMARY KEY,
    FullName TEXT NOT NULL,
    BirthDate DATE,
    Email TEXT,
    Password TEXT,
    PhoneNumber TEXT,
    Nif TEXT,
    ProfileId INTEGER REFERENCES Profile(Id) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS CreditCard (
    Id SERIAL PRIMARY KEY,
    Number TEXT NOT NULL,
    Name TEXT NOT NULL,
    ExpireDate DATE NOT NULL,
    Cvv TEXT NOT NULL,
    Issuer TEXT,
    UserId INTEGER REFERENCES Users(Id) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS Category (
    Id SERIAL PRIMARY KEY,
    Name TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS Project (
    Id SERIAL PRIMARY KEY,
    Title TEXT NOT NULL,
    Description TEXT NOT NULL,
    StartDate DATE,
    EndDate DATE,
    ActionText TEXT,
    ImgUrl TEXT,
    CategoryId INTEGER REFERENCES Category(Id) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS EnrollmentStatus (
    Id SERIAL PRIMARY KEY,
    Status TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS Enrollment (
    Id SERIAL PRIMARY KEY,
    Value DECIMAL NOT NULL,
    Date DATE NOT NULL DEFAULT CURRENT_DATE,
    LimitDate DATE,
    EnStatusId INTEGER REFERENCES EnrollmentStatus(Id) ON UPDATE CASCADE ON DELETE SET NULL,
    UserId INTEGER REFERENCES Users(Id) ON UPDATE CASCADE ON DELETE CASCADE,
    ProjectId INTEGER REFERENCES Project(Id) ON UPDATE CASCADE ON DELETE CASCADE
);

/*INSERTS TEST DATA TO THE TABLES*/
INSERT INTO Profile (Name, ExtendedName)
VALUES ('Admin', 'Administrador'),
       ('Donor', 'Doador'),
       ('Editor', 'Editor de Conteúdo');

INSERT INTO Page(Name, Url)
VALUES('CVP360', '/'),
      ('Login', '/Login'),
      ('Register', '/Register'),
      ('Homepage', '/Homepage'),
      ('Donations', '/Donations'),
      ('Profile', '/Profile'),
      ('Control Panel', '/ControlPanel');

INSERT INTO ProfilePage(ProfileId, PageId)
VALUES((SELECT Id FROM Profile WHERE Name = 'Admin'), (SELECT Id FROM Page WHERE Name ='CVP360') ),
      ((SELECT Id FROM Profile WHERE Name = 'Admin'), (SELECT Id FROM Page WHERE Name ='Login')),
      ((SELECT Id FROM Profile WHERE Name = 'Admin'), (SELECT Id FROM Page WHERE Name ='Register')),
      ((SELECT Id FROM Profile WHERE Name = 'Admin'), (SELECT Id FROM Page WHERE Name ='Homepage')),
      ((SELECT Id FROM Profile WHERE Name = 'Admin'), (SELECT Id FROM Page WHERE Name ='Donations')),
      ((SELECT Id FROM Profile WHERE Name = 'Admin'), (SELECT Id FROM Page WHERE Name ='Profile')),
      ((SELECT Id FROM Profile WHERE Name = 'Admin'), (SELECT Id FROM Page WHERE Name ='Control Panel')),

      ((SELECT Id FROM Profile WHERE Name = 'Donor'), (SELECT Id FROM Page WHERE Name ='CVP360') ),
      ((SELECT Id FROM Profile WHERE Name = 'Donor'), (SELECT Id FROM Page WHERE Name ='Login')),
      ((SELECT Id FROM Profile WHERE Name = 'Donor'), (SELECT Id FROM Page WHERE Name ='Register')),
      ((SELECT Id FROM Profile WHERE Name = 'Donor'), (SELECT Id FROM Page WHERE Name ='Homepage')),
      ((SELECT Id FROM Profile WHERE Name = 'Donor'), (SELECT Id FROM Page WHERE Name ='Donations')),
      ((SELECT Id FROM Profile WHERE Name = 'Donor'), (SELECT Id FROM Page WHERE Name ='Profile')),

      ((SELECT Id FROM Profile WHERE Name = 'Editor'), (SELECT Id FROM Page WHERE Name ='Control Panel'));



INSERT INTO Users (FullName, BirthDate, Email, Password, PhoneNumber, Nif, ProfileId)
VALUES ('Diogo Pinheiro', '1996-06-15', 'diogo@gmail.com', 'AQAAAAEAACcQAAAAEILgaapz4GIn+ODY50qr1nkjouvw/ZqJNCLZXoMPKSZZZG0uVnRIhANu1KrsHaY5mQ==', '922369221', '305689444', (SELECT Id FROM Profile WHERE Name = 'Admin')),
       ('João Pedro Júnior', '1977-05-22', 'joaopedro000@gmail.com', 'AQAAAAEAACcQAAAAEFYYS2h1rZdng5BUmYD0ZDLbGXFskA0pyzUU/tWI5/T0EkQWTjIsVFc7E7KnE8SeSA==','935874441', '225874136', (SELECT Id FROM Profile WHERE Name = 'Donor')),
       ('Mário George Morais de Oliveira Igreja', '2004-04-13', 'mariomorais@gmail.com', 'AQAAAAEAACcQAAAAEAP55FDAewczzXKgIKJ/AhvW41wBueqtCcVYMa9wTDuxUZ8hZ7gwV+Gmf+XHpPMQTA==', '932555878', '298874441', (SELECT Id FROM Profile WHERE Name = 'Editor'));

INSERT INTO Category (Name)
VALUES ('Campanha'),
       ('Evento');

INSERT INTO Project (CategoryId, title, description, startdate, enddate, actiontext, imgurl)
VALUES
    ((SELECT Id FROM Category WHERE Name = 'Campanha'),
     'Campanha de Arrecadação de Alimentos',
     'Projeto destinado a arrecadar alimentos não perecíveis para as famílias carenciadas em diversas regiões.',
     '2025-04-01',
     '2025-05-01',
     'Inscrever-se',
     '/src/assets/images/card2.jpg'),

    ((SELECT Id FROM Category WHERE Name = 'Evento'),
     'Reabilitação de Infraestruturas de Saúde',
     'Reabilitação de centros de saúde em áreas rurais, proporcionando melhores condições de atendimento às populações.',
     '2025-03-01',
     '2025-12-31',
     'Saber mais',
     '/src/assets/images/card4.jpg'),

    ((SELECT Id FROM Category WHERE Name = 'Campanha'),
     'Apoio a Vítimas de Catástrofes Naturais',
     'Projeto de emergência para fornecer assistência a vítimas de desastres naturais, incluindo água, alimentos e abrigo.',
     '2025-03-15',
     '2025-06-15',
     'Inscrever-se',
     '/src/assets/images/card3.avif'),

    ((SELECT Id FROM Category WHERE Name = 'Campanha'),
     'Educação para Prevenção de Doenças',
     'Campanha educativa sobre a prevenção de doenças transmissíveis, com foco em higiene e vacinação.',
     '2025-05-01',
     '2025-08-01',
     'Inscrever-se',
     '/src/assets/images/card1.webp'),

    ((SELECT Id FROM Category WHERE Name = 'Evento'),
     'Apoio Psicológico a Refugiados',
     'Oferecer apoio psicológico e assistência a refugiados e deslocados internos que sofreram traumas devido a conflitos e guerras.',
     '2025-06-01',
     '2025-09-01',
     'Saber mais',
     '/src/assets/images/card5.jpg'),

    ((SELECT Id FROM Category WHERE Name = 'Evento'),
     'Campanha de Doação de Sangue',
     'Incentivar a doação de sangue para aumentar os estoques nos hospitais e salvar vidas.',
     '2025-05-10',
     '2025-07-15',
     'Saber mais',
     '/src/assets/images/card6.jpg'),

    ((SELECT Id FROM Category WHERE Name = 'Evento'),
     'Educação para Todos',
     'Promover a inclusão escolar de crianças carenciadas, oferecendo materiais e apoio pedagógico.',
     '2025-04-20',
     '2025-08-30',
     'Saber mais',
     '/src/assets/images/card7.jpg'),

    ((SELECT Id FROM Category WHERE Name = 'Campanha'),
     'Reflorestamento Comunitário',
     'Organizar ações de plantio de árvores para combater a desertificação e promover a sustentabilidade.',
     '2025-03-15',
     '2025-06-20',
     'Inscrever-se',
     '/src/assets/images/card8.jpg'),

    ((SELECT Id FROM Category WHERE Name = 'Campanha'),
     'Combate à Fome',
     'Distribuir alimentos e refeições para comunidades vulneráveis, garantindo segurança alimentar.',
     '2025-07-01',
     '2025-10-01',
     'Inscrever-se',
     '/src/assets/images/card9.jpg'),

    ((SELECT Id FROM Category WHERE Name = 'Evento'),
     'Campanha de Doação de Alimentos',
     'Arrecadação e distribuição de alimentos para comunidades carenciadas, garantindo o combate à fome e à desnutrição.',
     '2025-07-10',
     '2025-10-10',
     'Saber mais',
     '/src/assets/images/card10.jpg'),

    ((SELECT Id FROM Category WHERE Name = 'Campanha'),
     'Mutirão de Limpeza Ambiental',
     'Organização de voluntários para a limpeza de praias, rios e espaços públicos, promovendo a conscientização ambiental.',
     '2025-08-15',
     '2025-11-15',
     'Inscrever-se',
     '/src/assets/images/card11.jpg');



INSERT INTO EnrollmentStatus (status)
VALUES('Ativo'),
      ('Encerrado'),
      ('Aguarda Pagamento');

INSERT INTO Enrollment (date, value, enstatusid, userid, ProjectId)
VALUES('2025-03-29',
       10,
       (SELECT Id FROM EnrollmentStatus WHERE status = 'Aguarda Pagamento'),
       (SELECT Id FROM Users WHERE FullName = 'João Pedro Júnior'),
       (SELECT Id FROM Project WHERE Title = 'Campanha de Arrecadação de Alimentos')),

       ('2025-01-03',
        1.99,
        (SELECT Id FROM EnrollmentStatus WHERE status = 'Encerrado'),
        (SELECT Id FROM Users WHERE FullName = 'João Pedro Júnior'),
        (SELECT Id FROM Project WHERE Title = 'Apoio a Vítimas de Catástrofes Naturais')),

       ('2025-02-05',
        50,
        (SELECT Id FROM EnrollmentStatus WHERE status = 'Ativo'),
        (SELECT Id FROM Users WHERE FullName = 'João Pedro Júnior'),
        (SELECT Id FROM Project WHERE Title = 'Educação para Prevenção de Doenças'))
;

INSERT INTO CreditCard (Number, Name, ExpireDate, Cvv, Issuer, UserId)
VALUES ('3528-2079-6240-1210', 'Peter Quitzon', '2030-03-25', 'AQAAAAEAACcQAAAAECslB0bjA+yzzVp4+eSVpYM3T1S6lWAvvI4bZKpcISIRx5HghET4Yg9JnzPBfZ/iRw==', 'visa', (SELECT Id FROM Users WHERE FullName = 'João Pedro Júnior'))