# Converting to EV

---

### Contents:

 - [Description](#description)
 - [UX](#ux)
 - [Features](#features)
 - [Technologies Used](#technologies-used)
 - [Testing](#testing)
 - [Deployment](#deployment)
 - [Credits](#credits)
---

## Description

In this project I have created a website to help users find a suitable Electric Vehicle for them and to provide them with the locations of where they can find/buy their chosen vehicle.

This is necessary as the future of the cars market is electric and at them moment there are numerous benefits for switching from a internal combustion engine to a electric motor powered car, for instannce the government grants that are given (up to £3,500), also in the UK there are now a growing number of rapid charge stations for electric vehicles meaning it is easier to travel long distance with them than ever before.

---

## UX

---

This website is designed for people who are looking for a new Electric Vehicle and what to see a website that compares most of the vehicles available to purchase now or pre-order for the future. It shows that there are quite a few types of electric vehicles available and helps the user to choose the best one to suit their current needs whether they need something that can go a long time without needing to be charged or just a small city run around ev. Including a map to help locate their local showrooms and a contact form to ask any further questions that they may have about purchasing a new EV.

User stories:
 - I want to find my first electric vehicle and want to know the nearest showrooms to me so that I can look first hand and what I am looking for. 
 - I want to find a new SUV that is electric and costs under £50,000.
 - I want to find a new Hatchback that is electric and costs under £30,000.
 - I want to find out which elecetric vehicle has the longest mile range on one charge.

---

## Features

### Existing Features

 - Contact form is implemented to allow users to reach out with any questions they have about buying a EV.
 - A map is implemeneted with pins showing all the car dealers in and around the area of London.
 - List of EV to help users find the right EV that matches their needs.

### Feaatures left to impend

Unfortunately I was unable to add a feature to search for a location and find the closest showroom to the entered location as well as driving instructions for the user, however this could be added in easily in the future.
The filters also are not currently functioning and could be made useable in the future.
---

## Technologies Used

 - JQuerry - The project uses JQuerry to simplify DOM manipulation.
 - mail.js - The project uses mail.js to simplify the addition of a contact form.
 - Google maps api - maps api was used to add a google map with pins for locations on it.
 - JSON - This was used to simplify data storage in js.
 - Fontawesome - used to add icons.
 - MaterialIcons - Used to add icons.

---

## Testing

Contact form: - Go to the "Contact Us" page.
              - Try to submit the empty form and verify that an error message about the required fields appears.
              - Try to submit the form with an invalid email address and verify that a relevant error message appears.
              - Try to submit the form with an invalid email address and verify that a relevant error message appears.
              - Try to submit the form with all inputs valid and verify that a success message appears.


Map: - Go to the "Find your Dealers" page.
     - Check map controls work.
     - Check pins show up correctly.
     - Click on pins and ensure text is displayed correctly.

---

## Deployment

The website was written in cloud9 and deployed through github repositories using regular git commits from the command terminal in cloud9.

There is no differences between the deployed version and deployment version.

---

## Credits

### content:
 - Prices and mile ranges were taken from the manufacturers websites which have been linked to the list items in the website.

### media:
 - https://www.express.co.uk/life-style/cars/1085413/Audi-e-Tron-UK-electric-car-price-specs-range-release-date
 - https://ev-database.uk/car/1192/Vauxhall-Corsa-e
 - https://www.autocar.co.uk/car-review/volkswagen/e-golf
 - https://www.honda.co.uk/cars/new/honda-e/performance.html
 - https://www.motor1.com/jaguar/i-pace/
 - https://ev-database.uk/car/1125/Kia-e-Niro-64-kWh
 - https://ww.electrek.co/2019/01/28/hyundai-kona-ev-us-pricing/#
 - https://www.mercedes-benz.com/en/vehicles/eqc-2019/
 - https://www.tesla.com/en_gb/models
 - https://www.tesla.com/en_gb/modelx
 - https://ev-database.uk/car/1164/Renault-Zoe-ZE50-R110
 - https://ev-database.uk/car/1191/SEAT-Mii-Electric
 - https://www.motor1.com/news/368975/2020-smart-eq-fortwo-forfour/
 - https://evchargeplus.com/ev-specs/smart-eq-forfour-specifications/
 - https://www.pinterest.co.uk/pin/423831014924962406/?lp=true
 - https://www.wholesaleledlights.co.uk/blog/2011/12/how-led-lights-can-help-reduce-your-carbon-footprint/
 - https://insideevs.com/news/335300/ev-home-charging-typically-draws-less-than-half-the-power-of-an-electric-furnace/

