/*Author: Liam Wright s3550247
  Notes:
  This is an SQL file designed to create a Database for the Programming Project 1 Carshare
  project. I have included a set of queries to test the output of the tables, and have
  added some dummy data to populate the tables for the result-set.
 */
 
CREATE DATABASE CarShare;

--CREATING TABLES
--Create Table to store Credit Card data
CREATE TABLE cards(
	CardNo int NOT NULL,
	FName varchar(25) NOT NULL,
	LName varchar(25) NOT NULL,
	ExpiryDate date NOT NULL,
	CSC int NOT NULL,
	PRIMARY KEY (CardNo)
);

--Creates Table to store Customer data
CREATE TABLE customers(
	FName varchar(25) NOT NULL,
	LName varchar(25) NOT NULL,
	DOB date NOT NULL,
	LicenseNo int NOT NULL,
	LicenceType varchar(2) NOT NULL,
	CardNo int NOT NULL,
	PRIMARY KEY (LicenseNo),
	FOREIGN KEY (CardNo) REFERENCES customers(CardNo)
);

--Creates Table to store Car Data
/*LicenseNo can be null so we can quickly search AVAILABLE CARS by checking whether or not
  they have a Licence Number assigned to them*/
CREATE TABLE cars(
	CarReg varchar() NOT NULL,
	CarMake varchar(25) NOT NULL,
	CarModel varchar(25) NOT NULL,
	CarYear int NOT NULL,
	Compliance varchar(2) NOT NULL,
	LicenseNo int,
	PRIMARY KEY (CerReg),
	FOREIGN KEY (LicenseNo) REFERENCES Customers(LicenseNo)
);


--POPULATING TABLES
--Insert dummy customer
INSERT INTO customers(Fname, LName, DOB, LicenseNo, LicenseType, CardNo)
VALUES ("Jeff", "Bezos", '12/01/1964', 123456789, "F", 1234567891234567)
COMMIT;

--Insert dummy Credit Card beloning to Jeff Bezos
INSERT INTO cards(CardNo, Fname, LName, ExpireyDate, CSC)
VALUES (123456789, "Jeff", "Bezos" '01/06/2020', 123)
COMMIT;

--Insert dummy car that has been booked by Jeff Bezos
INSERT INTO cars(CarReg, CarMake, CarModel, CarYear, Compliance, LicenseNo)
VALUES ("ABC123", "Mazda", "121", 1993, "L", 123456789)
COMMIT;

--Insert dummy car that isn't booked
INSERT INTO cars(CarReg, CarMake, CarModel, CarYear, Compliance, LicenseNo)
VALUES ("XYZ789", "Ford", "Focus", 2012, "L", NULL)
COMMIT;

--Insert dummy car that isn't booked and can only be driven by full license holders
--This is in case the car has been fitted with performance modifications such as a turbo
INSERT INTO cars(CarReg, CarMake, CarModel, CarYear, Compliance, LicenseNo)
VALUES ("SIK420", "Subaru", "Impreza", 2001, "F", NULL)
COMMIT;

--TEST QUERIES
--Query returns all data for every available car
SELECT *
FROM cars
WHERE LicenseNo IS NULL;

--Query returns all data for every car currently booked
SELECT *
FROM cars
WHERE LicenseNo IS NOT NULL;

--Query returns all data for every available car that is drivable by probationary drivers
SELECT *
FROM cars
WHERE LicenseNo IS NULL
AND (Compliance='L' OR Compliance='P1' OR Compliance='P2');